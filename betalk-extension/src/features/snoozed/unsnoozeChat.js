import { unarchiveChat } from "../../whatsappStore/unarchiveChat";
import { generateSnoozedChatsCSS } from "./clues";
import { loadSnoozedChatsFromStorage } from "./storage";

// Function to check and handle due snoozed chats
function checkDueSnoozedChats() {
  chrome.storage.local.get("snoozedChats", function (result) {
    const now = Number(Date.now()); // Get the current time in milliseconds
    const snoozedChats = result.snoozedChats || [];

    snoozedChats.forEach(function (chat) {
      // Check if the chat's snooze time has passed
      if (chat.until <= now) {
        requestUnsnooze(chat.chatId);
      }
    });
  });
}

export function initializeUnsnoozed() {
  // Check and handle snoozed chats from local storage
  checkDueSnoozedChats();

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "chatUnsnoozed") {
      const chatId = message.chatId;
      unarchiveChat(chatId);

      // Remove visual clue of active reminder
      loadSnoozedChatsFromStorage((loadedSnoozedChats) => {
        generateSnoozedChatsCSS(loadedSnoozedChats);
      });

      const snoozedChatsDrawerFocused = document.querySelector(
        `.customNavBarItem.active[data-drawer-id="snoozedChats"]`
      );

      if (snoozedChatsDrawerFocused) {
        const existingReminderElement = document.querySelector(
          `.reminderChatItem[data-chat-id="${chatId}"]`
        );

        if (existingReminderElement) {
          existingReminderElement.remove();
        }
      }
    }
  });

  // Set up listener for UNREAD_COUNT_CHANGE
  window.addEventListener("message", function (event) {
    if (
      event.source === window &&
      event.data &&
      event.data.type === "UNREAD_COUNT_CHANGE"
    ) {
      const { chatId, unreadCount } = event.data;

      if (unreadCount) {
        chrome.storage.local.get("snoozedChats", function (result) {
          const snoozedChats = result.snoozedChats || [];
          if (snoozedChats) {
            const chat = snoozedChats.find(
              (reminder) =>
                reminder.chatId === chatId &&
                reminder.snoozeCondition === "ifNoReply"
            );
            if (chat) {
              requestUnsnooze(chatId);
            }
          }
        });
      }
    }
  });
}

export function requestUnsnooze(chatId) {
  chrome.runtime.sendMessage({ action: "unsnoozeChat", chatId: chatId });
}

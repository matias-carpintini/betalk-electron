import { reminderChatItem } from "../../components/reminderChatItem";
import { formatTimestamp } from "../../utils/domHelpers";
import { archiveChat } from "../../whatsappStore/archiveChat";
import { getChatDetails } from "../../whatsappStore/getChatDetails";
import { generateSnoozedChatsCSS } from "./clues";
import { loadSnoozedChatsFromStorage } from "./storage";

// Function to send the snooze request to the background script
// The background script in in charge of setting up the chrome alarm that fires events
// so content-script gets noticed and do stuff then
export function requestSnooze(chat, snoozeTime, snoozeCondition) {
  chrome.runtime.sendMessage(
    {
      action: "snoozeChat",
      chatId: chat.chatId,
      chatUsername: chat.chatUsername,
      snoozeTime: snoozeTime,
      snoozeCondition: snoozeCondition,
    },
    (response) => {
      if (response && response.status === "success") {
        archiveChat(chat.chatId);

        // Update visual clue of active reminder
        loadSnoozedChatsFromStorage((loadedSnoozedChats) => {
          generateSnoozedChatsCSS(loadedSnoozedChats);
        });

        const snoozedChatsDrawerFocused = document.querySelector(
          `.customNavBarItem.active[data-drawer-id="snoozedChats"]`
        );

        if (snoozedChatsDrawerFocused) {
          const existingReminderElement = document.querySelector(
            `.reminderChatItem[data-chat-id="${chat.chatId}"]`
          );

          if (existingReminderElement) {
            // Assuming reminderChatItem is a function that returns an HTML string
            const newElementHTML = reminderChatItem(
              chat.chatId,
              chat.chatUsername,
              `Remind me: ${formatTimestamp(snoozeTime)}`
            );

            // Create a temporary container to parse the HTML string
            const tempContainer = document.createElement("div");
            tempContainer.innerHTML = newElementHTML;

            // Replace the existing element with the new one
            existingReminderElement.replaceWith(
              tempContainer.firstElementChild
            );

            getChatDetails(chat.chatId);
          }
        }
      } else {
        console.error("Failed to snooze chat.");
      }
    }
  );
}

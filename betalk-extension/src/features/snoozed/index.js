import { getElementByXpath } from "../../utils/domHelpers";
import { navBarItem } from "../../components/navBarItem";
import { chatActionButton } from "../../components/chatActionButton";
import { initializeUnsnoozed } from "./unsnoozeChat";
import { snoozeForm } from "./snoozeForm";
import { loadSnoozedChatsFromStorage } from "./storage";
import { snoozedChatsDrawer } from "./snoozedChatsDrawer";
import { generateSnoozedChatsCSS } from "./clues";
import { requestSnoozeFormListener } from "../../whatsappStore/requestSnoozeForm";

export function initializeSnoozed() {
  chrome.runtime.sendMessage({
    action: "checkDueAlarms",
  });
  loadSnoozedChatsFromStorage((loadedSnoozedChats) => {
    generateSnoozedChatsCSS(loadedSnoozedChats);
  });

  // Wait until WhatsApp builds up the interface
  document.addEventListener("whatsappInitialized", () => {
    initializeUnsnoozed();

    // Add the Snoozed icon at WhatsApp sidenav navigation.
    const sidenav = getElementByXpath(
      `//*[@id="app"]/div/div[2]/header/div/div/div/div/span/div/div[1]`
    );

    sidenav.insertChildAtIndex(
      navBarItem("snoozedChats", "Snoozed", "schedule", () =>
        snoozedChatsDrawer()
      ),
      1
    );

    document.addEventListener("chatOnHover", (event) => {
      const { chat, chatElement } = event.detail;

      // Setup a MutationObserver that adds Chat action buttons while hovering.
      const chatButtons = chatElement.querySelector(
        "[role='gridcell']._ak8i > span:nth-child(3)"
      );
      if (chatButtons) {
        const existingReminderBtn = chatButtons.querySelector(".reminderBtn");
        const newReminderBtn = chatActionButton(
          "schedule",
          () => snoozeForm(chat),
          "reminderBtn",
          "Remind Me",
          "H"
        );

        if (existingReminderBtn) {
          chatButtons.replaceChild(newReminderBtn, existingReminderBtn);
        } else {
          chatButtons.insertChildAtIndex(newReminderBtn, 0);
        }
      }
    });

    requestSnoozeFormListener();

    // Listen for the response from the injected script
    window.addEventListener("message", (event) => {
      if (
        event.data &&
        event.data.type === "OPEN_SNOOZE_FORM" &&
        event.data.chatId
      ) {
        const chatId = event.data.chatId;
        const userName = event.data.userName;
        const archived = event.data.archived;

        snoozeForm({
          chatId: chatId,
          chatUsername: userName,
          archived: archived,
        });
      }
    });
  });
}

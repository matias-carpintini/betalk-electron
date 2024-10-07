import { chatActionButton } from "../../components/chatActionButton";
import { navBarItem } from "../../components/navBarItem";
import { getElementByXpath } from "../../utils/domHelpers";
import { markChatDone } from "../../whatsappStore/markChatDone";
import {
  openArchivedChatsDrawerListener,
  openArchivedChatsDrawer,
} from "../../whatsappStore/openArchivedChatsDrawer";

export function initializeDone() {
  // Wait until WhatsApp builds up the interface
  document.addEventListener("whatsappInitialized", () => {
    openArchivedChatsDrawerListener();

    document.addEventListener("chatOnHover", (event) => {
      const { chat, chatElement } = event.detail;

      // Setup a MutationObserver that adds Chat action buttons while hovering.
      const chatButtons = chatElement.querySelector(
        "[role='gridcell']._ak8i > span:nth-child(3)"
      );
      if (chatButtons) {
        const existingDoneBtn = chatButtons.querySelector(".doneBtn");
        const newDoneBtn = chatActionButton(
          `check${!!chat.chatArchived ? "_circle" : ""}`,
          () => markChatDone(chat.chatId),
          "doneBtn",
<<<<<<< HEAD
          "Mark as Done",
          "E"
=======
          !!chat.chatArchived ? "Mark not Done" : "Mark Done",
          "E",
          !!chat.chatArchived
>>>>>>> recovered-branch
        );

        if (existingDoneBtn) {
          chatButtons.replaceChild(newDoneBtn, existingDoneBtn);
        } else {
          chatButtons.insertChildAtIndex(newDoneBtn, 0);
        }
      }
    });

    // Add the Snoozed icon at WhatsApp sidenav navigation.
    const sidenav = getElementByXpath(
      `//*[@id="app"]/div/div[2]/header/div/div/div/div/span/div/div[1]`
    );

    sidenav.insertChildAtIndex(
      navBarItem("archivedChats", "Done", "check_circle", () =>
        openArchivedChatsDrawer()
      ),
      1
    );
  });
}

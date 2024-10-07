import { loadFoldersFromStorage } from "./storage";
import { setupKeyboardListeners } from "./shortcuts";
import { filterChatsListener } from "../../whatsappStore/filterChats";
import { messagesListener } from "../../whatsappStore/messagesListener";
import { archiveChatEventListener } from "../../whatsappStore/archiveChatEventListener";
import { requestMoveToFormListener } from "../../whatsappStore/requestMoveToForm";
import { chatsSync } from "../../whatsappStore/chatsSync";
import { moveToForm } from "./moveToForm";
import { forwardFilterHandlerListener } from "../../whatsappStore/forwardFilterHandler";

export function initializeFolders() {
  loadFoldersFromStorage((loadedFolders) => {});

  // Listen for custom event and initialize features
  document.addEventListener("whatsappInitialized", () => {
    chatsSync();

    setupKeyboardListeners();
    requestMoveToFormListener();

    filterChatsListener();
    messagesListener();
    archiveChatEventListener();
    forwardFilterHandlerListener();

    // Listen for the response from the injected script
    window.addEventListener("message", (event) => {
      if (
        event.data &&
        event.data.type === "OPEN_MOVE_TO_FORM" &&
        event.data.chatId
      ) {
        const chatId = event.data.chatId;
        moveToForm(chatId);
      }
    });
  });
}

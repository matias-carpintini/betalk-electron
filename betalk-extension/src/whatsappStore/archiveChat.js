import { injectScript } from "../utils/domHelpers";

export function archiveChatListener() {
  injectScript("src/whatsappStore/scripts/archiveChat.js");
}

export function archiveChat(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "ARCHIVE_CHAT", chatId: chatId }, "*");
}

import { injectScript } from "../utils/domHelpers";

export function unarchiveChatListener() {
  injectScript("src/whatsappStore/scripts/unarchiveChat.js");
}

export function unarchiveChat(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "UNARCHIVE_CHAT", chatId: chatId }, "*");
}

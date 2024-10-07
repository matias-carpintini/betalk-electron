import { injectScript } from "../utils/domHelpers";

export function markChatDoneListener() {
  injectScript("src/whatsappStore/scripts/markChatDone.js");
}

export function markChatDone(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "MARK_CHAT_DONE", chatId: chatId }, "*");
}

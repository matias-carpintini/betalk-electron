import { injectScript } from "../utils/domHelpers";

export function filterChatsListener() {
  injectScript("src/whatsappStore/scripts/filterChats.js");
}

export function filterChats(chats) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FILTER_CHATS", chats: chats }, "*");
}

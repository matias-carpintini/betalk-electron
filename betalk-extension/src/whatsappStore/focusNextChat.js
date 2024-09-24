import { injectScript } from "../utils/domHelpers";

export function focusNextChatListener() {
  injectScript("src/whatsappStore/scripts/focusNextChat.js");
}

export function focusNextChat() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_NEXT_CHAT" }, "*");
}

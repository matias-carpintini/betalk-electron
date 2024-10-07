import { injectScript } from "../utils/domHelpers";

export function focusPreviousChatListener() {
  injectScript("src/whatsappStore/scripts/focusPreviousChat.js");
}

export function focusPreviousChat() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_PREVIOUS_CHAT" }, "*");
}

import { injectScript } from "../utils/domHelpers";

export function focusLastMessageListener() {
  injectScript("src/whatsappStore/scripts/focusLastMessage.js");
}

export function focusLastMessage() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FOCUS_LAST_MESSAGE" }, "*");
}

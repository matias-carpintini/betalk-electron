import { injectScript } from "../utils/domHelpers";

export function requestSnoozeFormListener() {
  injectScript("src/whatsappStore/scripts/requestSnoozeForm.js");
}

export function requestSnoozeForm() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "REQUEST_SNOOZE_FORM" }, "*");
}

import { injectScript } from "../utils/domHelpers";

export function requestMoveToFormListener() {
  injectScript("src/whatsappStore/scripts/requestMoveToForm.js");
}

export function requestMoveToForm() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "REQUEST_MOVE_TO_FORM" }, "*");
}

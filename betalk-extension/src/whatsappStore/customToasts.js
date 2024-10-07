import { injectScript } from "../utils/domHelpers";

export function customToasts() {
  injectScript("src/whatsappStore/scripts/customToasts.js");
}

export function triggerCustomToast(msg, shortcut) {
  window.postMessage({ type: "TRIGGER_CUSTOM_TOAST", msg, shortcut }, "*");
}

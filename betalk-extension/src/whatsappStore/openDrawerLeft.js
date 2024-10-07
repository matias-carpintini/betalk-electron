import { injectScript } from "../utils/domHelpers";

export function openDrawerLeftListener() {
  injectScript("src/whatsappStore/scripts/openDrawerLeft.js");
}

export function openDrawerLeft(drawer, drawerId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage(
    { type: "OPEN_DRAWER_LEFT", drawer: drawer, drawerId: drawerId },
    "*",
  );
}

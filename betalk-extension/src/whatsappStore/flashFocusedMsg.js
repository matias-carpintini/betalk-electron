import { injectScript } from "../utils/domHelpers";

export function flashFocusedMsgListener() {
  injectScript("src/whatsappStore/scripts/flashFocusedMsg.js");
}

export function flashFocusedMsg() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "FLASH_FOCUSED_MSG" }, "*");
}

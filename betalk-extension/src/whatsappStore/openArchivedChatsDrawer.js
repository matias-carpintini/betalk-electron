import { injectScript } from "../utils/domHelpers";

export function openArchivedChatsDrawerListener() {
  injectScript("src/whatsappStore/scripts/openArchivedChatsDrawer.js");
}

export function openArchivedChatsDrawer() {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "OPEN_ARCHIVED_CHATS_DRAWER" }, "*");
}

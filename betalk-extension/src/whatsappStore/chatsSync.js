import { injectScript } from "../utils/domHelpers";

export function chatsSync() {
  injectScript("src/whatsappStore/scripts/chatsSync.js");
}

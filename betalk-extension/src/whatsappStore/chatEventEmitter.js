import { injectScript } from "../utils/domHelpers";

export function chatEventEmitter() {
  injectScript("src/whatsappStore/scripts/chatEventEmitter.js");
}

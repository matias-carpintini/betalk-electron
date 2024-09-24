import { injectScript } from "../utils/domHelpers";

export function messagesListener() {
  injectScript("src/whatsappStore/scripts/messagesListener.js");
}
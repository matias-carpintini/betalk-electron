import { injectScript } from "../utils/domHelpers";

export function forwardFilterHandlerListener() {
  injectScript("src/whatsappStore/scripts/forwardFilterHandler.js");
}

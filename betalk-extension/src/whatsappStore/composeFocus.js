import { injectScript } from "../utils/domHelpers";

export function composeFocusListener() {
  injectScript("src/whatsappStore/scripts/composeFocus.js");
}

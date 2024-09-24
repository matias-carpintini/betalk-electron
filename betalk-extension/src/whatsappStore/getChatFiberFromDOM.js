import { injectScript } from "../utils/domHelpers";

export function getChatFiberFromDOMListener() {
  injectScript("src/whatsappStore/scripts/getChatFiberFromDOM.js");
}

export function getChatFiberFromDOM(selector) {
  window.postMessage({ type: "GET_CHAT_FIBER", selector }, "*");
}

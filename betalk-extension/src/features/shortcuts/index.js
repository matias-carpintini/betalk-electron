import { getElementByXpath } from "../../utils/domHelpers";
import { setupKeyboardListeners } from "./keyboardListeners";

export function initializeShortcuts() {
  // Wait util WhatsApp build up the interface
  document.addEventListener("whatsappInitialized", () => {
    setupKeyboardListeners();

    window.addEventListener("message", (event) => {
      if (event.data.type === "OPEN_CHAT") {
        const header = document.querySelector("._amid._aqbz");
        const backButton = document.createElement("button");
        backButton.classList.add(
          "_ajv6",
          "x1y1aw1k",
          "x1sxyh0",
          "xwib8y2",
          "xurb0ha",
          "_ajv2",
          "closeChatsContainer"
        );
        backButton.style.marginRight = "10px";

        backButton.innerHTML =
          '<span class="material-symbols-outlined">arrow_back</span>';
        backButton.addEventListener("click", () => {
          const chatsContainer = getElementByXpath(
            `//*[@id="app"]/div/div[2]/div[3]`
          );
          chatsContainer.classList.remove("shrinked");
        });

        header.insertChildAtIndex(backButton, 0);
      }
    });
  });
}

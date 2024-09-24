import { setupKeyboardListeners } from "./keyboardListeners";

export function initializeShortcuts() {
  // Wait util WhatsApp build up the interface
  document.addEventListener("whatsappInitialized", () => {
    setupKeyboardListeners();
  });
}

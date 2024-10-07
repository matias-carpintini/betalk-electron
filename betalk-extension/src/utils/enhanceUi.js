import { getElementByXpath, observeAndAct } from "./domHelpers";

// Remove WhatsApp spam
export function removeWhatsAppSpam() {
  observeAndAct(`//*[@id="side"]/div[4]`, (element) => {
    element.remove();
  });
  observeAndAct(
    `//*[@id="app"]/div/div[2]/div[3]/header/header/div/span/div/span/div[3]/span/div/ul/li[7]`,
    (element) => {
      element.remove();
    }
  );
  observeAndAct(
    `//*[@id="app"]/div/div[2]/div[3]/header/header/div/span/div/span/div[3]/span/div/ul/hr`,
    (element) => {
      element.remove();
    }
  );
}

export function addStartupMessage() {
  observeAndAct('//*[@id="app"]/div/div[2]/div[4]/div/div', (element) => {
    // Check if the message already exists
    if (!element.querySelector(".start-messaging")) {
      getElementByXpath(`//*[@id="app"]/div/div[2]/div[4]/div/div`).innerHTML =
        "";
      // Create a message element
      const message = document.createElement("div");
      message.innerHTML = `<p>👋 Use <kbd>↑</kbd> and <kbd>↓</kbd> to move between chats.</p>`;
      message.className = "start-messaging";

      // Append the message to the target element
      element.appendChild(message);
    }
  });
}

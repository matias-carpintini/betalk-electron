import { snoozeForm } from "../features/snoozed/snoozeForm";
import { injectScript } from "../utils/domHelpers";

export function getChatDetailsListener() {
  injectScript("src/whatsappStore/scripts/getChatDetails.js");

  // Listen for the response from the injected script
  window.addEventListener("message", (event) => {
    if (
      event.data &&
      event.data.type === "CHAT_DETAILS_RESPONSE" &&
      event.data.chat
    ) {
      const { chatId, userName, lastMsg, profilePic, archived } =
        event.data.chat;
      const chatContainer = document.querySelector(
        `.unloadedChat[data-chat-id="${chatId}"]`
      );

      if (profilePic) {
        chatContainer.querySelector(".profilePic").innerHTML = `
          <img
            alt=""
            draggable="false"
            class="x1n2onr6 x1lliihq xh8yej3 x5yr21d x6ikm8r x10wlt62 x14yjl9h xudhj91 x18nykt9 xww2gxu xl1xv1r x115dhu7 x17vty23 x1hc1fzr _ao3e"
            tabindex="-1"
            src=${profilePic}
            style="visibility: visible"
          />
        `;
      }

      if (userName) {
        chatContainer.querySelector(".userName").innerHTML = userName;
      }

      if (lastMsg) {
        chatContainer.querySelector(".lastMsg").innerHTML = lastMsg;
      }

      // Attach event listeners to the reminder buttons
      chatContainer
        .querySelector(".reminderBtn")
        .addEventListener("click", () => {
          snoozeForm({
            chatId: chatId,
            chatUsername: userName,
            archived: archived,
          });
        });
    }
  });
}

export function getChatDetails(chatId) {
  // After injecting the script, send the chat ID using postMessage
  window.postMessage({ type: "GET_CHAT_DETAILS", chatId: chatId }, "*");
}

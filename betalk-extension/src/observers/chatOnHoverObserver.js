import { getElementByXpath, getUniqueSelector } from "../utils/domHelpers";
import { getChatFiberFromDOM } from "../whatsappStore/getChatFiberFromDOM";

function chatOnHoverEvent(chat, chatElement) {
  // Dispatch a custom event to signal that a chat is being hovered
  const event = new CustomEvent("chatOnHover", {
    detail: { chat: chat, chatElement: chatElement },
  });
  document.dispatchEvent(event);
}

function handleChatHover(event) {
  const chatElement = event.target.closest(
    ".x10l6tqk.xh8yej3.x1g42fcv:not(.reminderChatItem)"
  );

  if (chatElement) {
    const selector = getUniqueSelector(chatElement);
    getChatFiberFromDOM(selector);
  }
}

window.addEventListener("message", (event) => {
  if (event.data.type === "CHAT_FIBER_RESULT") {
    const chatElement = document.querySelector(event.data.selector);
    const chat = event.data.chat;

    // Check if the data attributes are already set and match the current chat
    if (
      chatElement &&
      (chatElement.dataset.chatId !== chat.chatId.toString() ||
        chatElement.dataset.chatUsername !==
          (chat.chatUsername ?? "undefined").toString() ||
        chatElement.dataset.chatPhone !==
          (chat.chatPhone ?? "undefined").toString() ||
        chatElement.dataset.chatArchived !==
          (chat.chatArchived ?? "undefined").toString())
    ) {
      chatElement.dataset.chatId = chat.chatId;
      chatElement.dataset.chatUsername = chat.chatUsername;
      chatElement.dataset.chatPhone = chat.chatPhone;
      chatElement.dataset.chatArchived = chat.chatArchived;

      chatOnHoverEvent(chat, chatElement);
    }
  }
});

function handleActiveChatChange(chatElement) {
  if (chatElement) {
    const selector = getUniqueSelector(chatElement);
    getChatFiberFromDOM(selector);
  }
}

export function chatOnHoverObserver() {
  const chatsContainer = getElementByXpath('//*[@id="app"]');

  // Add mouseenter event listener to the chats container
  chatsContainer.addEventListener("mouseenter", handleChatHover, true);

  // Observe changes to identify active chats
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const activeChat = chatsContainer.querySelector(
          ".x10l6tqk.xh8yej3.x1g42fcv:has(._ak72._ak73._ak7p):not(.reminderChatItem)"
        );
        if (activeChat) {
          handleActiveChatChange(activeChat);
        }
      }
    });
  });

  observer.observe(chatsContainer, {
    attributes: true,
    subtree: true,
    attributeFilter: ["class"],
  });
}

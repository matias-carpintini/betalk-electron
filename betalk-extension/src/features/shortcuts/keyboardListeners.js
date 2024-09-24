import { isUserTyping, getElementByXpath } from "../../utils/domHelpers";
import {
  triggerNativeShortcut,
  simulateKeyPress,
} from "../../utils/eventHelpers";
import { requestSnoozeForm } from "../../whatsappStore/requestSnoozeForm";
import { requestMoveToForm } from "../../whatsappStore/requestMoveToForm";
import {
  focusNextChat,
  focusNextChatListener,
} from "../../whatsappStore/focusNextChat";
import {
  focusPreviousChat,
  focusPreviousChatListener,
} from "../../whatsappStore/focusPreviousChat";
import { composeFocusListener } from "../../whatsappStore/composeFocus";
import {
  focusLastMessageListener,
  focusLastMessage,
} from "../../whatsappStore/focusLastMessage";

const isMac = navigator.platform.toLowerCase().includes("mac");

export function setupKeyboardListeners() {
  focusNextChatListener();
  focusPreviousChatListener();
  composeFocusListener();
  focusLastMessageListener();

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "ArrowDown" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        focusNextChat();
      }

      if (
        event.key === "ArrowUp" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        focusPreviousChat();
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Escape" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        const activeElement = document.activeElement;
        if (
          activeElement &&
          activeElement.tagName === "DIV" &&
          activeElement.getAttribute("contenteditable") === "true"
        ) {
          event.preventDefault();
          event.stopPropagation();
          focusLastMessage();
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;
      if (
        event.key === "Enter" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        const messageInput = document.querySelector(
          'div[contenteditable="true"].x1hx0egp.x6ikm8r.x1odjw0f.x1k6rcq7.x6prxxf:not(.x1whj5v)'
        );
        if (messageInput) {
          messageInput.focus();
          event.preventDefault();
          event.stopPropagation();
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "c" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        triggerNativeShortcut({
          key: "n",
          code: "KeyN",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: false,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "/" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        triggerNativeShortcut({
          key: "k",
          code: "KeyK",
          ctrlKey: false,
          altKey: !isMac,
          shiftKey: false,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "e" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        triggerNativeShortcut({
          key: "e",
          code: "KeyE",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: true,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (
        event.key === "Enter" &&
        event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();

        // Get the message input element
        const messageInput = getElementByXpath(
          `//*[@id="main"]/footer/div[1]/div/span[2]/div/div[2]/div[1]/div/div`
        );
        if (messageInput) {
          // Simulate Enter key press to send the message
          simulateKeyPress(messageInput, "Enter");

          setTimeout(() => {
            // Archive the chat
            triggerNativeShortcut({
              key: "e",
              code: "KeyE",
              ctrlKey: true,
              altKey: !isMac,
              shiftKey: true,
              metaKey: isMac,
            });

            triggerNativeShortcut({
              key: "Escape",
              code: "KeyEscape",
              ctrlKey: false,
              altKey: false,
              shiftKey: false,
              metaKey: false,
            });
          }, 100);
        }
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "u" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();

        // Mark read/unread
        triggerNativeShortcut({
          key: "u",
          code: "KeyU",
          ctrlKey: true,
          altKey: !isMac,
          shiftKey: true,
          metaKey: isMac,
        });
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "h" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        requestSnoozeForm();
      }
    },
    true
  );

  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      if (
        event.key === "v" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        requestMoveToForm();
      }
    },
    true
  );
}

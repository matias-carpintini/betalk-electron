export function generateSnoozedChatsCSS(snoozedChats) {
  let css = "";

  if (snoozedChats) {
    snoozedChats.forEach((snoozedChat) => {
      css += `
      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]) div._ak8l div._ak8j div._ak8i span:nth-child(3)::after {
        content: 'schedule';
        display: inline-block;
        cursor: pointer;
        font-size: 24px;
        opacity: 1;
        font-family: 'Material Symbols Outlined';
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
        color: var(--icon-lighter);
        margin-left: 6px;
      }

      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]):hover div._ak8l div._ak8j div._ak8i span:nth-child(3)::after,
      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]):has(._ak72._ak73._ak7p) div._ak8l div._ak8j div._ak8i span:nth-child(3)::after {
        display: none; /* Hides the pseudo-element when the parent is hovered or has specified classes */
      }

      .x10l6tqk.xh8yej3.x1g42fcv:has(span[title*="${snoozedChat.chatUsername}"]) div._ak8l div._ak8j div._ak8i span:nth-child(3) > .reminderBtn > .material-symbols-outlined {
        font-variation-settings:
          "FILL" 1,
          "wght" 400,
          "GRAD" 0,
          "opsz" 24;
      }
    `;
    });
  }

  let style = document.getElementById("snoozedChatsClues");
  if (!style) {
    style = document.createElement("style");
    style.id = "snoozedChatsClues";
    document.head.appendChild(style);
  }

  style.innerHTML = css;
}

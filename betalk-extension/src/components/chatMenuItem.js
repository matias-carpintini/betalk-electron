import { simulateKeyPress } from "../utils/eventHelpers";

/**
 * Creates an <li> element with a given text and click callback.
 *
 * @param {string} text - The text content to be added to the <li> element.
 * @param {Function} onClickCallback - The callback function to be executed when the <li> element is clicked.
 * @returns {HTMLElement} The created <li> element.
 */
export function chatMenuItem(
  text,
  shortcut = "",
  callback = {},
  active = false
) {
  // Create the <li> element
  const liElement = document.createElement("li");
  liElement.tabIndex = 0;
  liElement.className = "_aj-r _aj-q _aj-_";
  liElement.setAttribute("data-animate-dropdown-item", "true");
  liElement.style.opacity = "1";

  // Handle hover state
  liElement.addEventListener("mouseover", () => {
    liElement.className = "_aj-s _aj-r _aj-q _aj-_";
  });
  liElement.addEventListener("mouseout", () => {
    liElement.className = "_aj-r _aj-q _aj-_";
  });

  // Create the <div> element inside <li>
  const divElement = document.createElement("div");
  divElement.className = "_aj-z _aj-t _alxo";
  divElement.setAttribute("role", "button");
  divElement.style.display = "flex";
  divElement.style.alignItems = "center";
  divElement.style.paddingRight = "24px";

  // Create a span for the chat name
  const chatNameSpan = document.createElement("span");
  chatNameSpan.textContent = text;
  chatNameSpan.style.flex = "1";

  // Add the chat name span to the <div>
  divElement.appendChild(chatNameSpan);

  // Create and add the check icon if active
  if (active) {
    const checkIconSpan = document.createElement("span");
    checkIconSpan.className = "material-symbols-outlined";
    checkIconSpan.textContent = "check"; // Material Icons check mark
    checkIconSpan.style.color = "var(--unread-marker-background)";
    divElement.appendChild(checkIconSpan);
  }

  if (shortcut) {
    const shortcutIconSpan = document.createElement("kbd");
    shortcutIconSpan.textContent = shortcut;
    divElement.appendChild(shortcutIconSpan);
  }

  // Append the <div> to the <li>
  liElement.appendChild(divElement);

  // Attach the click event listener
  liElement.addEventListener("click", () => {
    callback();
    simulateKeyPress(document.body, 27);
  });

  return liElement;
}

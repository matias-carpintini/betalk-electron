export function chatActionButton(
  icon,
  onClick = {},
  classList = "",
  actionName = "",
  shortcutHint = "",
  active = false
) {
  // Create button element
  const button = document.createElement("button");
  button.className = `xn6xy2s x1qx5ct2 xsgj6o6 xq22nx5 x16dsc37 ${classList}`;
  button.style.width = "20px";
  button.style.opacity = "1";
  button.style.position = "relative"; // Ensure the button is positioned

  // Create span element for icon
  const iconSpan = document.createElement("span");
  iconSpan.className = `material-symbols-outlined ${active ? "fill" : ""}`;
  iconSpan.textContent = icon;

  // Append the span to the button
  button.appendChild(iconSpan);

  // Set the data-tooltip attribute if actionName or shortcutHint is provided
  if (actionName || shortcutHint) {
    const tooltipContent = `${actionName}${
      shortcutHint ? ` <kbd>${shortcutHint}</kbd>` : ""
    }`;
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltip.innerHTML = tooltipContent;
    button.appendChild(tooltip);
  }

  // Add event listeners
  if (typeof onClick === "function") {
    button.addEventListener(
      "click",
      () => {
        onClick();
      },
      true
    );
  }

  // Add mousedown and mouseup listeners to stop propagation
  button.addEventListener(
    "mousedown",
    (event) => event.stopPropagation(),
    true
  );
  button.addEventListener("mouseup", (event) => event.stopPropagation(), true);

  // Return the button element
  return button;
}

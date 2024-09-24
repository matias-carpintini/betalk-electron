export function chatActionButton(icon, onClick = {}, classList = "") {
  // Create button element
  const button = document.createElement("button");
  button.className = `xn6xy2s x1qx5ct2 xsgj6o6 xq22nx5 x16dsc37 ${classList}`;
  button.style.width = "20px";
  button.style.opacity = "1";

  // Create span element for icon
  const iconSpan = document.createElement("span");
  iconSpan.className = "material-symbols-outlined";
  iconSpan.textContent = icon;

  // Append the spans to the button
  button.appendChild(iconSpan);

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

  // Add mousedown and mouseup listeners
  button.addEventListener(
    "mousedown",
    (event) => event.stopPropagation(),
    true
  );
  button.addEventListener("mouseup", (event) => event.stopPropagation(), true);

  // Return the button element
  return button;
}

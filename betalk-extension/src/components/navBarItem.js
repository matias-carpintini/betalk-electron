export function navBarItem(drawerId, title, icon, onClick = {}) {
  // Create the main div for the nav item
  const navDiv = document.createElement("div");
  navDiv.className = "_ajv7 _ajvb customNavBarItem";
  navDiv.dataset.drawerId = drawerId;

  // Create the button div
  const buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("aria-disabled", "false");
  buttonDiv.setAttribute("role", "button");
  buttonDiv.setAttribute("tabindex", "0");
  buttonDiv.className = "_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha";
  buttonDiv.setAttribute("aria-label", title);
  buttonDiv.setAttribute("title", title);
  buttonDiv.setAttribute("aria-expanded", "false");

  // Create the icon span
  const iconSpan = document.createElement("span");
  iconSpan.setAttribute("data-icon", icon);

  // Use Material Icons font for the icon
  const iconElement = document.createElement("span");
  iconElement.className = "material-symbols-outlined";
  iconElement.textContent = icon;

  iconSpan.appendChild(iconElement);

  // Append the icon span to the button div
  buttonDiv.appendChild(iconSpan);

  // Create inner div and append to button div
  const innerDiv = document.createElement("div");
  innerDiv.className = "x1n2onr6";
  buttonDiv.appendChild(innerDiv);

  // Append button div to main nav item div
  navDiv.appendChild(buttonDiv);

  if (typeof onClick === "function") {
    buttonDiv.addEventListener("click", () => {
      let previouslyActive = document.querySelector(".customNavBarItem.active");
      if (previouslyActive) {
        previouslyActive.classList.remove("active");
      }

      navDiv.classList.add("active");

      onClick();
    });
  }

  return navDiv;
}

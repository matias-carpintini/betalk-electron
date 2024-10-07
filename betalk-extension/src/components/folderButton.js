export function folderButton(
  id = 0,
  isActive = false,
  text = "",
  onClick = {},
  onDoubleClick = {},
  unreadCount = 0
) {
  // Create button element
  const button = document.createElement("button");
  button.className = isActive
    ? "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x6prxxf xo1l8bm x1btupbp xdxn8r xmuu9lm x1690sq9 x1yrsyyn x10b6aqq x1ye3gou xn6708d"
    : "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x1mvgj39 x1yky6xw x6prxxf xo1l8bm x1btupbp xf573un x1yrsyyn x10b6aqq x1ye3gou xn6708d";

  button.tabIndex = 0;
  button.setAttribute("type", "button");
  button.setAttribute("id", `folder-${id}`); // Set ID for reference

  // Create inner div
  const innerDiv1 = document.createElement("div");
  innerDiv1.className =
    "x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 align-items-center"; // Add align-items-center class

  // Create inner div text
  const innerDiv2 = document.createElement("div");
  innerDiv2.textContent = text;

  if (unreadCount) {
    innerDiv2.innerHTML += `<span
      class="x1rg5ohu x1xaadd7 x1pg5gke xo5v014 x1u28eo4 x2b8uid x16dsc37 x18ba5f9 x1sbl2l xy9co9w x5r174s x7h3shv x1tsellj x682dto x1e01kqd xpqt37d x9bpaai xk50ysn"
      style="margin-left: 8px;"
    >
      ${unreadCount}
    </span>`;
  }

  // Append inner divs to button
  innerDiv1.appendChild(innerDiv2);
  button.appendChild(innerDiv1);

  if (typeof onClick === "function") {
    button.addEventListener("click", () => {
      onClick();
    });
  }

  if (typeof onDoubleClick === "function") {
    button.addEventListener("dblclick", () => {
      onDoubleClick();
    });
  }

  // Return the button element
  return button;
}

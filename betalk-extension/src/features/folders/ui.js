import { getElementByXpath, hideAllChildren } from "../../utils/domHelpers";
import { folderButton } from "../../components/folderButton";
import { switchFolder } from "./actions";
import { currentActiveFolder, folders } from "./storage";
import { chatMenuItem } from "../../components/chatMenuItem";
import { moveToForm } from "./moveToForm";
import { folderForm } from "./folderForm";
import { foldersForm } from "./foldersForm";

export function initializeUI() {
  let foldersSection = getElementByXpath(`//*[@id="side"]/div[2]`);

  if (foldersSection.id !== "pane-side") {
    foldersSection.style.overflowX = "auto";
    foldersSection.style.flexWrap = "nowrap";
    foldersSection.style.whiteSpace = "nowrap";
    foldersSection.style.display = "flex";
    hideAllChildren(foldersSection); // this hides Unread and Groups tabs
  } else {
    foldersSection = document.createElement("div");
    foldersSection.className =
      "x1ky8ojb x78zum5 x1q0g3np x1a02dak x2lah0s x3pnbk8 xfex06f xeuugli x2lwn1j x1nn3v0j x1ykpatu x1swvt13 x1pi30zi ";
    foldersSection.style =
      "overflow-x: auto; flex-wrap: nowrap; white-space: nowrap; display: flex;";
    document.querySelector("#side").insertChildAtIndex(foldersSection, 2);
  }

  // Create a container for folders
  const foldersContainer = document.createElement("div");
  foldersContainer.id = "folders-container";
  foldersContainer.style.display = "flex";
  foldersContainer.style.flex = "1";
  foldersContainer.style.overflowX = "auto";
  foldersContainer.className = "xfex06f x3pnbk8";

  // Sort folders based on their position attribute
  const sortedFolders = [...folders].sort((a, b) => a.position - b.position);

  for (const folder of sortedFolders) {
    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );

    foldersContainer.append(
      folderButton(
        folder.id,
        folder.id === currentActiveFolder,
        folder.name,
        () => switchFolder(folder.id),
        () => folderForm(folder.id),
        totalChatsCount
      )
    );
  }

  // Add the folders container to the main section
  foldersSection.appendChild(foldersContainer);

  // Add settings button after folders
  const settingsButton = document.createElement("button");
  settingsButton.className =
    "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n x1mvgj39 x6prxxf xo1l8bm x1btupbp x1yrsyyn x10b6aqq volt";
  settingsButton.style.background = "inherit";
  settingsButton.style.paddingLeft = "8px";
  settingsButton.innerHTML = `
    <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 align-items-center">
      <span class="material-symbols-outlined">
        folder_managed
      </span>
    </div>
  `;
  settingsButton.addEventListener("click", () => foldersForm());
  foldersSection.appendChild(settingsButton);

  window.addEventListener("message", function (event) {
    if (
      event.source === window &&
      event.data &&
      event.data.type === "OPEN_CONTEXT_MENU"
    ) {
      const { chatId, archived } = event.data;

      const chatMenu = document.querySelector(
        `#app > div > span:nth-child(6) > div > ul > div`
      );

      chatMenu.children[0].remove(); // Remove archive button since we have custom actions and we need space here

      chatMenu.insertChildAtIndex(
        chatMenuItem("Move to", "V", () => moveToForm(chatId, archived)),
        0
      );
    }
  });
}

export function updateFoldersUI() {
  const foldersContainer = document.getElementById("folders-container");
  if (!foldersContainer) return;

  // Sort folders based on their position attribute
  const sortedFolders = [...folders].sort((a, b) => a.position - b.position);

  // Remove all existing folder buttons
  foldersContainer.innerHTML = "";

  // Re-add folder buttons in the new order
  for (const folder of sortedFolders) {
    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );

    foldersContainer.appendChild(
      folderButton(
        folder.id,
        folder.id === currentActiveFolder,
        folder.name,
        () => switchFolder(folder.id),
        () => folderForm(folder.id),
        totalChatsCount
      )
    );
  }
}

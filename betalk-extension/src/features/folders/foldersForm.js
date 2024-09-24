import Modal from "../../components/modal";
import { removeFolder } from "./actions";
import { folderForm } from "./folderForm";
import { folders, saveFoldersToStorage } from "./storage";
import Sortable from "sortablejs";
import { updateFoldersUI } from "./ui";

export function foldersForm() {
  const foldersList = folders
    .map(
      (folder) => `
    <div class="folder-item" data-folder-id="${folder.id}">
      <div class="folder-name">
        <span class="material-symbols-outlined">drag_indicator</span>
        ${folder.name}
      </div>
      <div class="folder-actions">
        <button type="submit" class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xexx8yu x4uap5 x18d9i69 xkhd6sd _ald6" data-action="edit" data-object-id="${
          folder.id
        }">
          <span class="material-symbols-outlined _ald7">edit</span>
        </button>
        ${
          folder.inbox
            ? ""
            : `<button type="submit" class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xexx8yu x4uap5 x18d9i69 xkhd6sd _ald6" data-action="remove" data-object-id="${folder.id}">
          <span class="material-symbols-outlined _ald7">delete</span>
        </button>`
        }
      </div>
    </div>
  `
    )
    .join("");

  const foldersFormContent = `
    <form id="foldersForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">folder_managed</span>
              Your folders
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div id="folders-list" class="folders-list">
              ${foldersList}
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e" style="flex: 1;">
          <button
            data-action="create"
            type="submit"
            class="x1n68mz9 x889kno x1a8lsjc x1n2onr6 xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xcjl5na x1k3x3db xuxw1ft"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                Create folder
              </div>
            </div>
          </button>
        </div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          <button
            data-action="submit"
            type="submit"
            class="x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xbtce8p x14v0smp xo8ufso xcjl5na x1k3x3db xuxw1ft xv52azi"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                OK
              </div>
            </div>
          </button>
        </div>
      </div>
    </form>
  `;

  const modal = new Modal({
    modalContent: foldersFormContent,
    formHandler: async (formData) => {
      const action = formData.get("formAction");
      const objectId = parseInt(formData.get("objectId"));

      switch (action) {
        case "edit":
          folderForm(objectId);
          return true;
        case "remove":
          removeFolder(objectId);
          return true;
        case "create":
          folderForm();
          return true;
        case "submit":
          updateFolderPositions();
          return true;
      }
    },
  });

  modal.openModal();

  initializeDragAndDrop();
}

function initializeDragAndDrop() {
  const foldersList = document.getElementById("folders-list");

  new Sortable(foldersList, {
    animation: 150,
    handle: ".folder-item",
    onEnd: (evt) => {
      // This event is triggered when a drag operation ends
      // You can use it for immediate updates if needed
    },
  });
}

function updateFolderPositions() {
  const folderItems = document.querySelectorAll(".folder-item");
  const updatedFolders = Array.from(folderItems).map((item, index) => {
    const folderId = parseInt(item.dataset.folderId);
    const folder = folders.find((f) => f.id === folderId);
    return { ...folder, position: index };
  });
  // Update the folders array with new positions
  folders.length = 0;
  folders.push(...updatedFolders);
  // Save the updated folders to storage
  saveFoldersToStorage(folders);

  // Update the UI to reflect the new order
  updateFoldersUI();
}

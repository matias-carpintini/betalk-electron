import Modal from "../../components/modal";
import { folders, saveFoldersToStorage } from "./storage";
import { updateUIWithNewFolder, updateUIWithUpdatedFolderName } from "./utils";
import { removeFolder, switchFolder } from "./actions";

export function folderForm(folderId = null) {
  const isEditMode = folderId !== null;
  const folder = isEditMode ? folders.find((f) => f.id === folderId) : null;

  const folderFormContent = `
    <form id="folderForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">${
                isEditMode ? "folder" : "create_new_folder"
              }</span>
              ${isEditMode ? "Edit folder" : "New folder"}
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="form-group">
              <div class="form-input">
                <label class="x1f6kntn x1u7k74 x1n68mz9 x1fcty0u">Folder name</label>
                <input type="text" name="folderName" value="${
                  isEditMode ? folder.name : ""
                }" required placeholder="🤑 Leads" class="selectable-text copyable-text">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div style="flex: 1;"></div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          ${
            isEditMode && !folder.inbox
              ? `
          <button
            data-action="remove"
            type="submit"
            class="x1sr8853 x889kno x1a8lsjc x1n2onr6 xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xcjl5na x1k3x3db xuxw1ft"
          >
            <div
              class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
            >
              <div
                class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 x3pnbk8 xfex06f xeuugli x2lwn1j xl56j7k x1q0g3np x6s0dn4"
                style="flex-grow: 1"
              >
                Remove
              </div>
            </div>
          </button> `
              : ""
          }
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
    modalContent: folderFormContent,
    formHandler: async (formData) => {
      const folderName = formData.get("folderName");
      const action = formData.get("formAction");

      if (action === "submit") {
        if (isEditMode) {
          folder.name = folderName;
          saveFoldersToStorage(folders);
          updateUIWithUpdatedFolderName(folderId, folderName);
        } else {
          const highestId = folders.reduce(
            (max, folder) => Math.max(max, folder.id),
            0
          );
          const newId = highestId + 1;
          const newFolder = { id: newId, name: folderName, contacts: [] };
          folders.push(newFolder);
          saveFoldersToStorage(folders);
          updateUIWithNewFolder(newId, folderName);
          switchFolder(newId);
        }
        return true;
      } else if (action === "remove" && isEditMode) {
        removeFolder(folderId);
        return true;
      }
      return false;
    },
  });

  modal.openModal();

  // Add event listener for the Enter key
  document.getElementById("folderForm").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const submitButton = document.querySelector(
        'button[data-action="submit"]'
      );
      submitButton.click();
    }
  });
}

import Modal from "../../components/modal";
import { folders, currentActiveFolder } from "./storage";
import { updateContactsInFolder } from "./actions";

export function moveToForm(chatId, archived) {
  const foldersOptions = folders
    .map((folder, index) => {
      const isSelected = folder.id === currentActiveFolder;
      return `
        <label class="option">
          <span style="flex: 1;">
            <input type="radio" name="folder" value="${folder.id}" ${
        isSelected ? "checked" : ""
      }>
            ${folder.name}
          </span>
          <span>
            ${index < 9 ? `<kbd>${index + 1}</kbd>` : ""}
          </span>
        </label>
      `;
    })
    .join("");

  const moveToFormContent = `
    <form id="moveToForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">folder</span>
              Move to
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="snooze-options">
              ${foldersOptions}
            </div>
          </div>
        </div>
      </div>
    </form>
  `;

  const modal = new Modal({
    modalContent: moveToFormContent,
    formHandler: async (formData) => {
      const selectedFolderId = parseInt(formData.get("folder"));
      if (selectedFolderId) {
        updateContactsInFolder(selectedFolderId, chatId, archived);
        return true; // Indicates successful handling
      }
      return false; // Indicates unsuccessful handling
    },
    shortcutHandler: (e) => {
      const form = document.getElementById("moveToForm");
      const key = e.key;
      if (/^[1-9]$/.test(key)) {
        e.preventDefault();
        const index = parseInt(key) - 1;
        const radioInputs = form.querySelectorAll('input[type="radio"]');
        if (index < radioInputs.length) {
          radioInputs[index].checked = true;
          radioInputs[index].focus();
          form.dispatchEvent(new Event("submit"));
        }
      } else if (key === "Enter") {
        e.preventDefault();
        form.dispatchEvent(new Event("submit"));
      }
    },
  });

  modal.openModal();

  // Add event listeners
  const form = document.getElementById("moveToForm");

  form.addEventListener("click", (e) => {
    if (e.target.closest("label.option")) {
      e.preventDefault();
      const radio = e.target
        .closest("label.option")
        .querySelector('input[type="radio"]');
      radio.checked = true;
      form.dispatchEvent(new Event("submit"));
    }
  });

  form.querySelector('input[type="radio"]').focus();
}

import { switchFolder } from "./actions";
import { isUserTyping } from "../../utils/domHelpers";
import { currentActiveFolder, folders } from "./storage";

export function setupKeyboardListeners() {
  document.addEventListener(
    "keydown",
    (event) => {
      if (isUserTyping()) return;

      const currentIndex = folders.findIndex(
        (folder) => folder.id === currentActiveFolder
      );
      const totalFolders = folders.length;

      if (
        event.key === "Tab" &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.shiftKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        const nextIndex = (currentIndex + 1) % totalFolders;
        switchFolder(folders[nextIndex].id);
        document
          .getElementById(`folder-${folders[nextIndex].id}`)
          .scrollIntoView({ behavior: "smooth", inline: "center" });
      }

      if (
        event.key === "Tab" &&
        event.shiftKey &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey
      ) {
        event.preventDefault();
        event.stopPropagation();
        const prevIndex = (currentIndex - 1 + totalFolders) % totalFolders;
        switchFolder(folders[prevIndex].id);
        document
          .getElementById(`folder-${folders[prevIndex].id}`)
          .scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    },
    true
  );
}

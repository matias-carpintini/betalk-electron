import { folderButton } from "../../components/folderButton";
import { currentActiveFolder } from "./storage";
import { switchFolder } from "./actions";
import { folderForm } from "./folderForm";

// Function to update the UI with the new folder
export function updateUIWithNewFolder(folderId, folderName) {
  const foldersSection = document.getElementById("folders-container");

  foldersSection.insertChildAtIndex(
    folderButton(
      folderId,
      folderId === currentActiveFolder,
      folderName,
      () => switchFolder(folderId),
      () => folderForm(folderId)
    ),
    foldersSection.childNodes.length
  );
}

// Function to update the UI when a folder name is changed
export function updateUIWithUpdatedFolderName(
  folderId,
  newFolderName,
  unreadCount = 0
) {
  const foldersSection = document.getElementById("folders-container");
  const oldButton = document.querySelector(`button[id='folder-${folderId}']`);

  if (oldButton) {
    const index = Array.prototype.indexOf.call(
      foldersSection.children,
      oldButton
    );

    // Remove the old button
    foldersSection.removeChild(oldButton);

    // Create a new button
    const newButton = folderButton(
      folderId,
      folderId === currentActiveFolder,
      newFolderName,
      () => switchFolder(folderId),
      () => folderForm(folderId),
      unreadCount
    );

    // Insert the new button at the same index
    foldersSection.insertBefore(newButton, foldersSection.children[index]);
  }
}

// Function to remove the folder from the UI
export function removeFolderFromUI(folderId) {
  const foldersSection = document.getElementById("folders-container");
  const oldButton = document.querySelector(`button[id='folder-${folderId}']`);

  if (oldButton) {
    foldersSection.removeChild(oldButton);
  }
}

export function getChatItemUnderMenu(menuElement) {
  // Get the position of the menu element
  const rect = menuElement.getBoundingClientRect();

  // Find the element at the center of the menu
  const chatItem = document.elementFromPoint(
    rect.left + rect.width / 2,
    rect.top + rect.height / 2
  );

  // Define the required classes for the chat item
  const requiredClasses = ["x10l6tqk", "xh8yej3", "x1g42fcv"];

  // Function to find the parent with all the required classes
  function findParentWithClasses(element, classes) {
    let currentElement = element;
    while (currentElement) {
      if (classes.every((cls) => currentElement.classList.contains(cls))) {
        return currentElement;
      }
      currentElement = currentElement.parentElement; // Move up the DOM tree
    }
    return null; // No parent with all the specified classes was found
  }

  // Find the parent with the required classes
  const chatItemParent = findParentWithClasses(chatItem, requiredClasses);

  return [chatItemParent, chatItem];
}

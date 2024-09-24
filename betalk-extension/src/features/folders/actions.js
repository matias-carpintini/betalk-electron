import { removeFolderFromUI, updateUIWithUpdatedFolderName } from "./utils";
import {
  currentActiveFolder,
  folders,
  saveFoldersToStorage,
  setFolders,
  setCurrentActiveFolder,
} from "./storage";
import { filterChats } from "../../whatsappStore/filterChats";
import { initializeUI } from "./ui";

export function updateContactsInFolder(folderId, contactId, archived) {
  const targetFolder = folders.find((f) => f.id === folderId);
  if (!targetFolder) {
    console.log(`Folder with ID ${folderId} not found.`);
    return;
  }

  // Remove contact from all other folders
  folders.forEach((folder) => {
    if (folder.id !== folderId) {
      const contactIndex = folder.contacts.findIndex((c) => c.id === contactId);
      if (contactIndex !== -1) {
        folder.contacts.splice(contactIndex, 1);
      }
    }
  });

  // Add contact to target folder
  const existingContact = targetFolder.contacts.find((c) => c.id === contactId);
  if (!existingContact) {
    targetFolder.contacts.push({
      id: contactId,
      unreadCount: 0,
      archived: archived,
    });
  }

  saveFoldersToStorage(folders);

  // Update UI
  folders.forEach((folder) => {
    if (folder.id === currentActiveFolder) {
      const updatedChats = folder.contacts.map((c) => c.id);
      filterChats(updatedChats);
    }

    const totalChatsCount = folder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    updateUIWithUpdatedFolderName(folder.id, folder.name, totalChatsCount);
  });
}

export function switchFolder(folderId) {
  const folder = folders.find((f) => f.id === folderId);
  const chats = folder.contacts.map((c) => c.id);

  // Deactivate previous folder
  if (currentActiveFolder) {
    const previousButton = document.getElementById(
      `folder-${currentActiveFolder}`
    );
    if (previousButton) {
      previousButton.className =
        "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x1mvgj39 x1yky6xw x6prxxf xo1l8bm x1btupbp xf573un x1yrsyyn x10b6aqq x1ye3gou xn6708d";
      previousButton.setAttribute("aria-pressed", "false");
    }
  }

  // Activate selected folder
  const activeButton = document.getElementById(`folder-${folderId}`);
  if (activeButton) {
    activeButton.className =
      "xjb2p0i x1ypdohk x972fbf xcfux6l x1qhh985 xm0m39n xzqyx8i xqa96yk xvwobac x1h2y310 x6prxxf xo1l8bm x1btupbp xdxn8r xmuu9lm x1690sq9 x1yrsyyn x10b6aqq x1ye3gou xn6708d";
    activeButton.setAttribute("aria-pressed", "true");
  }

  setCurrentActiveFolder(folderId);
  filterChats(chats);
}

// Add this new function to update unread count
export function updateUnreadCount(chatId, unreadCount) {
  folders.forEach((folder) => {
    const contact = folder.contacts.find((c) => c.id === chatId);
    if (contact) {
      contact.unreadCount = unreadCount;
    }
  });
  saveFoldersToStorage(folders);
}

export function removeFolder(folderId) {
  if (folders.find((f) => f.id === folderId).inbox) return;
  const index = folders.findIndex((f) => f.id === folderId);
  if (index !== -1) {
    const inboxFolder = folders.find((f) => f.inbox === true);

    if (inboxFolder) {
      // Add contacts of the folder to be removed to the inbox folder
      inboxFolder.contacts.push(...folders[index].contacts);
    }

    folders.splice(index, 1);

    saveFoldersToStorage(folders);
    removeFolderFromUI(folderId);

    const totalChatsCount = inboxFolder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    updateUIWithUpdatedFolderName(
      inboxFolder.id,
      inboxFolder.name,
      totalChatsCount
    );

    switchFolder(1);
  }
}

// Set up listener for UNREAD_COUNT_CHANGE
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "UNREAD_COUNT_CHANGE"
  ) {
    const { chatId, unreadCount } = event.data;
    updateUnreadCount(chatId, unreadCount);
  }
});

// Add this new function to update archive status
export function updateArchiveStatus(chatId, archived) {
  let updatedFolder = null;
  folders.forEach((folder) => {
    const contact = folder.contacts.find((c) => c.id === chatId);
    if (contact) {
      contact.archived = archived;
      updatedFolder = folder;
    }
  });
  saveFoldersToStorage(folders);

  if (updatedFolder !== null) {
    const totalChatsCount = updatedFolder.contacts.reduce(
      (sum, contact) => sum + (!contact.archived ? 1 : 0),
      0
    );
    updateUIWithUpdatedFolderName(
      updatedFolder.id,
      updatedFolder.name,
      totalChatsCount
    );
  }
}

// Set up listener for ARCHIVE_CHAT_EVENT
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "ARCHIVE_CHAT_EVENT"
  ) {
    const { chatId, archived } = event.data;
    updateArchiveStatus(chatId, archived);
  }
});

// Set up listener for CHATS_SYNC
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHATS_SYNC"
  ) {
    const chats = event.data.chats;

    folders.forEach((folder) => {
      folder.contacts = folder.contacts.map((contact) => {
        const updatedContact = chats.find((chat) => chat.id === contact.id);
        return updatedContact ? updatedContact : contact;
      });
    });

    // Handle inbox folder separately
    const inboxFolder = folders.find((folder) => folder.inbox);
    if (inboxFolder) {
      const allContacts = folders.flatMap((folder) =>
        folder.contacts.map((c) => c.id)
      );
      const newContacts = chats.filter(
        (chat) => !allContacts.includes(chat.id)
      );
      inboxFolder.contacts.push(...newContacts);
    }

    saveFoldersToStorage(folders);
    initializeUI();
    switchFolder(1);
  }
});

// Set up listener for CHAT_ADDED
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHAT_ADDED"
  ) {
    const chatId = event.data.chatId;
    const inboxFolder = folders.find((folder) => folder.inbox);
    if (inboxFolder) {
      inboxFolder.contacts.push({
        id: chatId,
        archived: false,
      });
      saveFoldersToStorage(folders);

      const totalChatsCount = inboxFolder.contacts.reduce(
        (sum, contact) => sum + (!contact.archived ? 1 : 0),
        0
      );
      updateUIWithUpdatedFolderName(
        inboxFolder.id,
        inboxFolder.name,
        totalChatsCount
      );
    }
  }
});

// Set up listener for CHAT_REMOVED
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "CHAT_REMOVED"
  ) {
    const chatId = event.data.chatId;
    let targetFolder = null;

    // Find the folder containing the contact
    folders.forEach((folder) => {
      const index = folder.contacts.findIndex((c) => c.id === chatId);
      if (index !== -1) {
        targetFolder = folder;
        folder.contacts.splice(index, 1);
      }
    });

    if (targetFolder) {
      saveFoldersToStorage(folders);

      const totalChatsCount = targetFolder.contacts.reduce(
        (sum, contact) => sum + (!contact.archived ? 1 : 0),
        0
      );
      updateUIWithUpdatedFolderName(
        targetFolder.id,
        targetFolder.name,
        totalChatsCount
      );
    }
  }
});

// Set up listener for FILTER_CHATS_BY_ACTIVE_FOLDER
window.addEventListener("message", function (event) {
  if (
    event.source === window &&
    event.data &&
    event.data.type === "FILTER_CHATS_BY_ACTIVE_FOLDER"
  ) {
    const activeFolder = folders.find(
      (folder) => folder.id === currentActiveFolder
    );
    filterChats(activeFolder.contacts.map((c) => c.id));
  }
});

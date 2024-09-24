const initialFolders = [
  {
    id: 1,
    name: "Important",
    contacts: [],
    inbox: true,
  },
  {
    id: 2,
    name: "Others",
    contacts: [],
  },
];

export let folders = [];
export function setFolders(val) {
  folders = val;
}

export let currentActiveFolder = 1;
export function setCurrentActiveFolder(val) {
  currentActiveFolder = val;
}

// Load folders from storage and execute callback
export function loadFoldersFromStorage(callback) {
  loadSettingsFromStorage((loadedFolders, _) => {
    setFolders(loadedFolders);
    callback(loadedFolders);
  });
}

// Save folders to storage
export function saveFoldersToStorage(folders) {
  chrome.storage.local.set({ folders: folders });
}

// Load folders from storage
export function loadSettingsFromStorage(callback) {
  chrome.storage.local.get(["folders"], (result) => {
    const loadedFolders = result.folders || initialFolders; // Use initial folders if no folders are found
    callback(loadedFolders);
  });
}

export function resetFolders() {
  folders = initialFolders;
  saveFoldersToStorage(folders);
}

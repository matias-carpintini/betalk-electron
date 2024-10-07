export let snoozedChats = [];
export function setSnoozedChats(val) {
  snoozedChats = val;
}

// Save snoozedChats to storage
export function saveSnoozedChatsToStorage(snoozedChats) {
  chrome.storage.local.set({ snoozedChats: snoozedChats });
}

// Load snoozedChats from storage
export function loadSnoozedChatsFromStorage(callback) {
  chrome.storage.local.get(["snoozedChats"], (result) => {
    const loadedSnoozedChats = result.snoozedChats;
    setSnoozedChats(loadedSnoozedChats);
    callback(loadedSnoozedChats);
  });
}

export function resetSnoozedChatsFromStorage() {
  chrome.storage.local.set({ snoozedChats: [] });
}

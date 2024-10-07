// Function to handle snoozing a chat
function handleSnooze(chatId, chatUsername, snoozeTime, snoozeCondition) {
  chrome.storage.local.get("snoozedChats", function (result) {
    const snoozedChats = result.snoozedChats || [];
    let chatFound = false;

    // Check if the chat already exists in the snoozedChats array
    for (let i = 0; i < snoozedChats.length; i++) {
      if (snoozedChats[i].chatId === chatId) {
        // Update the existing reminder
        snoozedChats[i].until = snoozeTime;
        snoozedChats[i].snoozeCondition = snoozeCondition;
        snoozedChats[i].chatUsername = chatUsername;
        chatFound = true;
        break;
      }
    }

    // If the chat was not found, add a new reminder
    if (!chatFound) {
      snoozedChats.push({
        chatId: chatId,
        chatUsername: chatUsername,
        snoozeCondition: snoozeCondition,
        until: snoozeTime,
      });
    }

    // Save the updated snoozedChats array
    chrome.storage.local.set({ snoozedChats: snoozedChats }, function () {
      // Clear existing alarm if it exists
      chrome.alarms.clear(`unsnooze_${chatId}`, function (wasCleared) {
        if (wasCleared) {
          console.log(`Alarm for chat ${chatId} was cleared.`);
        } else {
          console.log(`No alarm found for chat ${chatId} to clear.`);
        }

        // Create or update the Chrome alarm
        chrome.alarms.create(`unsnooze_${chatId}`, {
          when: snoozeTime,
        });
        console.log(
          `Alarm for chat ${chatId} set for ${new Date(
            snoozeTime
          ).toLocaleString()}.`
        );
      });
    });
  });
}

// Function to unsnooze a chat
function handleUnsnooze(chatId) {
  chrome.storage.local.get("snoozedChats", function (result) {
    let snoozedChats = result.snoozedChats || [];
    snoozedChats = snoozedChats.filter((chat) => chat.chatId !== chatId);

    chrome.storage.local.set({ snoozedChats: snoozedChats }, function () {
      // Send message to all tabs instead of just the active one
      chrome.tabs.query({}, (tabs) => {
        tabs.forEach((tab) => {
          chrome.tabs.sendMessage(
            tab.id,
            {
              action: "chatUnsnoozed",
              chatId,
            },
            () => {
              if (chrome.runtime.lastError) {
                // Ignore errors about receiving end not existing
                console.log("Message sending failed, but that's okay.");
              }
            }
          );
        });
      });
    });
  });
}

// Define a function to check if WhatsApp tab is focused
function isWhatsAppTabFocused(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (tabs.length > 0) {
      const tab = tabs[0];
      // Replace with the actual URL or identifier for the WhatsApp tab
      const isWhatsAppTab = tab.url && tab.url.includes("web.whatsapp.com");

      callback(isWhatsAppTab);
    } else {
      callback(false);
    }
  });
}

// Alarm listener
chrome.alarms.onAlarm.addListener(function (alarm) {
  isWhatsAppTabFocused(function (isFocused) {
    if (isFocused && alarm.name.startsWith("unsnooze_")) {
      const chatId = alarm.name.replace("unsnooze_", "");
      handleUnsnooze(chatId);
    }
  });
});

// Check due alarms when the tab gains focus
chrome.tabs.onActivated.addListener(function () {
  isWhatsAppTabFocused(function (isFocused) {
    if (isFocused) {
      // Replace with your function to check due alarms
      checkDueAlarms();
    }
  });
});

// Function to check and handle due snoozed chats
function checkDueAlarms() {
  chrome.storage.local.get("snoozedChats", function (result) {
    const now = Date.now(); // Get the current time in milliseconds

    const snoozedChats = result.snoozedChats || [];

    snoozedChats.forEach(function (chat) {
      // Check if the chat's snooze time has passed
      if (chat.until <= now) {
        handleUnsnooze(chat.chatId);
      }
    });
  });
}

// Listen for messages from other parts of the extension
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "snoozeChat") {
    handleSnooze(
      message.chatId,
      message.chatUsername,
      message.snoozeTime,
      message.snoozeCondition
    );
    sendResponse({ status: "success" });
  } else if (message.action === "unsnoozeChat" && message.chatId) {
    handleUnsnooze(message.chatId);
    sendResponse({ status: "success" });
  } else if (message.action === "checkDueAlarms") {
    checkDueAlarms();
    sendResponse({ status: "success" });
  } else {
    sendResponse({ status: "unknown_action" });
  }
});

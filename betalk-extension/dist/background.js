/******/ (() => { // webpackBootstrap
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0EsK0JBQStCLDRCQUE0QjtBQUMzRDtBQUNBLHNDQUFzQyxPQUFPO0FBQzdDO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQsVUFBVTtBQUNWLGlEQUFpRCxRQUFRO0FBQ3pEOztBQUVBO0FBQ0EseUNBQXlDLE9BQU87QUFDaEQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw0QkFBNEIsUUFBUSxVQUFVO0FBQzlDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsNEJBQTRCO0FBQzNEO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEMsSUFBSTtBQUNKO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QyxJQUFJO0FBQ0o7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDLElBQUk7QUFDSixtQkFBbUIsMEJBQTBCO0FBQzdDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEZ1bmN0aW9uIHRvIGhhbmRsZSBzbm9vemluZyBhIGNoYXRcbmZ1bmN0aW9uIGhhbmRsZVNub296ZShjaGF0SWQsIGNoYXRVc2VybmFtZSwgc25vb3plVGltZSwgc25vb3plQ29uZGl0aW9uKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInNub296ZWRDaGF0c1wiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29uc3Qgc25vb3plZENoYXRzID0gcmVzdWx0LnNub296ZWRDaGF0cyB8fCBbXTtcbiAgICBsZXQgY2hhdEZvdW5kID0gZmFsc2U7XG5cbiAgICAvLyBDaGVjayBpZiB0aGUgY2hhdCBhbHJlYWR5IGV4aXN0cyBpbiB0aGUgc25vb3plZENoYXRzIGFycmF5XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbm9vemVkQ2hhdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzbm9vemVkQ2hhdHNbaV0uY2hhdElkID09PSBjaGF0SWQpIHtcbiAgICAgICAgLy8gVXBkYXRlIHRoZSBleGlzdGluZyByZW1pbmRlclxuICAgICAgICBzbm9vemVkQ2hhdHNbaV0udW50aWwgPSBzbm9vemVUaW1lO1xuICAgICAgICBzbm9vemVkQ2hhdHNbaV0uc25vb3plQ29uZGl0aW9uID0gc25vb3plQ29uZGl0aW9uO1xuICAgICAgICBzbm9vemVkQ2hhdHNbaV0uY2hhdFVzZXJuYW1lID0gY2hhdFVzZXJuYW1lO1xuICAgICAgICBjaGF0Rm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgY2hhdCB3YXMgbm90IGZvdW5kLCBhZGQgYSBuZXcgcmVtaW5kZXJcbiAgICBpZiAoIWNoYXRGb3VuZCkge1xuICAgICAgc25vb3plZENoYXRzLnB1c2goe1xuICAgICAgICBjaGF0SWQ6IGNoYXRJZCxcbiAgICAgICAgY2hhdFVzZXJuYW1lOiBjaGF0VXNlcm5hbWUsXG4gICAgICAgIHNub296ZUNvbmRpdGlvbjogc25vb3plQ29uZGl0aW9uLFxuICAgICAgICB1bnRpbDogc25vb3plVGltZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgc25vb3plZENoYXRzIGFycmF5XG4gICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc25vb3plZENoYXRzOiBzbm9vemVkQ2hhdHMgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgLy8gQ2xlYXIgZXhpc3RpbmcgYWxhcm0gaWYgaXQgZXhpc3RzXG4gICAgICBjaHJvbWUuYWxhcm1zLmNsZWFyKGB1bnNub296ZV8ke2NoYXRJZH1gLCBmdW5jdGlvbiAod2FzQ2xlYXJlZCkge1xuICAgICAgICBpZiAod2FzQ2xlYXJlZCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGBBbGFybSBmb3IgY2hhdCAke2NoYXRJZH0gd2FzIGNsZWFyZWQuYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYE5vIGFsYXJtIGZvdW5kIGZvciBjaGF0ICR7Y2hhdElkfSB0byBjbGVhci5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBvciB1cGRhdGUgdGhlIENocm9tZSBhbGFybVxuICAgICAgICBjaHJvbWUuYWxhcm1zLmNyZWF0ZShgdW5zbm9vemVfJHtjaGF0SWR9YCwge1xuICAgICAgICAgIHdoZW46IHNub296ZVRpbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICBgQWxhcm0gZm9yIGNoYXQgJHtjaGF0SWR9IHNldCBmb3IgJHtuZXcgRGF0ZShcbiAgICAgICAgICAgIHNub296ZVRpbWVcbiAgICAgICAgICApLnRvTG9jYWxlU3RyaW5nKCl9LmBcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gRnVuY3Rpb24gdG8gdW5zbm9vemUgYSBjaGF0XG5mdW5jdGlvbiBoYW5kbGVVbnNub296ZShjaGF0SWQpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwic25vb3plZENoYXRzXCIsIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICBsZXQgc25vb3plZENoYXRzID0gcmVzdWx0LnNub296ZWRDaGF0cyB8fCBbXTtcbiAgICBzbm9vemVkQ2hhdHMgPSBzbm9vemVkQ2hhdHMuZmlsdGVyKChjaGF0KSA9PiBjaGF0LmNoYXRJZCAhPT0gY2hhdElkKTtcblxuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHNub296ZWRDaGF0czogc25vb3plZENoYXRzIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFNlbmQgbWVzc2FnZSB0byBhbGwgdGFicyBpbnN0ZWFkIG9mIGp1c3QgdGhlIGFjdGl2ZSBvbmVcbiAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHt9LCAodGFicykgPT4ge1xuICAgICAgICB0YWJzLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgdGFiLmlkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3Rpb246IFwiY2hhdFVuc25vb3plZFwiLFxuICAgICAgICAgICAgICBjaGF0SWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGVycm9ycyBhYm91dCByZWNlaXZpbmcgZW5kIG5vdCBleGlzdGluZ1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWVzc2FnZSBzZW5kaW5nIGZhaWxlZCwgYnV0IHRoYXQncyBva2F5LlwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG4vLyBEZWZpbmUgYSBmdW5jdGlvbiB0byBjaGVjayBpZiBXaGF0c0FwcCB0YWIgaXMgZm9jdXNlZFxuZnVuY3Rpb24gaXNXaGF0c0FwcFRhYkZvY3VzZWQoY2FsbGJhY2spIHtcbiAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICBpZiAodGFicy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzWzBdO1xuICAgICAgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgVVJMIG9yIGlkZW50aWZpZXIgZm9yIHRoZSBXaGF0c0FwcCB0YWJcbiAgICAgIGNvbnN0IGlzV2hhdHNBcHBUYWIgPSB0YWIudXJsICYmIHRhYi51cmwuaW5jbHVkZXMoXCJ3ZWIud2hhdHNhcHAuY29tXCIpO1xuXG4gICAgICBjYWxsYmFjayhpc1doYXRzQXBwVGFiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIEFsYXJtIGxpc3RlbmVyXG5jaHJvbWUuYWxhcm1zLm9uQWxhcm0uYWRkTGlzdGVuZXIoZnVuY3Rpb24gKGFsYXJtKSB7XG4gIGlzV2hhdHNBcHBUYWJGb2N1c2VkKGZ1bmN0aW9uIChpc0ZvY3VzZWQpIHtcbiAgICBpZiAoaXNGb2N1c2VkICYmIGFsYXJtLm5hbWUuc3RhcnRzV2l0aChcInVuc25vb3plX1wiKSkge1xuICAgICAgY29uc3QgY2hhdElkID0gYWxhcm0ubmFtZS5yZXBsYWNlKFwidW5zbm9vemVfXCIsIFwiXCIpO1xuICAgICAgaGFuZGxlVW5zbm9vemUoY2hhdElkKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vIENoZWNrIGR1ZSBhbGFybXMgd2hlbiB0aGUgdGFiIGdhaW5zIGZvY3VzXG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gIGlzV2hhdHNBcHBUYWJGb2N1c2VkKGZ1bmN0aW9uIChpc0ZvY3VzZWQpIHtcbiAgICBpZiAoaXNGb2N1c2VkKSB7XG4gICAgICAvLyBSZXBsYWNlIHdpdGggeW91ciBmdW5jdGlvbiB0byBjaGVjayBkdWUgYWxhcm1zXG4gICAgICBjaGVja0R1ZUFsYXJtcygpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuLy8gRnVuY3Rpb24gdG8gY2hlY2sgYW5kIGhhbmRsZSBkdWUgc25vb3plZCBjaGF0c1xuZnVuY3Rpb24gY2hlY2tEdWVBbGFybXMoKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChcInNub296ZWRDaGF0c1wiLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTsgLy8gR2V0IHRoZSBjdXJyZW50IHRpbWUgaW4gbWlsbGlzZWNvbmRzXG5cbiAgICBjb25zdCBzbm9vemVkQ2hhdHMgPSByZXN1bHQuc25vb3plZENoYXRzIHx8IFtdO1xuXG4gICAgc25vb3plZENoYXRzLmZvckVhY2goZnVuY3Rpb24gKGNoYXQpIHtcbiAgICAgIC8vIENoZWNrIGlmIHRoZSBjaGF0J3Mgc25vb3plIHRpbWUgaGFzIHBhc3NlZFxuICAgICAgaWYgKGNoYXQudW50aWwgPD0gbm93KSB7XG4gICAgICAgIGhhbmRsZVVuc25vb3plKGNoYXQuY2hhdElkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIExpc3RlbiBmb3IgbWVzc2FnZXMgZnJvbSBvdGhlciBwYXJ0cyBvZiB0aGUgZXh0ZW5zaW9uXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJzbm9vemVDaGF0XCIpIHtcbiAgICBoYW5kbGVTbm9vemUoXG4gICAgICBtZXNzYWdlLmNoYXRJZCxcbiAgICAgIG1lc3NhZ2UuY2hhdFVzZXJuYW1lLFxuICAgICAgbWVzc2FnZS5zbm9vemVUaW1lLFxuICAgICAgbWVzc2FnZS5zbm9vemVDb25kaXRpb25cbiAgICApO1xuICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogXCJzdWNjZXNzXCIgfSk7XG4gIH0gZWxzZSBpZiAobWVzc2FnZS5hY3Rpb24gPT09IFwidW5zbm9vemVDaGF0XCIgJiYgbWVzc2FnZS5jaGF0SWQpIHtcbiAgICBoYW5kbGVVbnNub296ZShtZXNzYWdlLmNoYXRJZCk7XG4gICAgc2VuZFJlc3BvbnNlKHsgc3RhdHVzOiBcInN1Y2Nlc3NcIiB9KTtcbiAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gXCJjaGVja0R1ZUFsYXJtc1wiKSB7XG4gICAgY2hlY2tEdWVBbGFybXMoKTtcbiAgICBzZW5kUmVzcG9uc2UoeyBzdGF0dXM6IFwic3VjY2Vzc1wiIH0pO1xuICB9IGVsc2Uge1xuICAgIHNlbmRSZXNwb25zZSh7IHN0YXR1czogXCJ1bmtub3duX2FjdGlvblwiIH0pO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
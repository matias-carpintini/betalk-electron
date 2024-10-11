import Modal from "../../components/modal";
import { formatTimestamp } from "../../utils/domHelpers";
import { requestSnooze } from "./snoozeChat";
import { snoozedChats } from "./storage";
import { requestUnsnooze } from "./unsnoozeChat";
import * as chrono from "chrono-node";
import { formatDistanceToNow } from "date-fns";

export function snoozeForm(chat) {
  // Find existing reminder for the chat
  const existingReminder =
    snoozedChats &&
    snoozedChats.find((reminder) => reminder.chatId === chat.chatId);

  // Get the most recent reminder if available
  const lastUsedReminder =
    snoozedChats && snoozedChats[snoozedChats.length - 1];

  const now = new Date();

  let initialCustomDate = "";
  let initialCustomTime = "";
  let snoozeCondition = "regardless"; // Default condition

  if (existingReminder && existingReminder.until) {
    const timestamp = Number(existingReminder.until);
    const reminderDate = new Date(timestamp);

    // Extract local date and time components
    const localYear = reminderDate.getFullYear();
    const localMonth = reminderDate.getMonth();
    const localDay = reminderDate.getDate();
    const localHours = reminderDate.getHours();
    const localMinutes = reminderDate.getMinutes();

    // Format as YYYY-MM-DD and HH:MM
    initialCustomDate = `${localYear}-${String(localMonth + 1).padStart(
      2,
      "0"
    )}-${String(localDay).padStart(2, "0")}`;
    initialCustomTime = `${String(localHours).padStart(2, "0")}:${String(
      localMinutes
    ).padStart(2, "0")}`;

    snoozeCondition = existingReminder.snoozeCondition;
  }

  let laterTodayTime;
  let hasLaterTodayOption = true;

  // Determine "Later today" time, setting to 18:00 if before 18:00
  if (now.getHours() < 18) {
    laterTodayTime = new Date();
    laterTodayTime.setHours(18, 0, 0, 0); // Set to 18:00
  } else {
    hasLaterTodayOption = false;
  }

  // Function to format time as "6:00 PM"
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  }

  // Function to format tomorrow's date as "THU, 8:00 AM"
  function getFormattedTomorrow() {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const tomorrow = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      8,
      0,
      0
    );
    return `${days[tomorrow.getDay()]}, 8:00 AM`;
  }

  // Determine if "Last Used" should be displayed
  const shouldDisplayLastUsed =
    lastUsedReminder && Number(lastUsedReminder.until) > now.getTime();

  const lastUsedOptionHTML = shouldDisplayLastUsed
    ? `
    <label class="option">
      <span style="flex: 1;">
        <input type="radio" name="snoozeOption" value="lastUsed">
        Last Used
      </span>
      <span class="custom">
        <span>
          ${formatTimestamp(lastUsedReminder.until)}
        </span>
      </span>
    </label>
  `
    : "";

  const laterTodayOptionHTML = laterTodayTime
    ? `
    <label class="option">
      <span style="flex: 1;">
        <input type="radio" name="snoozeOption" value="laterToday">
        Later today
      </span>
      <span>
        ${formatTime(laterTodayTime)}
      </span>
    </label>
  `
    : "";

  const snoozeFormContent = `
    <form id="snoozeForm">
      <div class="x12lqup9 x1o1kx08">
        <div class="modal-md x9f619 x1p5oq8j">
          <div class="modal-header">
            <p class="modal-title x1w7sdjq x1fcty0u">
              <span class="material-symbols-outlined">
                schedule
              </span>
              Remind me
            </p>
          </div>
          <div class="modal-body xdt5ytf xubnuyq xw2csxc x1odjw0f xo6wm36 x1iegka5 xc530u0 x8zx4qv x1gcmwly x17sy6yu xwsakjw x1vz1ssi xxbb1rq xwxc41k">
            <div class="nlp-container">
              <input type="text" name="nplDate" id="nplDate" placeholder="Try: 8 am, 3 days, aug 7" class="npl-input">
              <select class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 snoozeConditionSelect" name="snoozeCondition">
                <option value="regardless" ${
                  snoozeCondition === "regardless" ? "selected" : ""
                }>Regardless</option>
                <option value="ifNoReply" ${
                  snoozeCondition === "ifNoReply" ? "selected" : ""
                }>If no reply</option>
              </select>
            </div>
            <div class="snooze-options" id="snoozeOptions">
              <div id="npl-suggestions"></div>
              ${lastUsedOptionHTML}
              ${laterTodayOptionHTML}
              <label class="option">
                <span style="flex: 1;">
                  <input type="radio" name="snoozeOption" value="tomorrowMorning">
                  Tomorrow
                </span>
                <span>
                  ${getFormattedTomorrow()}
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      ${
        existingReminder
          ? `
            <div
              class="modal-footer"
            >
              <div class="footer-option">
                <button
                  data-action="remove"
                type="submit"
                class="option"
              >
                Remove Reminder & Move to Inbox
                </button>
              </div>
            </div>
            `
          : ""
      }
    </form>
  `;

  const modal = new Modal({
    modalContent: snoozeFormContent,
    formHandler: async (formData) => {
      const action = formData.get("formAction");

      if (action == "submit") {
        const snoozeOption = formData.get("snoozeOption");
        snoozeCondition = formData.get("snoozeCondition");
        let snoozeTime;

        if (snoozeOption === "lastUsed" && lastUsedReminder) {
          snoozeTime = Number(lastUsedReminder.until);
        } else if (snoozeOption === "laterToday" && hasLaterTodayOption) {
          snoozeTime = laterTodayTime.getTime();
        } else if (snoozeOption === "tomorrowMorning") {
          const tomorrowMorning = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate() + 1,
            8,
            0,
            0,
            0
          );
          snoozeTime = tomorrowMorning.getTime();
        } else if (snoozeOption === "npl") {
          const nplFormattedDate = formData.get("formattedDate");
          snoozeTime = new Date(nplFormattedDate).getTime();
        } else {
          alert("Invalid selection. Snooze canceled.");
          return false;
        }

        // Add validation to check if snoozeTime is in the past
        if (snoozeTime <= Date.now()) {
          alert(
            "Cannot set a reminder in the past. Please choose a future time."
          );
          return false;
        }

        // Proceed to request snooze with the chosen timestamp
        requestSnooze(chat, snoozeTime, snoozeCondition);
      } else if (action == "remove") {
        requestUnsnooze(chat.chatId);
      }

      return true; // Indicates successful handling
    },
    keyHandler: handleArrowKeys, // Pass the custom key handler
  });

  modal.openModal();

  const nplSuggestions = document.getElementById("npl-suggestions");

  // Add event listener for natural language date input
  document
    .getElementById("nplDate")
    .addEventListener("input", function (event) {
      const inputText = event.target.value;
      const parsedDate = chrono.parseDate(inputText, new Date(), {
        forwardDate: true,
      });

      if (parsedDate) {
        const options = {
          weekday: "short",
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        };

        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          parsedDate
        );

        // Use date-fns to get the distance to now
        const relativeTime = formatDistanceToNow(parsedDate, {
          addSuffix: true,
        });

        // Append the parsed date as an option to snooze conditions
        const newOptionHTML = `
        <label class="option">
          <span style="flex: 1;">
            <input type="radio" name="snoozeOption" value="npl">
            <input type="hidden" name="formattedDate" value="${formattedDate}">
            ${relativeTime}
          </span>
          <span>
            ${formattedDate}
          </span>
        </label>
      `;
        nplSuggestions.innerHTML = newOptionHTML;
      } else {
        nplSuggestions.innerHTML = "";
      }
    });

  document.getElementById("nplDate").focus();

  const snoozeOptionsContainer = document.getElementById("snoozeForm");
  let currentIndex = -1;

  function updateSelection(index) {
    const snoozeOptions = snoozeOptionsContainer.querySelectorAll(".option");
    if (currentIndex >= 0 && currentIndex < snoozeOptions.length) {
      snoozeOptions[currentIndex].classList.remove("selected-option");
      snoozeOptions[currentIndex].querySelector(
        "input[type='radio']"
      ).checked = false;
    }
    currentIndex = index;
    if (currentIndex >= 0 && currentIndex < snoozeOptions.length) {
      snoozeOptions[currentIndex].classList.add("selected-option");
      snoozeOptions[currentIndex].querySelector(
        "input[type='radio']"
      ).checked = true;
    }
  }

  function isVisible(element) {
    return element.offsetParent !== null;
  }

  function findNextVisibleOption(startIndex, direction) {
    const snoozeOptions = snoozeOptionsContainer.querySelectorAll(".option");
    let index = startIndex;
    do {
      index = (index + direction + snoozeOptions.length) % snoozeOptions.length;
    } while (!isVisible(snoozeOptions[index]));
    return index;
  }

  function handleArrowKeys(event) {
    if (event.key === "ArrowDown") {
      const nextIndex = findNextVisibleOption(currentIndex, 1);
      updateSelection(nextIndex);
    } else if (event.key === "ArrowUp") {
      const prevIndex = findNextVisibleOption(currentIndex, -1);
      updateSelection(prevIndex);
    } else if (event.key === "Enter") {
      event.preventDefault(); // Prevent default form submission
      const form = document.getElementById("snoozeForm");
      const formData = new FormData(form);

      // Determine the action based on the selected option
      const selectedOption = form.querySelector(".selected-option");
      const action =
        selectedOption && selectedOption.dataset.action === "remove"
          ? "remove"
          : "submit";
      formData.set("formAction", action);

      modal.formHandler(formData).then((success) => {
        if (success) {
          modal.closeModal(); // Close the modal on success
        }
      });
    }
  }
}

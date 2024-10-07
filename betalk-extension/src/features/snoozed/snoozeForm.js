import Modal from "../../components/modal";
import { formatTimestamp } from "../../utils/domHelpers";
import { requestSnooze } from "./snoozeChat";
import { snoozedChats } from "./storage";
import { requestUnsnooze } from "./unsnoozeChat";

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
    <form>
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
            <div class="snooze-options">
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
              <label class="option">
                <span style="flex: 1;">
                  <input type="radio" name="snoozeOption" value="custom" id="customRadio" ${
                    initialCustomDate ? "checked" : ""
                  }>
                  Custom
                </span>
                <span class="custom">
                  <input type="date" name="customDate" id="customDate" value="${initialCustomDate}">
                  <input type="time" name="customTime" id="customTime" value="${initialCustomTime}">
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div
        class="x78zum5 x8hhl5t xp4054r xuxw1ft x123j3cw x1gtfrk1 x156go17 x1sqk8ge"
      >
        <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e" style="flex: 1;">
          <select class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 snoozeConditionSelect" name="snoozeCondition">
            <option value="regardless" ${
              snoozeCondition === "regardless" ? "selected" : ""
            }>Regardless</option>
            <option value="ifNoReply" ${
              snoozeCondition === "ifNoReply" ? "selected" : ""
            }>If no reply</option>
          </select>
        </div>
        <div
          class="x13a6bvl x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np xuk3077 x40hh3e"
        >
          ${
            existingReminder
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
        } else if (snoozeOption === "custom") {
          const customDate = formData.get("customDate");
          const customTime = formData.get("customTime");
          if (customDate && customTime) {
            snoozeTime = new Date(`${customDate}T${customTime}`).getTime();
          } else {
            alert("Please provide both date and time for custom snooze.");
            return false;
          }
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
  });

  modal.openModal();

  document.getElementById("customDate").addEventListener("change", function () {
    document.getElementById("customRadio").checked = true;
  });

  document.getElementById("customTime").addEventListener("change", function () {
    document.getElementById("customRadio").checked = true;
  });
}

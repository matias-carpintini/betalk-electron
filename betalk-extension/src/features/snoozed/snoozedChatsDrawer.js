import { formatTimestamp } from "../../utils/domHelpers";
import { openDrawerLeft } from "../../whatsappStore/openDrawerLeft";
import { loadSnoozedChatsFromStorage, snoozedChats } from "./storage";
import { getChatDetails } from "../../whatsappStore/getChatDetails";
import { drawer } from "../../components/drawer";
import { reminderChatItem } from "../../components/reminderChatItem";
import { generateSnoozedChatsCSS } from "./clues";

export function snoozedChatsDrawer() {
  chrome.runtime.sendMessage({
    action: "checkDueAlarms",
  });
  loadSnoozedChatsFromStorage((loadedSnoozedChats) => {
    generateSnoozedChatsCSS(loadedSnoozedChats);
  });

  const chatElements = snoozedChats
    ? snoozedChats
        .sort((a, b) => a.until - b.until)
        .map((chat) =>
          reminderChatItem(
            chat.chatId,
            chat.chatUsername,
            `Remind me: ${formatTimestamp(chat.until)}`
          )
        )
        .join("")
    : "";

  openDrawerLeft(
    drawer("Reminders", chatElements),
<<<<<<< HEAD
    `snoozedChats ${snoozedChats.length}`
=======
    `snoozedChats ${snoozedChats ? snoozedChats.length : 0}`
>>>>>>> recovered-branch
  );

  // This make a request to WhatsApp through injected scripts
  // asks for chat details and prints to the unloaded chat element.
  if (snoozedChats) {
    snoozedChats.forEach((chat) => getChatDetails(chat.chatId));
  }
}

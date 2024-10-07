import "./main.scss";
import { getElementByXpath } from "./utils/domHelpers";
import { removeWhatsAppSpam, addStartupMessage } from "./utils/enhanceUi";
import { initializeShortcuts } from "./features/shortcuts";
import { initializeFolders } from "./features/folders";
import { initializeSnoozed } from "./features/snoozed";
import { initializeScheduled } from "./features/scheduled";
import { chatOnHoverObserver } from "./observers/chatOnHoverObserver";
import { archiveChatListener } from "./whatsappStore/archiveChat";
import { unarchiveChatListener } from "./whatsappStore/unarchiveChat";
import { markChatDoneListener } from "./whatsappStore/markChatDone";
import { openDrawerLeftListener } from "./whatsappStore/openDrawerLeft";
import { getChatDetailsListener } from "./whatsappStore/getChatDetails";
import { openContextMenuListener } from "./whatsappStore/openContextMenu";
import { getChatFiberFromDOMListener } from "./whatsappStore/getChatFiberFromDOM";
import { initializeDone } from "./features/done";
import { customToasts } from "./whatsappStore/customToasts";

// Inject font styles into the page
const link1 = document.createElement("link");
link1.rel = "stylesheet";
link1.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";

document.head.appendChild(link1);

Element.prototype.insertChildAtIndex = function (child, index) {
  if (!index) index = 0;
  if (index >= this.children.length) {
    this.appendChild(child);
  } else {
    this.insertBefore(child, this.children[index]);
  }
};

function initializeWhatsApp() {
  // Dispatch a custom event to signal that WhatsApp is initialized
  const event = new CustomEvent("whatsappInitialized", {
    detail: { message: "WhatsApp is now initialized" },
  });
  document.dispatchEvent(event);
}

initializeShortcuts();
initializeFolders();
initializeScheduled();
initializeSnoozed();
initializeDone();

// Target node to observe
const targetNode = document.body;

// Options for the observer (which mutations to observe)
const config = { childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === "childList") {
      if (
        getElementByXpath(
          `//*[@id="app"]/div/div[2]/div[3]/header/header/div/div/h1`
        )
      ) {
        observer.disconnect();
        initializeWhatsApp(); // Dispatch event when WhatsApp is loaded

        chatOnHoverObserver();
        archiveChatListener();
        unarchiveChatListener();
        openDrawerLeftListener();
        getChatDetailsListener();
        markChatDoneListener();
        openContextMenuListener();
        getChatFiberFromDOMListener();

        removeWhatsAppSpam();
        addStartupMessage();
        customToasts();

        break;
      }
    }
  }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

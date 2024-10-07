(function () {
  // Function to archive a chat given a chatId
  function archiveChat(chatId) {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.Cmd = window.require("WAWebCmd").Cmd;

    const chat = window.Store.Chat.get(chatId);
    if (chat) {
      window.Store.Cmd.archiveChat(chat, true);
    }
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "ARCHIVE_CHAT"
    ) {
      const chatId = event.data.chatId;
      archiveChat(chatId);
    }
  });
})();

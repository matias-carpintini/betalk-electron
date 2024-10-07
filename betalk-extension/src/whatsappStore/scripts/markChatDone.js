(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));

  // Function to archive a chat given a chatId
  function doneChat(chatId) {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.Cmd = window.require("WAWebCmd").Cmd;

    const chat = window.Store.Chat.get(chatId);
    if (chat) {
      window.Store.Cmd.archiveChat(chat, !chat.__x_archive);
    }
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "MARK_CHAT_DONE"
    ) {
      const chatId = event.data.chatId;
      doneChat(chatId);
    }
  });
})();

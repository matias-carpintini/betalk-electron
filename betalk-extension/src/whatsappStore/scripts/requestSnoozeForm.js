(function () {
  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "REQUEST_SNOOZE_FORM"
    ) {
      // get active Chat and post message to content script
      window.Store = Object.assign({}, window.require("WAWebCollections"));
      window.Store.Cmd = window.require("WAWebCmd").Cmd;

      const chat = window.Store.Chat.getActive();
      const chatId = chat.__x_id._serialized;
      const userName = chat.__x_formattedTitle;
      const archived = chat.__x_archive;

      // Send the chat details back to the content script
      window.postMessage(
        {
          type: "OPEN_SNOOZE_FORM",
          chatId: chatId,
          userName: userName,
          archived: archived,
        },
        "*"
      );
    }
  });
})();

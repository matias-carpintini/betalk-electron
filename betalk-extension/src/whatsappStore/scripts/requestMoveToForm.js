(function () {
  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "REQUEST_MOVE_TO_FORM"
    ) {
      // get active Chat and post message to content script
      window.Store = Object.assign({}, window.require("WAWebCollections"));
      window.Store.Cmd = window.require("WAWebCmd").Cmd;

      const chat = window.Store.Chat.getActive();
      const chatId = chat.__x_id._serialized;

      // Send the chat details back to the content script
      window.postMessage(
        {
          type: "OPEN_MOVE_TO_FORM",
          chatId: chatId,
        },
        "*"
      );
    }
  });
})();

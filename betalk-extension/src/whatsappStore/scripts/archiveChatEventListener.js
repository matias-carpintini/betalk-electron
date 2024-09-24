(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.Chat.on("change:archive", (chat_model, archived) => {
    // Send the chat details back to the content script
    window.postMessage(
      {
        type: "ARCHIVE_CHAT_EVENT",
        chatId: chat_model.__x_id._serialized,
        archived: archived,
      },
      "*"
    );
  });
})();

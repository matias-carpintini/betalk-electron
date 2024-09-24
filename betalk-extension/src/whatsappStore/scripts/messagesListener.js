(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.Chat.on("change:unreadCount", (chat_model, unreadCount) => {
    // Send the chat details back to the content script
    window.postMessage(
      {
        type: "UNREAD_COUNT_CHANGE",
        chatId: chat_model.__x_id._serialized,
        unreadCount: unreadCount,
      },
      "*"
    );
  });
})();

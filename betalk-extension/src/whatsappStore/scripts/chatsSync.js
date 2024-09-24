(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  const chats = window.Store.Chat._models
    .filter(
      (chat) =>
        !chat.__x_isGroup ||
        (chat.__x_isGroup && chat.__x_groupMetadata.__x_groupType === "DEFAULT")
    )
    .map((chat) => ({
      id: chat.__x_id._serialized,
      archived: chat.__x_archive,
    }));
  window.postMessage(
    {
      type: "CHATS_SYNC",
      chats: chats,
    },
    "*"
  );

  window.Store.Chat.on("add", (chat_model) => {
    const chatId = chat_model.__x_id._serialized;

    window.postMessage(
      {
        type: "CHAT_ADDED",
        chatId: chatId,
      },
      "*"
    );
  });

  window.Store.Chat.on("remove", (chat_model) => {
    const chatId = chat_model.__x_id._serialized;

    window.postMessage(
      {
        type: "CHAT_REMOVED",
        chatId: chatId,
      },
      "*"
    );
  });
})();

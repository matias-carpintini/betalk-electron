(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));

  // Function to archive a chat given a chats
  function filterChats(chats) {
    window.Store.Chat._models.forEach(function (chat_model) {
      Object.defineProperty(chat_model, "__x_shouldAppearInList", {
        get: function () {
          return chats.includes(chat_model.__x_id._serialized);
        },
      });
    });

    window.Store.Chat._models[0].t = window.Store.Chat._models[0].t + 1;
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "FILTER_CHATS"
    ) {
      const chats = event.data.chats;
      filterChats(chats);
    }
  });
})();

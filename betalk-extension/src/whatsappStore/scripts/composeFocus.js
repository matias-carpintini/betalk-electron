(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.Cmd = window.require("WAWebCmd").Cmd;

  function focusLastMessage(lastMessageId) {
    window.Store.FocusTracer = window.require("WAWebFocusTracer");
    const lastMessageElement = document.querySelector(
      `[data-id="${lastMessageId}"]`
    );
    window.Store.FocusTracer.focus(lastMessageElement);
  }

  window.Store.Cmd.on("open_chat", (chat_model, b, c) => {
    if (c === "Unknown") {
      setTimeout(() => {
        focusLastMessage(chat_model.msgs.last().__x_id._serialized);
      }, 100);
    }
  });

  window.Store.Chat.on("change:muteExpiration", (chat_model, b, c) => {
    if (b === -1) {
      setTimeout(() => {
        focusLastMessage(chat_model.msgs.last().__x_id._serialized);
      }, 1000);
    } else {
      focusLastMessage(chat_model.msgs.last().__x_id._serialized);
    }
  });

  window.Store.Chat.on("change:pin", (chat_model) => {
    setTimeout(() => {
      focusLastMessage(chat_model.msgs.last().__x_id._serialized);
    }, 100);
  });

  // window.Store.Chat.on("change:hasUnread", (chat_model) => {
  //   setTimeout(() => {
  //     focusLastMessage(chat_model.msgs.last().__x_id._serialized);
  //   }, 100);
  // });
})();

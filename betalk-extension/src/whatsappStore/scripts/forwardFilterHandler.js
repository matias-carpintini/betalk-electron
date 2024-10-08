(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.ModalManager = require("WAWebModalManager").ModalManager;

  window.Store.ModalManager.on("open_modal", (modal) => {
    if (modal.props.onForward || modal.props.msgs) {
      // reset folder filter
      window.Store.Chat._models.forEach(function (chat_model) {
        Object.defineProperty(chat_model, "__x_shouldAppearInList", {
          get: function () {
            return true;
          },
        });
      });

      window.Store.Chat._models[0].t = window.Store.Chat._models[0].t + 1;
    }
  });

  window.Store.ModalManager.on("close_modal", () => {
    window.postMessage(
      {
        type: "FILTER_CHATS_BY_ACTIVE_FOLDER",
      },
      "*"
    );
  });
})();

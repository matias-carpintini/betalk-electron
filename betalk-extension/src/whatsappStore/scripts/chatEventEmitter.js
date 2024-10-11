(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.Cmd = window.require("WAWebCmd").Cmd;
  window.Store.Cmd.on("open_chat", (chat_model, b, c) => {
    window.postMessage({ type: "OPEN_CHAT" }, "*");
  });
})();

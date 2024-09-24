(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.Cmd = window.require("WAWebCmd").Cmd;

  window.Store.Cmd.on("open_context_menu", (a) => {
    if (a.uim.displayName === "ChatContextMenu") {
      const chatId =
        a.menuOptions.menu[0].props.chat.$ProxyState$state.__x_id._serialized;
      const archived =
        a.menuOptions.menu[0].props.chat.$ProxyState$state.__x_archive;

      window.postMessage(
        {
          type: "OPEN_CONTEXT_MENU",
          chatId: chatId,
          archived: archived,
        },
        "*"
      );
    }
  });
})();

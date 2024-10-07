(function () {
  // Function to archive a chat given a chatId
  function openDrawerLeft(drawer, drawerId) {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.DrawerManager =
      window.require("WAWebDrawerManager").DrawerManager;

    window.Store.React = window.require("react");
    window.Store.DrawerManager.openDrawerLeft(
      window.Store.React.createElement("div", {
        dangerouslySetInnerHTML: { __html: drawer },
      }),
    );

    window.Store.Cmd = window.require("WAWebCmd").Cmd;
    window.Store.Cmd.setActiveNavBarItem(drawerId);
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "OPEN_DRAWER_LEFT"
    ) {
      openDrawerLeft(event.data.drawer, event.data.drawerId);
    }
  });
})();

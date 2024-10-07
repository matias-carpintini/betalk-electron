(function () {
  function openArchivedChatsDrawer() {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.DrawerManager =
      window.require("WAWebDrawerManager").DrawerManager;
    window.Store.Cmd = window.require("WAWebCmd").Cmd;

    window.Store.DrawerManager.openDrawerLeft(
      require("react").jsx(
        require("WAWebArchivedFlowLoadable").ArchivedFlowLoadable,
        {
          onEnd: function () {
            window.Store.DrawerManager =
              window.require("WAWebDrawerManager").DrawerManager;
            return window.Store.DrawerManager.closeDrawerLeft();
          },
        }
      ),
      "Archived"
    );
    window.Store.Cmd.setActiveNavBarItem("Archived");
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "OPEN_ARCHIVED_CHATS_DRAWER"
    ) {
      openArchivedChatsDrawer();
    }
  });
})();

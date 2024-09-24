(function () {
  function focusPreviousChat() {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.Cmd = window.require("WAWebCmd").Cmd;

    window.Store.Cmd.focusPrevChat();
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "FOCUS_PREVIOUS_CHAT"
    ) {
      focusPreviousChat();
    }
  });
})();

(function () {
  function focusLastMessage() {
    window.Store = Object.assign({}, window.require("WAWebCollections"));
    window.Store.FocusTracer = window.require("WAWebFocusTracer");

    const lastMessageId =
      window.Store.Chat.getActive().msgs.last().__x_id._serialized;
    const lastMessageElement = document.querySelector(
      `[data-id="${lastMessageId}"]`
    );
    window.Store.FocusTracer.focus(lastMessageElement);
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "FOCUS_LAST_MESSAGE"
    ) {
      focusLastMessage();
    }
  });
})();

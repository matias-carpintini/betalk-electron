(function () {
  window.Store = Object.assign({}, window.require("WAWebCollections"));
  window.Store.ToastManager = window.require("WAWebToastManager").ToastManager;
  const originalOpen = window.Store.ToastManager.open;

  // Overriding the 'open' method of ToastManager
  window.Store.ToastManager.open = function (toast) {
    window.Store.ToastManager =
      window.require("WAWebToastManager").ToastManager;
    window.Store.React = window.require("react");
    window.Store.Toast = window.require("WAWebToast.react").Toast;

    // Check if the message matches the specific toast we want to block
    const toastAction = toast.props?.initialAction?.text?.props?.content[0];
    console.log(toastAction);

    switch (toastAction) {
      case "Archiving chat":
        // Custom toast for "Archiving chat"
        window.Store.ToastManager.open(
          window.Store.React.createElement(window.Store.Toast, {
            msg: "Marked Done",
            action: {
              actionText: window.Store.React.createElement("kbd", {}, "E"),
            },
          })
        );
        return;

      case "Unarchiving chat":
        // Custom toast for "Unarchiving chat"
        window.Store.ToastManager.open(
          window.Store.React.createElement(window.Store.Toast, {
            msg: "Marked not Done",
            action: {
              actionText: window.Store.React.createElement("kbd", {}, "E"),
            },
          })
        );
        return;

      case "Marking as unread":
        // Custom toast for "Marking as unread"
        window.Store.ToastManager.open(
          window.Store.React.createElement(window.Store.Toast, {
            msg: "Marked as Unread",
            action: {
              actionText: window.Store.React.createElement("kbd", {}, "U"),
            },
          })
        );
        return;

      case "Marking as read":
        // Custom toast for "Marking as read"
        window.Store.ToastManager.open(
          window.Store.React.createElement(window.Store.Toast, {
            msg: "Marked as Read",
            action: {
              actionText: window.Store.React.createElement("kbd", {}, "U"),
            },
          })
        );
        return;

      default:
        // Otherwise, proceed with the original functionality
        return originalOpen.apply(this, arguments);
    }
  };

  // Function to trigger custom toasts
  function triggerCustomToast(msg, shortcut) {
    window.Store.ToastManager =
      window.require("WAWebToastManager").ToastManager;
    window.Store.React = window.require("react");
    window.Store.Toast = window.require("WAWebToast.react").Toast;

    window.Store.ToastManager.open(
      window.Store.React.createElement(window.Store.Toast, {
        msg: msg,
        action: {
          actionText: window.Store.React.createElement("kbd", {}, shortcut),
        },
      })
    );
  }

  // Add a window message listener
  window.addEventListener("message", function (event) {
    if (event.data && event.data.type === "TRIGGER_CUSTOM_TOAST") {
      const { msg, shortcut } = event.data;
      triggerCustomToast(msg, shortcut);
    }
  });
})();

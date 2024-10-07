(function () {
  function getFiberFromElement(element) {
    const fiberNode = Object.keys(element).find((key) =>
      key.startsWith("__reactFiber$")
    );
    return element[fiberNode];
  }

  function getFiberFromDOM(selector) {
    const element = document.querySelector(selector);
    const fiber = getFiberFromElement(element);

    // Extract chat ID from the fiber
    const chat =
      fiber.memoizedProps.children.props.chat ||
      fiber.memoizedProps.children.props.children.props.model;

    let chatId = chat.__x_id._serialized;
    let chatUsername = chat.__x_formattedTitle;
    let chatPhone = chat.__x_id.user;
    let chatArchived = chat.__x_archive;

    // Dispatch a custom event with the fiber data and chat ID
    window.postMessage(
      {
        type: "CHAT_FIBER_RESULT",
        selector: selector,
        chat: { chatId, chatUsername, chatPhone, chatArchived },
      },
      "*"
    );
  }

  // Listen for messages from the content script
  window.addEventListener("message", function (event) {
    if (event.data.type === "GET_CHAT_FIBER") {
      getFiberFromDOM(event.data.selector);
    }
  });
})();

(function () {
  async function getChatDetails(chatId) {
    window.Store = Object.assign({}, window.require("WAWebCollections"));

    window.Store.WidFactory = window.require("WAWebWidFactory");
    window.Store.ProfilePic = window.require(
      "WAWebContactProfilePicThumbBridge"
    );

    // const chatWid = window.Store.WidFactory.createWid(chatId);
    // let profilePic =
    //   await window.Store.ProfilePic.requestProfilePicFromServer(chatWid);
    // profilePic = profilePic.eurl;

    const chat = window.Store.Chat.get(chatId);
    const userName = chat.__x_formattedTitle;
    const lastMsg = chat.__x_previewMessage.__x_body;

    return {
      chatId: chatId,
      profilePic: "",
      userName: userName,
      lastMsg: lastMsg,
    };
  }

  // Listen for messages from the content script
  window.addEventListener("message", async function (event) {
    // Ensure the message is coming from the content script and has the correct format
    if (
      event.source === window &&
      event.data &&
      event.data.type === "GET_CHAT_DETAILS"
    ) {
      const chat = await getChatDetails(event.data.chatId);

      // Send the chat details back to the content script
      window.postMessage(
        {
          type: "CHAT_DETAILS_RESPONSE",
          chat: chat,
        },
        "*"
      );
    }
  });
})();

const { app, BrowserWindow, ipcMain, session, screen } = require("electron"); // Add screen module
const path = require("path");
const AutoLaunch = require("auto-launch");
const { exec } = require("child_process");

let mainWindow;

function createWindow() {
  const { height } = screen.getPrimaryDisplay().workAreaSize; // Get the height of the primary display

  mainWindow = new BrowserWindow({
    width: 1024,
    height: height, // Set the height to match the screen height
    title: "BeTalk",
    webPreferences: {
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  mainWindow.loadURL("https://web.whatsapp.com", {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  });

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.setTitle("BeTalk");
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (shouldHandleURL(url)) {
      event.preventDefault();
      mainWindow.loadURL(url);
    }
  });

  mainWindow.webContents.on("new-window", (event, url) => {
    if (shouldHandleURL(url)) {
      event.preventDefault();
      mainWindow.loadURL(url);
    }
  });

  ipcMain.on("load-url", (event, url) => {
    if (mainWindow) {
      mainWindow.loadURL(url);
    }
  });

  // Load the extension
  const extensionPath = app.isPackaged
    ? path.join(process.resourcesPath, "betalk-extension")
    : path.join(__dirname, "betalk-extension");

  console.log("Loading extension from:", "betalk-extension"); // Debugging log

  session.defaultSession
    .loadExtension(extensionPath)
    .then(() => {
      console.log("Extension loaded successfully");
    })
    .catch((err) => {
      console.error("Failed to load extension:", err);
    });
}

function shouldHandleURL(url) {
  return (
    url.startsWith("https://web.whatsapp.com/send") ||
    url.startsWith("whatsapp://")
  );
}

function initializeWhatsApp() {
  console.log("Initializing WhatsApp...");
  // Dispatch a custom event to signal that WhatsApp is initialized
  const event = new CustomEvent("whatsappInitialized", {
    detail: { message: "WhatsApp is now initialized" },
  });
  document.dispatchEvent(event);
  console.log("WhatsApp initialized event dispatched.");
}

app.whenReady().then(async () => {
  // let isDev = false;
  // try {
  //   isDev = (await import("electron-is-dev")).default;
  // } catch (err) {
  //   console.error("Failed to load electron-is-dev:", err);
  // }

  createWindow();

  // Set up auto-launch
  const autoLauncher = new AutoLaunch({
    name: "Volt",
    path: app.getPath("exe"),
  });

  autoLauncher
    .isEnabled()
    .then((isEnabled) => {
      if (!isEnabled) autoLauncher.enable();
    })
    .catch((err) => {
      console.error("Failed to set up auto-launch:", err);
    });

  // Remove WhatsApp from login items
  //    const script = `
  //    tell application "System Events"
  //        delete login item "WhatsApp"
  //    end tell
  //    `;
  //    exec(`osascript -e '${script}'`, (err, stdout, stderr) => {
  //        if (err) {
  //            console.error('Failed to remove WhatsApp from login items:', err);
  //            return;
  //        }
  //        console.log('WhatsApp removed from login items');
  //    });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("open-url", (event, url) => {
  event.preventDefault();
  handleProtocolLink(url);
});

function handleProtocolLink(url) {
  if (shouldHandleURL(url)) {
    if (!mainWindow) {
      createWindow();
    }
    mainWindow.loadURL(url);
  }
}

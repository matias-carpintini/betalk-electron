const { app, BrowserWindow, ipcMain, session, screen, shell } = require("electron"); // Add screen module
const path = require("path");
const fs = require("fs");
const AutoLaunch = require("auto-launch");
const { exec } = require("child_process");
const { updateElectronApp } = require("update-electron-app");
updateElectronApp();

let mainWindow;

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const appVersion = packageJson.version;

function createWindow() {
  const { height } = screen.getPrimaryDisplay().workAreaSize; // Get the height of the primary display

  mainWindow = new BrowserWindow({
    width: 1024,
    height: height, // Set the height to match the screen height
    title: `Volt v${appVersion}`, // Set the title with version number
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
    mainWindow.setTitle(`Volt v${appVersion}`); // Update the title after the page loads
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

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:') || url.startsWith('http:')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
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

app.on("ready", createWindow);
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

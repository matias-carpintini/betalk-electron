const { app, BrowserWindow, ipcMain, session, screen, shell, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const AutoLaunch = require("auto-launch");
const { exec } = require("child_process");
const { autoUpdater, AppUpdater } = require("electron-updater");

let mainWindow;

//Basic flags
autoUpdater.autoDownload = false;
autoUpdater.autoInstallOnAppQuit = true;

// Dynamically import the electron-context-menu
(async () => {
  const contextMenu = await import('electron-context-menu');
  contextMenu.default({
    showInspectElement: false, // Disable the "Inspect Element" option
    prepend: (defaultActions, params, browserWindow) => [
      {
        label: 'Emoji and Symbols',
        click: () => {
          exec('osascript -e "tell application \\"System Events\\" to keystroke \\" \\" using {control down, command down}"');
        }
      }
    ]
  });
})();

// Read version from package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json')));
const appVersion = packageJson.version;

function createWindow() {
  const { height } = screen.getPrimaryDisplay().workAreaSize; // Get the height of the primary display

  mainWindow = new BrowserWindow({
    width: 1280,
    height: height, // Set the height to match the screen height
    title: `Volt v${appVersion}`, // Set the title with version number
    webPreferences: {
      contextIsolation: true,
    },
    autoHideMenuBar: true,
    titleBarStyle: 'customButtonsOnHover',
    frame: false
  });

  mainWindow.loadURL("https://web.whatsapp.com", {
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  });

  mainWindow.webContents.on("did-finish-load", () => {
    mainWindow.setTitle(`Volt v${appVersion}`);
    // Check for updates after the window has loaded
    autoUpdater.checkForUpdates();
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

  // Check for updates
  autoUpdater.checkForUpdates();
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

// AutoUpdater event listeners
autoUpdater.on('checking-for-update', () => {
  console.log('Checking for updates...')
  //dialog.showMessageBox(mainWindow, {
  //  type: 'info',
  //  title: 'Checking for updates',
  //  message: 'Checking for updates. Please wait...',
  //  buttons: [] // Remove buttons to make it non-blocking
  //});
});

autoUpdater.on('update-available', (info) => {
  console.log('Update available:', info);
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Update Available',
    message: `A new update (version ${info.version}) is available. Do you want to download it now?`,
    buttons: ['Yes', 'No']
  }).then((result) => {
    if (result.response === 0) {  // 'Yes' button
      autoUpdater.downloadUpdate();
    }
  });
});

autoUpdater.on('update-not-available', (info) => {
  console.log('Update not available:', info);
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'No Updates',
    message: `You are using the latest version (${info.version}) of the app.`
  });
});

autoUpdater.on('error', (err) => {
  console.error('Error in auto-updater:', err);
  dialog.showErrorBox('Error', 'An error occurred while updating: ' + err);
});

autoUpdater.on('download-progress', (progressObj) => {
  let message = `Downloading update: ${Math.round(progressObj.percent)}%`;
  console.log(message);
  mainWindow.setProgressBar(progressObj.percent / 100);
  mainWindow.setTitle(`Volt v${appVersion} - ${message}`);
});

autoUpdater.on('update-downloaded', (info) => {
  console.log('Update downloaded:', info);
  dialog.showMessageBox(mainWindow, {
    type: 'info',
    title: 'Update Ready',
    message: `Update to version ${info.version} downloaded. The application will restart to install the update.`,
    buttons: ['Restart Now', 'Later']
  }).then((result) => {
    if (result.response === 0) {  // 'Restart Now' button
      autoUpdater.quitAndInstall();
    }
  });
});

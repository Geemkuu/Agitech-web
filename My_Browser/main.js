const { app, BrowserWindow, BrowserView, Menu, ipcMain } = require('electron');
const path = require('path');

let mainWindow;
let browserView;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets/icon.png'), // Add icon later
    titleBarStyle: 'hidden', // Custom title bar
    frame: false, // Custom title bar
    minWidth: 800,
    minHeight: 600
  });

  mainWindow.loadFile('index.html');

  // Create BrowserView for web content
  browserView = new BrowserView({
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  });

  mainWindow.setBrowserView(browserView);
  browserView.setBounds({ x: 0, y: 120, width: 1200, height: 680 }); // Adjust based on UI height
  browserView.webContents.loadURL('https://www.google.com');

  // Open DevTools in development
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.on('resize', () => {
    const [width, height] = mainWindow.getSize();
    browserView.setBounds({ x: 0, y: 120, width, height: height - 120 });
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// IPC handlers for browser functionality
ipcMain.handle('navigate', async (event, url) => {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url;
  }
  browserView.webContents.loadURL(url);
});

ipcMain.handle('go-back', async () => {
  if (browserView.webContents.canGoBack()) {
    browserView.webContents.goBack();
  }
});

ipcMain.handle('go-forward', async () => {
  if (browserView.webContents.canGoForward()) {
    browserView.webContents.goForward();
  }
});

ipcMain.handle('reload', async () => {
  browserView.webContents.reload();
});

ipcMain.handle('new-tab', async () => {
  browserView.webContents.loadURL('about:blank');
});

ipcMain.handle('close-tab', async () => {
  // For single tab, do nothing or close window
});

ipcMain.handle('minimize', () => {
  mainWindow.minimize();
});

ipcMain.handle('maximize', () => {
  if (mainWindow.isMaximized()) {
    mainWindow.unmaximize();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.handle('close', () => {
  mainWindow.close();
});

// Update address bar when navigation occurs
browserView.webContents.on('did-navigate', () => {
  mainWindow.webContents.send('update-address', browserView.webContents.getURL());
});

browserView.webContents.on('did-navigate-in-page', () => {
  mainWindow.webContents.send('update-address', browserView.webContents.getURL());
});

ipcMain.handle('open-settings', () => {
  const settingsWindow = new BrowserWindow({
    width: 800,
    height: 600,
    parent: mainWindow,
    modal: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });
  settingsWindow.loadFile('settings.html');
});
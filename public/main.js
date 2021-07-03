const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const ipcMain = electron.ipcMain;
const url = require('url');
const isDev = require('electron-is-dev');

let loginWindow;
let mainWindow;

function createWindow() {
  const winH = 700;
  const winW = 1000;
  loginWindow = new BrowserWindow({
    width: winW,
    height: winH,
    'max-width': winW,
    'max-height': winH,
    fullscreenWindowTitle: true,
    title: 'InvSys',
    parent: mainWindow,
    webPreferences: { webSecurity: false, nodeIntegration: true },
  });

  loginWindow.setMenu(null);
  loginWindow.on('closed', () => (loginWindow = null));
  //loginWindow.hide();
  //main window
  mainWindow = new BrowserWindow({
    webPreferences: { webSecurity: false, nodeIntegration: true },
  });
  mainWindow.loadURL(
    isDev
      ? ' http://localhost:3000/mainscreen'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  loginWindow.loadURL(
    isDev
      ? ' http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  //mainWindow.setMenu(null);
  mainWindow.on('closed', () => (mainWindow = null));
  mainWindow.maximize();
  mainWindow.hide();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (loginWindow === null) {
    createWindow();
  }
});

ipcMain.on('user-login', (event, arg) => {
  //console.log(arg);
  mainWindow.show();
  loginWindow.hide();

  //mainWindow.webContents.send('image',arg);
});
ipcMain.on('user-logout', (event, arg) => {
  loginWindow.loadURL(
    isDev
      ? ' http://localhost:3000/'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  loginWindow.show();
  mainWindow.hide();

  console.log('test');
});

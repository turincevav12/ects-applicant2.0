const electron = require('electron');
const path = require('path');
const webContents = require('electron');

const app = electron.app;
const globalShortcut = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const appTitle = "ECTS";

let mainWindow = null, printWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false,
        fullscreen: true,
        show: false
    });
	
    mainWindow.setTitle(appTitle);
    globalShortcut.register('Control + Q', () => {
        app.quit();
    });

    mainWindow.loadURL(__dirname + '/index.html');
    mainWindow.show();    
});
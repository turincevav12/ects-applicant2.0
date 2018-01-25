const electron = require('electron');
const path = require('path');
const webContents = require('electron');

const app = electron.app;
const globalShortcut = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;

const users = require('./src/data/login.json')

const appTitle = "ECTS";

let mainWindow = null, printWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 550,
        height: 400,
        frame: false,
        fullscreen: true,
        show: false
    });
	
    mainWindow.setTitle(appTitle);
    globalShortcut.register('Control + Q', () => {
        app.quit();
    });

    ipcMain.on('users', function(event) {
        event.sender.send('data', users);
    });


    mainWindow.loadURL(__dirname + '/index.html');
    mainWindow.show();    
});
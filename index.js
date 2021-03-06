const electron = require('electron');
const path = require('path');
const webContents = require('electron');
const fs = require('fs')


const app = electron.app;
const globalShortcut = electron.globalShortcut;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;


const users = require('./src/data/login.json')
const spec = require('./src/data/spec.json')
const applicant = require('./src/data/applicant.json')

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
    ipcMain.on('spec', function(event){
        event.sender.send('data', spec)
    });    
    ipcMain.on('applicant', function(event){
        event.sender.send('data', spec)
    });
    


    mainWindow.loadURL(__dirname + '/index.html');
    mainWindow.show();    

    ipcMain.on('formToApplicant', (event, data) => {
        formToApplicant = new BrowserWindow({
            width: 800,
            height: 600,
            frame: false, 
            fullscreen: true,
            show: false
        })
        formToApplicant.loadURL(__dirname + '/form-print.html')
        formToApplicant.show();
    })
    ipcMain.on('closeFormToApplicant', (event, data) => {
        formToApplicant.close();
    }) 

    ipcMain.on('printToForm', (event, data) => {
        formToApplicant.webContents.printToPDF({}, (error, data) => {
            if (error) throw error
            fs.writeFile('print.pdf', data, (error) => {
                if (error) throw error
                console.log('Write PDF successfully.')
            })
        })        
    }) 

});
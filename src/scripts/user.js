import '../styles/user.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('getData');
const login = JSON.parse(readFileSync('../data/login.json'));

window.onload = () => {
    console.log(login)
}
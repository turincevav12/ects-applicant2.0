import '../styles/user.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('users');
const login = JSON.parse(readFileSync('./src/data/login.json')).login;

window.onload = () => {
    var enter = document.getElementsByClassName('enter-autorization')[0]
    var name = document.getElementsByClassName('login')[0]
    var password = document.getElementsByClassName('login')[1]
    
    enter.onclick = () => {
        for (var i = 0; i != login.length; i++){
            if(name.value == login[i].login && password.value == login[i].password){
                alert('Вы вошли')
                document.getElementById('user').style.display="none"
                document.getElementById('window-menu').style.display="block"
            }else{
                alert('Логин или пароль не верны')
            }
        }
    } 
}




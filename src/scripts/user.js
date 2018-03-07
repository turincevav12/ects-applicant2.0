import '../styles/user.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send(['users', 'spec', 'applicant']);

const login = JSON.parse(readFileSync('./src/data/login.json')).login;
window.bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));
window.specArray = JSON.parse(readFileSync('./src/data/spec.json')).spec;

setInterval(function(){
    window.login = JSON.parse(readFileSync('./src/data/login.json')).login;
    window.bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));
    window.specArray = JSON.parse(readFileSync('./src/data/spec.json')).spec;
}, 3000)
window.onload = () => {
    var enter = document.getElementsByClassName('enter-autorization')[0]
    var name = document.getElementsByClassName('login')[0]
    var password = document.getElementsByClassName('login')[1]
    
    enter.onclick = () => {
        for (var i = 0; i != login.length; i++){
            if(name.value == login[i].login && password.value == login[i].password){
                alert('Добро пожаловать, ' + login[i].name)
                document.getElementById('user').style.display="none"
                document.getElementById('window-menu').style.display="block"

                window.pass = login[i].pass

                closeHello()
            }else{
                alert('Логин или пароль не верны, повторите попытку.')
            }
        }
    } 
}




import '../styles/user.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send(['users', 'spec', 'applicant']);

window.login = JSON.parse(readFileSync('./src/data/login.json')).login;
window.bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));
window.specArray = JSON.parse(readFileSync('./src/data/spec.json'));

setInterval(function(){
    window.login = JSON.parse(readFileSync('./src/data/login.json')).login;
    window.bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));
    window.specArray = JSON.parse(readFileSync('./src/data/spec.json'));
}, 3000)
window.onload = () => {
    var enter = document.getElementsByClassName('enter-autorization')[0]
    var name = document.getElementsByClassName('login')[0]
    var password = document.getElementsByClassName('login')[1]
    
    var passf = false
    var passN = -1
    enter.onclick = () => {
        for (var i = 0; i != login.length; i++){
            if(name.value == login[i].login && password.value == login[i].password){
                passf = true
                passN = i
            }            
        }
        if(passf){
            alert('Добро пожаловать, ' + login[passN].name)
            document.getElementById('user').style.display="none"
            document.getElementById('window-menu').style.display="block"

            window.pass = login[passN].pass

            closeHello()
        }else{
            alert('Логин или пароль не верны, повторите попытку.')
        }
    } 
}




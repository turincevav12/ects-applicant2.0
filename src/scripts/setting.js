import '../styles/setting.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

var newSpec = function(){
    document.getElementById('delSpecSelect').innerHTML = ''
    specArray.forEach(function(e, i) {
        var opt = document.createElement('option')
        opt.innerText = e
        opt.id = i
        document.getElementById('delSpecSelect').appendChild(opt)
    });
}


newSpec()


document.getElementById('buttonDelSpec').onclick = () => {
    var select = document.getElementById('delSpecSelect').options.selectedIndex

    specArray.splice(select, 1)
    writeFile('./src/data/spec.json', JSON.stringify(specArray, null, '\t'))
    newSpec()
}

document.getElementById('addSpecB').onclick = () => {
    let newSpec = document.getElementById('nameNewSpec').value
    specArray.push(newSpec)

    writeFile('./src/data/spec.json', JSON.stringify(specArray, null, '\t'), (err) => {
        if (err) throw err;
        else {
            alert('Новая специальность добавлена')
            document.getElementById('nameNewSpec').value = ""
        };
    }) 
}

document.getElementById('addProf').onclick = () => {
    let name = document.getElementById('login').value
    let pass = document.getElementById('pass').value
    let FI = document.getElementById('FI').value
    let passModer = document.getElementById('paddModer').value

    var login = JSON.parse(readFileSync('./src/data/login.json'));

    login.login.push({
        "login": name,
		"password": pass,
		"name": FI,
		"pass": passModer
    })
    writeFile('./src/data/login.json', JSON.stringify(login, null, '\t')),(err) => {
        if (err)throw err;
        else{
            alert('Добавленно')
            document.getElementById('login').value = ''
            document.getElementById('pass').value = ''
            ocument.getElementById('FI').value = ''
            document.getElementById('paddModer').value = ''
        }
    }

}
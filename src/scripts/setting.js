import '../styles/setting.css'
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';


document.getElementById('addSpecB').onclick = () => {
    let newSpec = document.getElementById('nameNewSpec').value
    specArray.spec.push([newSpec])

    writeFile('./src/data/spec.json', JSON.stringify(specArray, null, '\t'), (err) => {
        if (err) throw err;
        else {
            alert('Новая специальность добавлена')
        };
    }) 
}
import { ipcRenderer } from 'electron';
import { readFileSync, writeFile } from 'fs';

ipcRenderer.on('data', (event, arg) => {});
ipcRenderer.send('applicant');

bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));


var add = document.getElementById('add-applicant')

add.onclick = () => {
    let inputs = document.getElementsByClassName('input')
    let i = 0

    for(var j = 0; j!= inputs.length; j++){
        if (inputs[j].value != ""){
            inputs[j].style.border = ""
            i++
        }else{
            inputs[j].style.border = "1px solid red"
        }
    }
    if(i == inputs.length){ 
        alert('Начало записи, ожидайте')
        var balls = document.getElementById('ball').value.split(" ")
        var mass = 0.00
        if ( balls.length != 1){
            balls.forEach(function(e){
                mass = mass + parseFloat(e);
            })
            ball = (mass/balls.length).toFixed(2)
        }else{
            var ball = parseFloat(balls[0]).toFixed(2)
        }
        if (ball == 4.00 || ball == 3.00 || ball == 2.00 || ball == 1.00){
            ball = parseFloat(ball) + 0.01
        }

        bazaApplicants.push({
            "fio" : document.getElementById('fio').value,
            "dataHappi" : document.getElementById('data-happi').value,
            "placeofbirth" : document.getElementById('place-of-birth').value,
            "citizenship" : document.getElementById('citizenship').value,
            "document" : document.getElementById('document').value,
            "seria" : document.getElementById('seria').value,
            "number" : document.getElementById('number').value,
            "issued" : document.getElementById('issued').value,
            "regestrationofpassport" : document.getElementById('regestration-of-passport').value,
            "adresnow" : document.getElementById('adres-now').value,
            "index" : document.getElementById('index').value,
            "callsot" : document.getElementById('call-sot').value,
            "callhoum" : document.getElementById('call-houm').value,
            "spec" : document.getElementById('spec').value,
            "level" : document.getElementById('level').value,
            "obchaga" : document.getElementById('obchaga').value,
            "mestomoney" : document.getElementById('mesto-money').value,
            "endshooldata" : document.getElementById('end-shool-data').value,
            "nameshool" : document.getElementById('name-shool').value,
            "seriyshool" : document.getElementById('seriy-shool').value,
            "numbershool" : document.getElementById('number-shool').value,
            "language" : document.getElementById('language').value,
            "phasername" : document.getElementById('phaser-name').value,
            "phaserjob" : document.getElementById('phaser-job').value,
            "phaserjobmesto" : document.getElementById('phaser-job-mesto').value,
            "phaserjophone" : document.getElementById('phaser-job-phone').value,
            "phasermobile" : document.getElementById('phaser-mobile').value,
            "mothername" : document.getElementById('mother-name').value,
            "motherjob" : document.getElementById('mother-job').value,
            "motherjobmesto" : document.getElementById('mother-job-mesto').value,
            "motherjobphone" : document.getElementById('mother-job-phone').value,
            "mothermobile" : document.getElementById('mother-mobile').value,
            "army" : document.getElementById('army').value,
            "info" : document.getElementById('info').value,
            "ball": ball
        })
        writeFile('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'), (err) => {
            if (err) throw err;
            else {
                alert('Успешно')
            };
        })        
    }else{
        alert('Не все поля заполнены')
    }

    

    
}
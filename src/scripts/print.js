import { ipcRenderer } from 'electron'
import { readFileSync, writeFile } from 'fs';

var close = document.getElementById('close')
var delet = document.getElementById('delete')
var read = document.getElementById('read')
var close1 = document.getElementById('close1')
var saves = document.getElementById('saves')

let app = JSON.parse(readFileSync('./src/data/login.json')).sp[0].num;
let bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));  
let spec =  JSON.parse(readFileSync('./src/data/spec.json')).spec;

//{ocument.getElementById('span_text-ot-FIO').innerText = bazaApplicants[app].fio
//document.getElementById('text-data-placeholder').innerText = bazaApplicants[app].dataHappi
//document.getElementById('text-city-placeholder').innerText = bazaApplicants[app].placeofbirth
//document.getElementById('text-citizenship-placeholder').innerText = bazaApplicants[app].citizenship
//document.getElementById('placeholder-document-identity').innerText = bazaApplicants[app].document
//document.getElementById('placeholder-serial').innerText = bazaApplicants[app].seria
//document.getElementById('placeholder-number').innerText = bazaApplicants[app].number
//document.getElementById('placeholder-when-and-by-whom-issued').innerText = bazaApplicants[app].issued
//document.getElementById('placeholder-registration-address-as-in-passport').innerText = bazaApplicants[app].regestrationofpassport
//document.getElementById('placeholder-the-actual-address').innerText = bazaApplicants[app].adresnow
//document.getElementById('placeholder-index').innerText = bazaApplicants[app].index
//document.getElementById('placeholder-cellphone').innerText = bazaApplicants[app].callsot
//document.getElementById('placeholder-homephone').innerText = bazaApplicants[app].callhoum
//document.getElementById('specional').innerText = bazaApplicants[app].spec
//document.getElementById('yers').innerText = bazaApplicants[app].endshooldata
//document.getElementById('name_school').innerText = bazaApplicants[app].nameshool
//document.getElementById('seria_document_school').innerText = bazaApplicants[app].seriyshool
//document.getElementById('number_document_school').innerText = bazaApplicants[app].numbershool
//document.getElementById('language').innerText = bazaApplicants[app].language
//document.getElementById('obchaga').innerText = bazaApplicants[app].obchaga
//document.getElementById('fio_faser').innerText = bazaApplicants[app].phasername
//document.getElementById('mesto_job_f').innerText = bazaApplicants[app].phaserjob
//document.getElementById('doljnost_f').innerText = bazaApplicants[app].phaserjobmesto
//document.getElementById('tell_job_f').innerText = bazaApplicants[app].phaserjophone
//document.getElementById('tell_my_f').innerText = bazaApplicants[app].phasermobile
//document.getElementById('fio_mazer').innerText = bazaApplicants[app].mothername
//document.getElementById('mesto_job_m').innerText = bazaApplicants[app].motherjob
//document.getElementById('doljnost_m').innerText = bazaApplicants[app].motherjobmesto
//document.getElementById('tell_job_m').innerText = bazaApplicants[app].motherjobphone
//document.getElementById('tell_my_m').innerText = bazaApplicants[app].mothermobile
//document.getElementById('army').innerText = bazaApplicants[app].army
//document.getElementById('dr_sv').innerText = bazaApplicants[app].info


close.onclick = () =>{
    ipcRenderer.send('closeFormToApplicant')
}

delet.onclick = () =>{
    let app = JSON.parse(readFileSync('./src/data/login.json')).sp[0].num;
    let bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));   

    alert("Производиться удаление, пожалуйста подождите")
    bazaApplicants.splice(app, 1)
    writeFile('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'))

    
    ipcRenderer.send('closeFormToApplicant')
}
read.onclick = () => {
    document.getElementById('showApplicant').style.display = "none"
    document.getElementById('readApplicant').style.display = "block"

    document.getElementById('fio').value = bazaApplicants[app].fio
    document.getElementById('data-happi').value = bazaApplicants[app].dataHappi
    document.getElementById('place-of-birth').value = bazaApplicants[app].placeofbirth
    document.getElementById('citizenship').value = bazaApplicants[app].citizenship
    document.getElementById('document').value = bazaApplicants[app].document
    document.getElementById('seria').value = bazaApplicants[app].seria
    document.getElementById('number').value = bazaApplicants[app].number
    document.getElementById('issued').value = bazaApplicants[app].issued
    document.getElementById('regestration-of-passport').value = bazaApplicants[app].regestrationofpassport
    document.getElementById('adres-now').value = bazaApplicants[app].adresnow
    document.getElementById('index').value = bazaApplicants[app].index
    document.getElementById('call-sot').value = bazaApplicants[app].callsot
    document.getElementById('call-houm').value = bazaApplicants[app].callhoum
    document.getElementById('spec').value = bazaApplicants[app].spec
    document.getElementById('end-shool-data').value = bazaApplicants[app].endshooldata
    document.getElementById('name-shool').value = bazaApplicants[app].nameshool
    document.getElementById('seriy-shool').value = bazaApplicants[app].seriyshool
    document.getElementById('number-shool').value = bazaApplicants[app].numbershool
    document.getElementById('language').value = bazaApplicants[app].language
    document.getElementById('obchaga').value = bazaApplicants[app].obchaga

    document.getElementById('phaser-name').value = bazaApplicants[app].phasername
    document.getElementById('phaser-job').value = bazaApplicants[app].phaserjob
    document.getElementById('phaser-job-mesto').value = bazaApplicants[app].phaserjobmesto
    document.getElementById('phaser-job-phone').value = bazaApplicants[app].phaserjophone
    document.getElementById('phaser-mobile').value = bazaApplicants[app].phasermobile
    document.getElementById('mother-name').value = bazaApplicants[app].mothername
    document.getElementById('mother-job').value = bazaApplicants[app].motherjob
    document.getElementById('mother-job-mesto').value = bazaApplicants[app].motherjobmesto
    document.getElementById('mother-job-phone').value = bazaApplicants[app].motherjobphone
    document.getElementById('mother-mobile').value = bazaApplicants[app].mothermobile
    document.getElementById('army').value = bazaApplicants[app].army
    document.getElementById('info').value = bazaApplicants[app].info

    spec.forEach(function(e){
        var opt = document.createElement('option')
        opt.innerText = e
        document.getElementById('spec').appendChild(opt)
    })
}

close1.onclick = () => {
    document.getElementById('showApplicant').style.display = "block"
    document.getElementById('readApplicant').style.display = "none"
}

saves.onclick = () =>{
    bazaApplicants.splice(app, 1, {
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
        "info" : document.getElementById('info').value
    })

    writeFile('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'), (err) => {
        if (err) throw err;
        else {
            alert('Изменено')
        };
    })  
}
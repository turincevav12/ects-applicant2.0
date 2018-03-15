import '../styles/window-menu.css'
import { ipcRenderer } from 'electron'
import { readFileSync, writeFile } from 'fs';

var newApplicantB = document.getElementsByClassName('buttons-navigation')[0]
var bazaApplicantsB = document.getElementsByClassName('buttons-navigation')[1]
var settingB = document.getElementsByClassName('buttons-navigation')[2]

var creatApplicant = document.getElementById('new-applicant')
var bazaApplicant = document.getElementById('bazaApplicant')
var setting = document.getElementById('setting')
var hello = document.getElementById('hello')
var applicant = document.getElementById('applicants')
var show = document.getElementById('modal-password')
var accept = document.getElementById('enter-password-modal')
var reset = document.getElementById('cog')


window.closeHello = function(){
    setTimeout(function() {
        hello.style.display = "none"
    }, 4000);
}


newApplicantB.onclick = () => {
    creatApplicant.style.display = 'inline-block'
    bazaApplicant.style.display = 'none'
    setting.style.display = 'none'

    var select = document.getElementById('spec')
    select.innerHTML = ""
    specArray.forEach(function(e, i) {
        var opt = document.createElement('option')
        opt.innerText = e
        select.appendChild(opt)
    })
}

bazaApplicantsB.onclick = (e) => {
    show.style.display = 'block'
    document.getElementById('window-menu').style.opacity = 0.5
    accept.onclick = () => {
        var passwordModal = document.getElementById('password-modal').value
        if (passwordModal == pass) {
            document.getElementById('window-menu').style.opacity = 1
            show.style.display = 'none'

            applicant.innerHTML = ''

            document.getElementById('namePoisk').onclick = () => {
                namePoisk()
            }

            creatApplicant.style.display = 'none'
            bazaApplicant.style.display = 'inline-block'
            setting.style.display = 'none'

            creatSpec()

            document.getElementById('password-modal').value = ""
        } else {
            alert('У вас нет прав на данный раздел')
            show.style.display = 'none'
            document.getElementById('window-menu').style.opacity = 1
        }
    }
}

settingB.onclick = () => {
    
    creatApplicant.style.display = 'none'
    bazaApplicant.style.display = 'none'
    setting.style.display = 'inline-block'
}

window.enterBlockSpec = () => {
    let bazaApplicants = JSON.parse(readFileSync('./src/data/applicant.json'));
    let nameSpec = ((document.getElementById(indexNumber).innerText).split(' '))[0]
    let massSpec = []

    for (let i = 0; i != bazaApplicants.length; i++) {
        let numSpec = ((bazaApplicants[i].spec).split(' '))[0]
        if (numSpec == nameSpec) {
            massSpec.push(i)
        }
    }
    window.specMass = massSpec
    if (massSpec.length != 0) {
        applicant.innerHTML = ""

        backToSpec()
        
        sortApplicantPoBall()


        for (let i = 0; i != massSpec.length; i++) {
            let lineApplcantToSpec = document.createElement('div')
            let spanFioToSpec = document.createElement('span')
            let yearToSpec = document.createElement('span')
            let ball = document.createElement('span')

            lineApplcantToSpec.onclick = function() {
                window.lineApplcantToSpecNumber = massSpec[i]

                clickToApplicantNumber()
            }

            lineApplcantToSpec.className = 'lineApplcant'
            lineApplcantToSpec.id =  massSpec[i]
            spanFioToSpec.className = 'spanApplicansPoisk'
            yearToSpec.className = 'spanApplicansPoisk'
            ball.className = 'spanApplicansPoisk'

            spanFioToSpec.innerText = bazaApplicants[massSpec[i]].fio
            yearToSpec.innerText = bazaApplicants[massSpec[i]].dataHappi
            ball.innerText = "ср. балл = " + bazaApplicants[massSpec[i]].ball

            lineApplcantToSpec.appendChild(spanFioToSpec)
            lineApplcantToSpec.appendChild(yearToSpec)
            lineApplcantToSpec.appendChild(ball)
            applicants.appendChild(lineApplcantToSpec)
        }
    } else {
        alert('По вашему запросу данных не найдено')
    }

}

var namePoisk = function() {
    let key = 0
    let indexApplicant = []
    let name = (document.getElementById('poiskNameIn').value).split(' ')
    bazaApplicants.forEach(function(e) {
        let applicant = e.fio.split(' ')
        let summ = 0
        for (var i = 0; i != name.length; i++) {
            for (var j = 0; j != applicant.length; j++) {
                if (name[i].toLowerCase() == applicant[j].toLowerCase()) {
                    summ++
                }
            }
        }
        if (summ == name.length) {
            indexApplicant.push(key)
        }
        key++
    })
    if (indexApplicant.length != 0) {
        applicant.innerHTML = ""

        backToSpec()


        indexApplicant.forEach(function(e) {
            let lineApplcant = document.createElement('div')
            let fioB = document.createElement('span')
            let yearB = document.createElement('span')
            let specB = document.createElement('span')
            let br = document.createElement('br')

            lineApplcant.onclick = function() {
                window.lineApplcantToSpecNumber = e
                clickToApplicantNumber()
            }

            lineApplcant.className = "lineApplcant"
            fioB.className = "spanApplicansPoisk"
            yearB.className = "spanApplicansPoisk"
            specB.className = "spanApplicansPoisk"

            fioB.innerText = bazaApplicants[e].fio
            yearB.innerText = bazaApplicants[e].dataHappi
            specB.innerText = bazaApplicants[e].spec

            lineApplcant.appendChild(fioB)
            lineApplcant.appendChild(yearB)
            lineApplcant.appendChild(br)
            lineApplcant.appendChild(specB)

            applicants.appendChild(lineApplcant)

            
        })
    } else {
        alert('По вашему запросу данных не найдено')
    }
}

var creatSpec = function() {
    applicant.innerHTML = ""
    specArray.forEach(function(e, i) {
        var block = document.createElement('div')
        var applicants = document.createElement('div')

        block.className = 'blockSpecka'
        block.innerText = e
        block.id = i
        block.onclick = function() {
            window.indexNumber = i;
            enterBlockSpec()
        }

        applicants.className = 'blockApplicantsShow'
        applicants.id = "ap" + i

        block.appendChild(applicants)
        applicant.appendChild(block)

        
    })
}

var backToSpec = function() {
    let backMenu = document.createElement('div')
    backMenu.innerText = "Вернуться в меню"
    backMenu.id = 'backMenu'
    backMenu.onclick = function() {
        creatSpec()
    }
    applicants.appendChild(backMenu)
}

var clickToApplicantNumber = function() {
    document.getElementById("pause").style.display = "block"   
    document.getElementById('window-menu').style.opacity = 0.2
    let numApp = JSON.parse(readFileSync('./src/data/login.json'));
    numApp.sp.splice(0,1)
    numApp.sp.push({"num":lineApplcantToSpecNumber})

    writeFile('./src/data/login.json', JSON.stringify(numApp, null, '\t')) 
    setTimeout(function(){
        ipcRenderer.send('formToApplicant')
        document.getElementById("pause").style.display = "none"
        document.getElementById('window-menu').style.opacity = 1
        
    }, 3000)
}




var sortApplicantPoBall = function(){
    let line = document.createElement('div')
    let top = document.createElement('div')
    let bottom  = document.createElement('div')

    line.id = 'lineSorted'
    top.className = 'sort'
    bottom.className = 'sort'

    top.id = "sortTop"
    bottom.id = "sortbottom"

    top.innerText = "По возрастанию"
    bottom.innerText = "По убыванию"

    line.appendChild(top)   
    line.appendChild(bottom)
    applicants.appendChild(line)
    
    window.mass = []
    for (var i = 0; i != specMass.length; i ++){
        window.mass.push(parseFloat(bazaApplicants[specMass[i]].ball) + "/" + specMass[i])
    }

    document.getElementById('sortTop').onclick = () =>{
        window.massSortTop  = mass.sort().reverse()   
        console.log(massSortTop)
        functionSorted()
    }
    document.getElementById('sortbottom').onclick = () =>{
        window.massSortTop  = mass.sort()
        console.log(massSortTop)
        functionSorted()
    }

}

var functionSorted = function(){
    applicant.innerHTML = "" 
    backToSpec()
    sortApplicantPoBall()
    console.log(window.mass)
    window.massSortTop.forEach(function(e){
        let numbers = (e.split('/'))[1]
        
        let lineApplcantToSpec = document.createElement('div')
        let spanFioToSpec = document.createElement('span')
        let yearToSpec = document.createElement('span')
        let ball = document.createElement('span')

        lineApplcantToSpec.onclick = function() {
            window.lineApplcantToSpecNumber = numbers

            clickToApplicantNumber()
        }
        lineApplcantToSpec.className = 'lineApplcant'
        lineApplcantToSpec.id =  numbers
        spanFioToSpec.className = 'spanApplicansPoisk'
        yearToSpec.className = 'spanApplicansPoisk'
        ball.className = 'spanApplicansPoisk'
        spanFioToSpec.innerText = bazaApplicants[numbers].fio
        yearToSpec.innerText = bazaApplicants[numbers].dataHappi
        ball.innerText = "ср. балл = " + bazaApplicants[numbers].ball
        lineApplcantToSpec.appendChild(spanFioToSpec)
        lineApplcantToSpec.appendChild(yearToSpec)
        lineApplcantToSpec.appendChild(ball)
        applicants.appendChild(lineApplcantToSpec)
    })
}
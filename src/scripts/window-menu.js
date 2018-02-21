import '../styles/window-menu.css'


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



setTimeout(function() {
    hello.style.display = "none"
}, 100);

newApplicantB.onclick = () => {
    creatApplicant.style.display = 'inline-block'
    bazaApplicant.style.display = 'none'
    setting.style.display = 'none'

    var select = document.getElementById('spec')
    specArray.forEach(function(e, i) {
        var opt = document.createElement('option')
        opt.innerText = e
        select.appendChild(opt)
    })
}

bazaApplicantsB.onclick = () => {
    show.style.display = 'block'
    accept.onclick = () => {
        var passwordModal = document.getElementById('password-modal').value
        if (passwordModal == '1') {
            show.style.display = 'none'

            applicant.innerHTML = ''

            document.getElementById('namePoisk').onclick = () => {
                namePoisk()
            }

            creatApplicant.style.display = 'none'
            bazaApplicant.style.display = 'inline-block'
            setting.style.display = 'none'

            creatSpec()
        } else {
            alert('У вас нет прав на данный раздел')
        }
    }
}

settingB.onclick = () => {
    show.style.display = 'block'


    creatApplicant.style.display = 'none'
    bazaApplicant.style.display = 'none'
    setting.style.display = 'inline-block'
}

window.enterBlockSpec = () => {
    let nameSpec = ((document.getElementById(indexNumber).innerText).split(' '))[0]
    let massSpec = []

    for (let i = 0; i != bazaApplicants.length; i++) {
        let numSpec = ((bazaApplicants[i].spec).split(' '))[0]
        if (numSpec == nameSpec) {
            massSpec.push(i)
        }
    }
    if (massSpec.length != 0) {
        applicant.innerHTML = ""

        backToSpec()

        for (let i = 0; i != massSpec.length; i++) {
            let lineApplcantToSpec = document.createElement('div')
            let spanFioToSpec = document.createElement('span')
            let yearToSpec = document.createElement('span')

            lineApplcantToSpec.onclick = function() {
                window.lineApplcantToSpecNumber = massSpec[i]
                clickToApplicantNumber()
            }

            lineApplcantToSpec.className = 'lineApplcant'
            spanFioToSpec.className = 'spanApplicansPoisk'
            yearToSpec.className = 'spanApplicansPoisk'

            spanFioToSpec.innerText = bazaApplicants[massSpec[i]].fio
            yearToSpec.innerText = bazaApplicants[massSpec[i]].dataHappi

            lineApplcantToSpec.appendChild(spanFioToSpec)
            lineApplcantToSpec.appendChild(yearToSpec)
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
    alert(lineApplcantToSpecNumber)
}
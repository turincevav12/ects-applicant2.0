import '../styles/window-menu.css'


var newApplicantB = document.getElementsByClassName('buttons-navigation')[0]
var bazaApplicantsB = document.getElementsByClassName('buttons-navigation')[1]
var settingB = document.getElementsByClassName('buttons-navigation')[2]

var creatApplicant = document.getElementById('new-applicant')
var bazaApplicant = document.getElementById('bazaApplicant')
var setting = document.getElementById('setting')
var hello = document.getElementById('hello')
var applicant = document.getElementById('applicants')


setTimeout(function() {
    hello.style.display = "none"
}, 10000);

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
    applicant.innerHTML = ''

    document.getElementById('namePoisk').onclick = () => {
        namePoisk()
    }

    creatApplicant.style.display = 'none'
    bazaApplicant.style.display = 'inline-block'
    setting.style.display = 'none'

    console.log(bazaApplicants)

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

settingB.onclick = () => {
    creatApplicant.style.display = 'none'
    bazaApplicant.style.display = 'none'
    setting.style.display = 'inline-block'
}

var indexNoneBlock = 0
window.enterBlockSpec = (e) => {
    document.getElementById('ap' + indexNoneBlock).style.display = "none"
    document.getElementById('ap' + indexNumber).style.display = "block"
    document.getElementById('ap' + indexNumber).innerHTML = ""

    bazaApplicants.forEach(function(e, i) {
        if (bazaApplicants[i].spec == specArray[indexNumber]) {
            var block = document.createElement('div')
            block.className = "fioBlockApllicant"
            block.innerText = bazaApplicants[i].fio

            document.getElementById('ap' + indexNumber).appendChild(block)
        }
    })

    indexNoneBlock = indexNumber
}

var namePoisk = function() {
    let key = 0
    let name = (document.getElementById('poiskNameIn').value).split(' ')
    bazaApplicants.forEach(function(e) {
        let applicant = e.name.split(' ')
        let summ = 0
        for (var i = 0; i != name.length; i++) {
            for (var j = 0; j != applicant.length; j++) {
                if (name[i].toLowerCase() == applicant[j].toLowerCase()) {
                    summ++
                }
            }
        }
        if (summ == name.length) {
            alert(key)
        }

        key++
    })
}
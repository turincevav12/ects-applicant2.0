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
        if(passwordModal == '1'){
            show.style.display = 'none'

            applicant.innerHTML = ''
            
            document.getElementById('namePoisk').onclick = () => {
                namePoisk()
            }
        
            creatApplicant.style.display = 'none'
            bazaApplicant.style.display = 'inline-block'
            setting.style.display = 'none'
        
            creatSpec()
        }else{
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
    applicant.innerHTML = ""
    console.log(bazaApplicants[indexNumber].length)
    if (bazaApplicants[indexNumber].length == 0){
        let block = document.createElement('div')
        let appectNoApplicant = document.createElement('div')
        block.id = 'noApplicant'
        appectNoApplicant.id = 'appectNoApplicant'
        
        block.innerText = "Записей нет"
        appectNoApplicant.innerText = "Вернуться"

        block.appendChild(appectNoApplicant)
        applicant.appendChild(block)
    }else{

    }

}

var namePoisk = function() {
    let key = 0
    let indexApplicant = []
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
            indexApplicant.push(key)
        }

        key++
    })

    for(var i = 0; i != indexApplicant.length; i++){
        let lineApplcant = document.createElement('div')
    }
    
}

var creatSpec = function(){
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
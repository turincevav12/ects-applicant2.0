/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);



var close = document.getElementById('close');
var delet = document.getElementById('delete');
var read = document.getElementById('read');
var close1 = document.getElementById('close1');
var saves = document.getElementById('saves');
var print = document.getElementById('print');

let app = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/login.json')).sp[0].num;
let bazaApplicants = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/applicant.json'));
let spec = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/spec.json'));

document.getElementById('fio').innerText = bazaApplicants[app].fio;
document.getElementById('dataHappi').innerText = bazaApplicants[app].dataHappi;
document.getElementById('placeofbirth').innerText = bazaApplicants[app].placeofbirth;
document.getElementById('citizenship').innerText = bazaApplicants[app].citizenship;
document.getElementById('document').innerText = bazaApplicants[app].document;
document.getElementById('seria').innerText = bazaApplicants[app].seria;
document.getElementById('number').innerText = bazaApplicants[app].number;
document.getElementById('issued').innerText = bazaApplicants[app].issued;
document.getElementById('regestrationofpassport').innerText = bazaApplicants[app].regestrationofpassport;
document.getElementById('adresnow').innerText = bazaApplicants[app].adresnow;
document.getElementById('index').innerText = bazaApplicants[app].index;
document.getElementById('callsot').innerText = bazaApplicants[app].callsot;
document.getElementById('callhoum').innerText = bazaApplicants[app].callhoum;
document.getElementById('spes').innerText = bazaApplicants[app].spec;
document.getElementById('baza').innerText = bazaApplicants[app].level;
document.getElementById('mestomoney').innerText = bazaApplicants[app].mestomoney;
document.getElementById('endshooldata').innerText = bazaApplicants[app].endshooldata;
document.getElementById('nameshool').innerText = bazaApplicants[app].nameshool;
document.getElementById('seriyshool').innerText = bazaApplicants[app].seriyshool;
document.getElementById('numbershool').innerText = bazaApplicants[app].numbershool;
document.getElementById('language').innerText = bazaApplicants[app].language;
document.getElementById('obchaga').innerText = bazaApplicants[app].obchaga;
document.getElementById('phasername').innerText = bazaApplicants[app].phasername;
document.getElementById('phaserjob').innerText = bazaApplicants[app].phaserjob;
document.getElementById('phaserjobmesto').innerText = bazaApplicants[app].phaserjobmesto;
document.getElementById('phaserjophone').innerText = bazaApplicants[app].phaserjophone;
document.getElementById('phasermobile').innerText = bazaApplicants[app].phasermobile;
document.getElementById('mothername').innerText = bazaApplicants[app].mothername;
document.getElementById('motherjob').innerText = bazaApplicants[app].motherjob;
document.getElementById('motherjobmesto').innerText = bazaApplicants[app].motherjobmesto;
document.getElementById('motherjobphone').innerText = bazaApplicants[app].motherjobphone;
document.getElementById('mothermobile').innerText = bazaApplicants[app].mothermobile;
document.getElementById('army').innerText = bazaApplicants[app].army;
document.getElementById('info').innerText = bazaApplicants[app].info;

close.onclick = () => {
    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('closeFormToApplicant');
};

print.onclick = () => {
    document.getElementById('navigation').style.display = "none";
    setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('printToForm');
        alert('PDF сохранен');

        setTimeout(function () {
            document.getElementById('navigation').style.display = "block";
        }, 1000);
    }, 2000);
};

delet.onclick = () => {
    let app = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/login.json')).sp[0].num;
    let bazaApplicants = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/applicant.json'));

    alert("Производиться удаление, пожалуйста подождите");
    bazaApplicants.splice(app, 1);
    Object(__WEBPACK_IMPORTED_MODULE_1_fs__["writeFile"])('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'));

    __WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('closeFormToApplicant');
};
read.onclick = () => {
    document.getElementById('showApplicant').style.display = "none";
    document.getElementById('readApplicant').style.display = "block";

    document.getElementById('fioR').value = bazaApplicants[app].fio;
    document.getElementById('data-happiR').value = bazaApplicants[app].dataHappi;
    document.getElementById('place-of-birthR').value = bazaApplicants[app].placeofbirth;
    document.getElementById('citizenshipR').value = bazaApplicants[app].citizenship;
    document.getElementById('documentR').value = bazaApplicants[app].document;
    document.getElementById('seriaR').value = bazaApplicants[app].seria;
    document.getElementById('numberR').value = bazaApplicants[app].number;
    document.getElementById('issuedR').value = bazaApplicants[app].issued;
    document.getElementById('regestration-of-passportR').value = bazaApplicants[app].regestrationofpassport;
    document.getElementById('adres-nowR').value = bazaApplicants[app].adresnow;
    document.getElementById('indexR').value = bazaApplicants[app].index;
    document.getElementById('call-sotR').value = bazaApplicants[app].callsot;
    document.getElementById('call-houmR').value = bazaApplicants[app].callhoum;
    document.getElementById('end-shool-dataR').value = bazaApplicants[app].endshooldata;
    document.getElementById('name-shoolR').value = bazaApplicants[app].nameshool;
    document.getElementById('seriy-shoolR').value = bazaApplicants[app].seriyshool;
    document.getElementById('number-shoolR').value = bazaApplicants[app].numbershool;

    document.getElementById('specR').innerText = bazaApplicants[app].spec;
    document.getElementById('languageR').innerText = bazaApplicants[app].language;
    document.getElementById('obchagaR').innerText = bazaApplicants[app].obchaga;
    document.getElementById('armyR').innerText = bazaApplicants[app].army;
    document.getElementById('mesto-moneyR').innerText = bazaApplicants[app].mestomoney;
    document.getElementById('levelR').innerText = bazaApplicants[app].level;

    document.getElementById('phaser-nameR').value = bazaApplicants[app].phasername;
    document.getElementById('phaser-jobR').value = bazaApplicants[app].phaserjob;
    document.getElementById('phaser-job-mestoR').value = bazaApplicants[app].phaserjobmesto;
    document.getElementById('phaser-job-phoneR').value = bazaApplicants[app].phaserjophone;
    document.getElementById('phaser-mobileR').value = bazaApplicants[app].phasermobile;
    document.getElementById('mother-nameR').value = bazaApplicants[app].mothername;
    document.getElementById('mother-jobR').value = bazaApplicants[app].motherjob;
    document.getElementById('mother-job-mestoR').value = bazaApplicants[app].motherjobmesto;
    document.getElementById('mother-job-phoneR').value = bazaApplicants[app].motherjobphone;
    document.getElementById('mother-mobileR').value = bazaApplicants[app].mothermobile;
    document.getElementById('infoR').value = bazaApplicants[app].info;
};

close1.onclick = () => {
    document.getElementById('showApplicant').style.display = "block";
    document.getElementById('readApplicant').style.display = "none";
};

saves.onclick = () => {
    if (iSpecRR == 1) {
        var specs = document.getElementById('specRS').value;
    } else {
        var specs = document.getElementById('specR').innerText;
    }

    if (iObchagaRR == 1) {
        var objas = document.getElementById('obchagaRS').value;
    } else {
        var objas = document.getElementById('obchagaR').innerText;
    }

    if (imestomoneyRR == 1) {
        var mestos = document.getElementById('mesto-moneyRS').value;
    } else {
        var mestos = document.getElementById('mesto-moneyR').innerText;
    }

    if (ilanguageRR == 1) {
        var langs = document.getElementById('languageRS').value;
    } else {
        var langs = document.getElementById('languageR').innerText;
    }

    if (iLevelRR == 1) {
        var levels = document.getElementById('levelRS').value;
    } else {
        var levels = document.getElementById('levelR').innerText;
    }

    bazaApplicants.splice(app, 1, {
        "fio": document.getElementById('fioR').value,
        "dataHappi": document.getElementById('data-happiR').value,
        "placeofbirth": document.getElementById('place-of-birthR').value,
        "citizenship": document.getElementById('citizenshipR').value,
        "document": document.getElementById('documentR').value,
        "seria": document.getElementById('seriaR').value,
        "number": document.getElementById('numberR').value,
        "issued": document.getElementById('issuedR').value,
        "regestrationofpassport": document.getElementById('regestration-of-passportR').value,
        "adresnow": document.getElementById('adres-nowR').value,
        "index": document.getElementById('indexR').value,
        "callsot": document.getElementById('call-sotR').value,
        "callhoum": document.getElementById('call-houmR').value,
        "spec": specs,
        "level": levels,
        "obchaga": objas,
        "mestomoney": mestos,
        "endshooldata": document.getElementById('end-shool-dataR').value,
        "nameshool": document.getElementById('name-shoolR').value,
        "seriyshool": document.getElementById('seriy-shoolR').value,
        "numbershool": document.getElementById('number-shoolR').value,
        "language": langs,
        "phasername": document.getElementById('phaser-nameR').value,
        "phaserjob": document.getElementById('phaser-jobR').value,
        "phaserjobmesto": document.getElementById('phaser-job-mestoR').value,
        "phaserjophone": document.getElementById('phaser-job-phoneR').value,
        "phasermobile": document.getElementById('phaser-mobileR').value,
        "mothername": document.getElementById('mother-nameR').value,
        "motherjob": document.getElementById('mother-jobR').value,
        "motherjobmesto": document.getElementById('mother-job-mestoR').value,
        "motherjobphone": document.getElementById('mother-job-phoneR').value,
        "mothermobile": document.getElementById('mother-mobileR').value,
        "army": document.getElementById('armyR').innerText,
        "info": document.getElementById('infoR').value,
        "ball": bazaApplicants[app].ball
    });

    Object(__WEBPACK_IMPORTED_MODULE_1_fs__["writeFile"])('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'), err => {
        if (err) throw err;else {
            alert('Изменено');
            document.getElementById('readApplicant').style.display = "none";
            document.getElementById('showApplicant').style.display = "block";
        };
    });
};
window.iSpecRR = 0;
window.iLevelRR = 0;
window.iObchagaRR = 0;
window.imestomoneyRR = 0;
window.ilanguageRR = 0;
document.getElementById('specRR').onclick = () => {
    let select = document.getElementById('specRS');
    document.getElementById('specR').style.display = "none";
    select.style.display = "block";

    spec.forEach(function (e) {
        var opt = document.createElement('option');
        opt.innerText = e;
        select.appendChild(opt);
    });

    window.iSpecRR = 1;
};

document.getElementById('levelRR').onclick = () => {
    document.getElementById('levelR').style.display = "none";
    document.getElementById('levelRS').style.display = "block";

    window.iLevelRR = 1;
};

document.getElementById('obchagaRR').onclick = () => {
    document.getElementById('obchagaR').style.display = "none";
    document.getElementById('obchagaRS').style.display = "block";

    window.iObchagaRR = 1;
};

document.getElementById('mesto-moneyRR').onclick = () => {
    document.getElementById('mesto-moneyR').style.display = "none";
    document.getElementById('mesto-moneyRS').style.display = "block";

    window.imestomoneyRR = 1;
};

document.getElementById('languageRR').onclick = () => {
    document.getElementById('languageR').style.display = "none";
    document.getElementById('languageRS').style.display = "block";

    window.ilanguageRR = 1;
};

/***/ })

/******/ });
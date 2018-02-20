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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);



__WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].on('data', (event, arg) => {});
__WEBPACK_IMPORTED_MODULE_0_electron__["ipcRenderer"].send('applicant');

bazaApplicants = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_1_fs__["readFileSync"])('./src/data/applicant.json'));

var add = document.getElementById('add-applicant');

add.onclick = () => {
    let inputs = document.getElementsByClassName('input');
    console.log(inputs.length);

    let i = 0;

    for (var j = 0; j != inputs.length; j++) {
        if (inputs[j].value != "") {
            inputs[j].style.border = "";
            i++;
        } else {
            inputs[j].style.border = "1px solid red";
        }
    }
    if (i == inputs.length) {
        alert('Начало записи, ожидайте');

        bazaApplicants.push({
            "fio": document.getElementById('fio').value,
            "dataHappi": document.getElementById('data-happi').value,
            "placeofbirth": document.getElementById('place-of-birth').value,
            "citizenship": document.getElementById('citizenship').value,
            "document": document.getElementById('document').value,
            "seria": document.getElementById('seria').value,
            "number": document.getElementById('number').value,
            "issued": document.getElementById('issued').value,
            "regestrationofpassport": document.getElementById('regestration-of-passport').value,
            "adresnow": document.getElementById('adres-now').value,
            "index": document.getElementById('index').value,
            "callsot": document.getElementById('call-sot').value,
            "callhoum": document.getElementById('call-houm').value,
            "spec": document.getElementById('spec').value,
            "level": document.getElementById('level').value,
            "obchaga": document.getElementById('obchaga').value,
            "mestomoney": document.getElementById('mesto-money').value,
            "endshooldata": document.getElementById('end-shool-data').value,
            "nameshool": document.getElementById('name-shool').value,
            "seriyshool": document.getElementById('seriy-shool').value,
            "numbershool": document.getElementById('number-shool').value,
            "language": document.getElementById('language').value,
            "phasername": document.getElementById('phaser-name').value,
            "phaserjob": document.getElementById('phaser-job').value,
            "phaserjobmesto": document.getElementById('phaser-job-mesto').value,
            "phaserjophone": document.getElementById('phaser-job-phone').value,
            "phasermobile": document.getElementById('phaser-mobile').value,
            "mothername": document.getElementById('mother-name').value,
            "motherjob": document.getElementById('mother-job').value,
            "motherjobmesto": document.getElementById('mother-job-mesto').value,
            "motherjobphone": document.getElementById('mother-job-phone').value,
            "mothermobile": document.getElementById('mother-mobile').value,
            "army": document.getElementById('army').value,
            "info": document.getElementById('info').value
        });
        Object(__WEBPACK_IMPORTED_MODULE_1_fs__["writeFile"])('./src/data/applicant.json', JSON.stringify(bazaApplicants, null, '\t'), err => {
            if (err) throw err;else {
                alert('Успешно');
            };
        });
    } else {
        alert('Не все поля заполнены');
    }
};

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
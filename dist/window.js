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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(4);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_window_menu_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_window_menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_window_menu_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_electron___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_electron__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_fs__);




var newApplicantB = document.getElementsByClassName('buttons-navigation')[0];
var bazaApplicantsB = document.getElementsByClassName('buttons-navigation')[1];
var settingB = document.getElementsByClassName('buttons-navigation')[2];

var creatApplicant = document.getElementById('new-applicant');
var bazaApplicant = document.getElementById('bazaApplicant');
var setting = document.getElementById('setting');
var hello = document.getElementById('hello');
var applicant = document.getElementById('applicants');
var show = document.getElementById('modal-password');
var accept = document.getElementById('enter-password-modal');
var reset = document.getElementById('cog');

setTimeout(function () {
    hello.style.display = "none";
}, 100);

newApplicantB.onclick = () => {
    creatApplicant.style.display = 'inline-block';
    bazaApplicant.style.display = 'none';
    setting.style.display = 'none';

    var select = document.getElementById('spec');
    specArray.forEach(function (e, i) {
        var opt = document.createElement('option');
        opt.innerText = e;
        select.appendChild(opt);
    });
};

bazaApplicantsB.onclick = () => {
    show.style.display = 'block';
    accept.onclick = () => {
        var passwordModal = document.getElementById('password-modal').value;
        if (passwordModal == '1') {
            show.style.display = 'none';

            applicant.innerHTML = '';

            document.getElementById('namePoisk').onclick = () => {
                namePoisk();
            };

            creatApplicant.style.display = 'none';
            bazaApplicant.style.display = 'inline-block';
            setting.style.display = 'none';

            creatSpec();
        } else {
            alert('У вас нет прав на данный раздел');
        }
    };
};

settingB.onclick = () => {
    show.style.display = 'block';

    creatApplicant.style.display = 'none';
    bazaApplicant.style.display = 'none';
    setting.style.display = 'inline-block';
};

window.enterBlockSpec = () => {
    resetFile();
    let bazaApplicants = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_2_fs__["readFileSync"])('./src/data/applicant.json'));
    let nameSpec = document.getElementById(indexNumber).innerText.split(' ')[0];
    let massSpec = [];

    for (let i = 0; i != bazaApplicants.length; i++) {
        let numSpec = bazaApplicants[i].spec.split(' ')[0];
        if (numSpec == nameSpec) {
            massSpec.push(i);
        }
    }
    if (massSpec.length != 0) {
        applicant.innerHTML = "";

        backToSpec();

        for (let i = 0; i != massSpec.length; i++) {
            let lineApplcantToSpec = document.createElement('div');
            let spanFioToSpec = document.createElement('span');
            let yearToSpec = document.createElement('span');

            lineApplcantToSpec.onclick = function () {
                window.lineApplcantToSpecNumber = massSpec[i];
                clickToApplicantNumber();
                creatModalWindow();
            };

            lineApplcantToSpec.className = 'lineApplcant';
            spanFioToSpec.className = 'spanApplicansPoisk';
            yearToSpec.className = 'spanApplicansPoisk';

            spanFioToSpec.innerText = bazaApplicants[massSpec[i]].fio;
            yearToSpec.innerText = bazaApplicants[massSpec[i]].dataHappi;

            lineApplcantToSpec.appendChild(spanFioToSpec);
            lineApplcantToSpec.appendChild(yearToSpec);
            applicants.appendChild(lineApplcantToSpec);
        }
    } else {
        alert('По вашему запросу данных не найдено');
    }
};

var namePoisk = function () {
    resetFile();
    let key = 0;
    let indexApplicant = [];
    let name = document.getElementById('poiskNameIn').value.split(' ');
    bazaApplicants.forEach(function (e) {
        let applicant = e.fio.split(' ');
        let summ = 0;
        for (var i = 0; i != name.length; i++) {
            for (var j = 0; j != applicant.length; j++) {
                if (name[i].toLowerCase() == applicant[j].toLowerCase()) {
                    summ++;
                }
            }
        }
        if (summ == name.length) {
            indexApplicant.push(key);
        }
        key++;
    });
    if (indexApplicant.length != 0) {
        applicant.innerHTML = "";

        backToSpec();

        indexApplicant.forEach(function (e) {
            let lineApplcant = document.createElement('div');
            let fioB = document.createElement('span');
            let yearB = document.createElement('span');
            let specB = document.createElement('span');
            let br = document.createElement('br');

            lineApplcant.onclick = function () {
                window.lineApplcantToSpecNumber = e;
                creatModalWindow();
                clickToApplicantNumber();
            };

            lineApplcant.className = "lineApplcant";
            fioB.className = "spanApplicansPoisk";
            yearB.className = "spanApplicansPoisk";
            specB.className = "spanApplicansPoisk";

            fioB.innerText = bazaApplicants[e].fio;
            yearB.innerText = bazaApplicants[e].dataHappi;
            specB.innerText = bazaApplicants[e].spec;

            lineApplcant.appendChild(fioB);
            lineApplcant.appendChild(yearB);
            lineApplcant.appendChild(br);
            lineApplcant.appendChild(specB);

            applicants.appendChild(lineApplcant);
        });
    } else {
        alert('По вашему запросу данных не найдено');
    }
};

var creatSpec = function () {
    resetFile();
    applicant.innerHTML = "";
    specArray.forEach(function (e, i) {
        var block = document.createElement('div');
        var applicants = document.createElement('div');

        block.className = 'blockSpecka';
        block.innerText = e;
        block.id = i;
        block.onclick = function () {
            window.indexNumber = i;
            enterBlockSpec();
        };

        applicants.className = 'blockApplicantsShow';
        applicants.id = "ap" + i;

        block.appendChild(applicants);
        applicant.appendChild(block);
    });
};

var backToSpec = function () {
    resetFile();
    let backMenu = document.createElement('div');
    backMenu.innerText = "Вернуться в меню";
    backMenu.id = 'backMenu';
    backMenu.onclick = function () {
        creatSpec();
    };
    applicants.appendChild(backMenu);
};

var clickToApplicantNumber = function () {
    resetFile();
    document.getElementById("pause").style.display = "block";
    document.getElementById('window-menu').style.opacity = 0.2;

    let numApp = JSON.parse(Object(__WEBPACK_IMPORTED_MODULE_2_fs__["readFileSync"])('./src/data/login.json'));
    numApp.sp.splice(0, 1);
    numApp.sp.push({ "num": lineApplcantToSpecNumber });

    Object(__WEBPACK_IMPORTED_MODULE_2_fs__["writeFile"])('./src/data/login.json', JSON.stringify(numApp, null, '\t'));
    setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_1_electron__["ipcRenderer"].send('formToApplicant');
        document.getElementById("pause").style.display = "none";
        document.getElementById('window-menu').style.opacity = 1;
        creatModalWindow();
    }, 3000);
};

var creatModalWindow = function () {
    resetFile();
    document.getElementById('window-menu').style.opacity = 0.2;
    document.getElementById('modalResetWindow').style.display = "block";
};

reset.onclick = function () {
    resetFile();
    creatSpec();
    document.getElementById('window-menu').style.opacity = 1;
    document.getElementById('modalResetWindow').style.display = "none";
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./window-menu.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./window-menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n    width: 0px;\n}\n\n#window-menu {\n    width: 100%;\n    height: 100%;\n    background: lightskyblue;\n    display: none;\n    overflow: hidden;\n    z-index: 1;\n}\n\n#left-window-menu {\n    width: 10px;\n    height: 100%;\n    margin-top: 90px;\n    display: inline-block;\n}\n\n.central-window-menu {\n    width: 98%;\n    height: 100%;\n    margin: 10px auto;\n    display: inline-block;\n    float: right;\n    margin-top: 10px;\n    overflow: auto;\n}\n\n#left-window-menu:hover .buttons-navigation {\n    display: inline-block;\n}\n\n#spec {\n    width: 100%;\n    font-family: monospace;\n    font-size: 21px;\n}\n\n.menu {\n    display: none;\n    background: whitesmoke;\n    width: 98%;\n    border: 1px solid black;\n    overflow: scroll;\n    height: 90%;\n    border-radius: 5px;\n    padding: 10px;\n}\n\n.input-new-applicant {\n    display: block;\n    margin-top: 15px;\n}\n\n.input-new-applicant input {\n    width: 100%;\n    font-size: 21px;\n    font-family: monospace;\n}\n\n.input-new-applicant span {\n    font-size: 21px;\n    font-family: monospace;\n}\n\n#hello {\n    position: absolute;\n    background: whitesmoke;\n    width: 50%;\n    height: 120px;\n    text-align: center;\n    display: block;\n    margin: 20% 25%;\n    font-size: 26px;\n    border: 1px solid;\n    line-height: 50px;\n}\n\n.buttons-navigation {\n    width: 20px;\n    height: 160px;\n    display: none;\n    background: white;\n    cursor: pointer;\n    writing-mode: vertical-lr;\n    text-align: -webkit-center;\n    font-size: 21px;\n    border: 1px solid;\n    border-radius: 0 5px 5px 0;\n}\n\n.buttons-navigation:hover {\n    width: 60px;\n    line-height: 60px;\n    background: whitesmoke;\n    border: 2px solid;\n}\n\n#creatApplicant {\n    display: none;\n    background: white;\n    border: 1px solid;\n    overflow: auto;\n}\n\n.blockSpecka {\n    width: 100%;\n    margin: 15px auto;\n    background: mintcream;\n    border: 1px solid black;\n    font-size: 30px;\n    cursor: pointer;\n    border-radius: 5px;\n}\n\n.blockApplicantsShow {\n    width: 95%;\n    border-radius: 0 0 5px 5px;\n    border: 1px solid;\n    margin: 0 auto;\n    display: table-caption;\n}\n\n#sorted {\n    width: 100%;\n    margin-top: -10px;\n    height: 40px;\n    font-size: 21px;\n}\n\n#poiskNameIN {\n    width: 90.8%;\n    font-size: 21px;\n    margin-top: 5px;\n}\n\n#namePoisk {\n    width: 60px;\n    height: 30px;\n    border: 1px solid black;\n    border-radius: 5px;\n    background: grey;\n    opacity: 0.5;\n    display: inline-flex;\n    text-align: center;\n    cursor: pointer;\n}\n\n#add-applicant {\n    width: 80%;\n    height: 50px;\n    border: 1px solid;\n    background: lightgrey;\n    font-size: 30px;\n    text-align: center;\n    font-family: monospace;\n    margin: 20px auto 20px;\n    line-height: 50px;\n    cursor: pointer;\n}\n\n#modal-password {\n    display: none;\n    margin: 15% 35%;\n    position: fixed;\n    text-align: center;\n    font-size: 35px;\n    width: 500px;\n    height: 180px;\n    background: lightskyblue;\n    border-radius: 40px;\n    border: 15px solid gainsboro;\n    font-family: monospace;\n    z-index: 2;\n}\n\n#enter-password-modal {\n    width: 50%;\n    height: 50px;\n    border: 1px solid;\n    background: lightgrey;\n    margin: 35px auto;\n    cursor: pointer;\n}\n\n#password-modal {\n    width: 80%;\n    font-family: monospace;\n    font-size: 21px;\n}\n\n.lineApplcant {\n    width: 80%;\n    height: auto;\n    min-height: 50px;\n    text-align: center;\n    margin: 20px auto;\n    background: skyblue;\n    line-height: 50px;\n    font-size: 25px;\n    font-family: monospace;\n    border: 1px solid;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.spanApplicansPoisk {\n    margin: 20px;\n    color: black;\n}\n\n#backMenu {\n    width: 100%;\n    text-align: center;\n    font-family: monospace;\n    font-size: 20px;\n    height: 20px;\n    cursor: pointer;\n}\n.modalWindow{\n    width: 400px;\n    height: 130px;\n    background: lightblue;\n    font-size: 30px;\n    text-align: center;\n    border: 2px solid;\n    border-radius: 5px;\n    margin: 20% 35%;\n    position: fixed;\n    line-height: 70px;\n    font-family: monospace;\n    cursor: context-menu;\n    z-index: 2;\n    display: none;\n}\n.modalWindow1{\n    width: 400px;\n    height: 130px;\n    font-size: 30px;\n    text-align: center;\n    border-radius: 5px;\n    margin: 20% 35%;\n    position: fixed;\n    line-height: 70px;\n    font-family: monospace;\n    cursor: context-menu;\n    z-index: 2;\n    display: none;\n}\n.modalResetBlock:hover {\n    cursor: pointer;\n    -webkit-animation-name: cog;\n    -webkit-animation-duration: 5s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n   \n    animation-name: cog;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @-ms-keyframes cog {\n    from { -ms-transform: rotate(0deg); }\n    to { -ms-transform: rotate(360deg); }\n  }\n  @-moz-keyframes cog {\n    from { -moz-transform: rotate(0deg); }\n    to { -moz-transform: rotate(360deg); }\n  }\n  @-webkit-keyframes cog {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n  }\n  @keyframes cog {\n    from {\n      transform:rotate(0deg);\n    }\n    to {\n      transform:rotate(360deg);\n    }\n  }\n\n\n  .modalPauseWIndow {\n    cursor: pointer;\n    -webkit-animation-name: cof;\n    -webkit-animation-duration: 5s;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n   \n    animation-name: cof;\n    animation-duration: 5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n  @-ms-keyframes cof {\n    from { -ms-transform: rotate(0deg); }\n    to { -ms-transform: rotate(360deg); }\n  }\n  @-moz-keyframes cof {\n    from { -moz-transform: rotate(0deg); }\n    to { -moz-transform: rotate(360deg); }\n  }\n  @-webkit-keyframes cof {\n    from { -webkit-transform: rotate(0deg); }\n    to { -webkit-transform: rotate(360deg); }\n  }\n  @keyframes cof {\n    from {\n      transform:rotate(0deg);\n    }\n    to {\n      transform:rotate(360deg);\n    }\n  }", ""]);

// exports


/***/ })
/******/ ]);
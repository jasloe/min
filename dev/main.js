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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import "../sass/styles.scss";
// import MicroModal from "../../mode_modules/micromodal"
// MicroModal.init();
// import barba from "../../node_modules/@barba/core"
// import barbaCss from "../../node_modules/@barba/css"
// barba.use(barbaCss);
// // ES* test
// if (true) {
//   let meowBus = 40;
//   console.log(meowBus); //40
// }
// barba.init({
//   transitions: [{
//     name: 'dummy-transition',
//     from: 'home',
//     to: {
//       namespace: [
//         'exhibitions'
//       ]
//     },
//     sync: true,
//     enter() {
//     }
//   }]
// });
// import "intersection-observer";
// import scrollama from "scrollama";
// // instantiate the scrollama
// const scroller = scrollama();
// // setup the instance, pass callback functions
// scroller
//   .setup({
//     step: ".step"
//   })
//   .onStepEnter(response => {
//     // { element, index, direction }
//   })
//   .onStepExit(response => {
//     // { element, index, direction }
//   });
// setup resize event
// window.addEventListener("resize", scroller.resize);
// let el = document.getElementsByClassName('artwork-images');
// console.log(el);
// imagesLoaded(document.body, function () {
//   var img = document.querySelector("img");
//   console.log(img.width);
//   console.log(img.naturalWidth);
// });
//  function imagesLoaded () {
//   var img = document.querySelector("img");
//   console.log(img.width);
//   console.log(img.naturalWidth);
// };
// elem.classList.add("testing");
// // elem.style.paddingTop = '121.43%';
// let listP = document.querySelectorAll(".artwork-images")
// console.log(listP);
// let j;
// for (j = 0; j < listP.length; j++) {
//   listP[j].classList.add('test' + j);
// }
// var person = { fname: "John", lname: "Doe", age: 25 };
// var text = "";
// var x;
// for (x in person) {
//   text += person[x] + " ";
// }
// var elem = document.getElementsByTagName("img")[0];
//   console.log(elem);
//   function imgSize() {
//   var realWidth = elem.naturalWidth;
//   var realHeight = elem.naturalHeight;
//   console.log("Original width=" + realWidth + ", " + "Original height=" + realHeight);
// }
// imgSize();

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/scss/main.scss ./src/js/main.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/scss/main.scss */"./src/scss/main.scss");
module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map
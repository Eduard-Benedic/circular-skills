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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/images/html.png":
/*!*****************************!*\
  !*** ./src/images/html.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3a2b65e46569219791c63d6dd8143317.png");

/***/ }),

/***/ "./src/images/javascript.png":
/*!***********************************!*\
  !*** ./src/images/javascript.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0c81494e17d4497ccea72923c7d28d2e.png");

/***/ }),

/***/ "./src/images/jquery.png":
/*!*******************************!*\
  !*** ./src/images/jquery.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79480bab2e6bb6ea95e0dcfa378d6cf7.png");

/***/ }),

/***/ "./src/images/modx.png":
/*!*****************************!*\
  !*** ./src/images/modx.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bdd3a2fd075d028ddf46b071b2625bcc.png");

/***/ }),

/***/ "./src/images/vue.png":
/*!****************************!*\
  !*** ./src/images/vue.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "082ed98aa9ab3e57f55a27a96f1f7dac.png");

/***/ }),

/***/ "./src/images/webpack.png":
/*!********************************!*\
  !*** ./src/images/webpack.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ed8822e2b50e4fe383be9b456255d9c6.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_html_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/html.png */ "./src/images/html.png");
/* harmony import */ var _images_javascript_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/javascript.png */ "./src/images/javascript.png");
/* harmony import */ var _images_jquery_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/jquery.png */ "./src/images/jquery.png");
/* harmony import */ var _images_modx_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/modx.png */ "./src/images/modx.png");
/* harmony import */ var _images_vue_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/vue.png */ "./src/images/vue.png");
/* harmony import */ var _images_webpack_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/webpack.png */ "./src/images/webpack.png");






var technologies = [_images_html_png__WEBPACK_IMPORTED_MODULE_0__["default"], _images_jquery_png__WEBPACK_IMPORTED_MODULE_2__["default"], _images_javascript_png__WEBPACK_IMPORTED_MODULE_1__["default"], _images_modx_png__WEBPACK_IMPORTED_MODULE_3__["default"], _images_vue_png__WEBPACK_IMPORTED_MODULE_4__["default"], _images_webpack_png__WEBPACK_IMPORTED_MODULE_5__["default"]]; // var technologies = ['html5', 'jquery', 'javascript', 'modx', 'vue', 'webpack'];

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;

for (var i = 0; i < technologies.length; i++) {
  (function (j) {
    var imgObj = new Image();
    imgObj.src = technologies[i];
    imgObj.addEventListener('load', function () {
      var coordinates = {
        x: canvas.width / 6 * j,
        y: canvas.height / 2 - 150
      };
      c.drawImage(imgObj, coordinates.x, coordinates.y, 150, 150);
      var imgPosition = {
        x: imgObj.offsetLeft + imgObj.width / 2,
        y: imgObj.offsetTop + imgObj.height / 2
      };
    }, false);
  })(i);
}

function scalePreserveAspectRatio(imgW, imgH, maxW, maxH) {
  return Math.min(maxW / imgW, maxH / imgH);
} // // ===================== UTILITIES COLORS ===========================
// function intRange(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function randomColor(palette) {
//   return palette[Math.ceil(Math.random() * palette.length)]
// }
// // =============== COLOR PALETTE
// const autumnPalette = ['#F28705', '#D96704', '#A63F03', '#8C1C03', '#590202'];
// function Circle(x, y, radius, color) {
//   this.x = x;
//   this.y = y;
//   this.radius = radius;
//   this.color = color;
//   this.speed = 0.05;
//   this.radians = Math.random() * Math.PI * 2;
//   var distanceTo = intRange(70, 140);
//   this.distanceToCenter = {
//     x: distanceTo,
//     get y() {
//       return this.x
//     }
//   }
// }
// Circle.prototype.draw = function (lastPoint) {
//   c.beginPath();
//   c.lineWidth = this.radius;
//   c.strokeStyle = this.color;
//   c.moveTo(lastPoint.x, lastPoint.y);
//   c.lineTo(this.x, this.y)
//   c.stroke();
//   c.closePath();
// }
// Circle.prototype.update = function () {
//   const lastPoint = { x: this.x, y: this.y }
//   this.radians += this.speed;
//   this.x = window.innerWidth / 2 + Math.cos(this.radians) * this.distanceToCenter.x;
//   this.y = window.innerHeight / 2 + Math.sin(this.radians) * this.distanceToCenter.y;
//   this.draw(lastPoint);
// }
// let circles = []
// for (let i = 0; i < 10; i++) {
//   const radius = (Math.random() * 3) + 1;
//   const color = randomColor(autumnPalette);
//   circles.push(new Circle(canvas.width / 2, canvas.height / 2, radius, color));
// }
// function animate() {
//   requestAnimationFrame(animate);
//   c.fillStyle = 'rgba(255,255,255,0.08)';
//   c.fillRect(0, 0, canvas.width, canvas.height);
//   circles.forEach(circle => {
//     circle.update();
//   })
// }
// animate()

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "143f72df2e26f34d5a5ce142d9667679.png");

/***/ }),

/***/ "./src/images/javascript.png":
/*!***********************************!*\
  !*** ./src/images/javascript.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5512aaafd78d6bc0b6208c7de389aa8.png");

/***/ }),

/***/ "./src/images/jquery.png":
/*!*******************************!*\
  !*** ./src/images/jquery.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9eaafbe597390994088cc8e2b2835c3d.png");

/***/ }),

/***/ "./src/images/modx.png":
/*!*****************************!*\
  !*** ./src/images/modx.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7309c4089a7497db446a86fac36e3004.png");

/***/ }),

/***/ "./src/images/vue.png":
/*!****************************!*\
  !*** ./src/images/vue.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5d14a37bec74b49bfb62d857814088cc.png");

/***/ }),

/***/ "./src/images/webpack.png":
/*!********************************!*\
  !*** ./src/images/webpack.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d173ede0c9d3b950142673c716c55280.png");

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






var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight; // =============== COLOR PALETTE =============

var autumnPalette = ['#F28705', '#D96704', '#A63F03', '#8C1C03', '#590202', '#3391A6', '#25594A', '#3FA663', '#2D7345', '#2D7345', '#F2CA50', '#D98E04'];
var technologies = [_images_html_png__WEBPACK_IMPORTED_MODULE_0__["default"], _images_jquery_png__WEBPACK_IMPORTED_MODULE_2__["default"], _images_javascript_png__WEBPACK_IMPORTED_MODULE_1__["default"], _images_modx_png__WEBPACK_IMPORTED_MODULE_3__["default"], _images_vue_png__WEBPACK_IMPORTED_MODULE_4__["default"], _images_webpack_png__WEBPACK_IMPORTED_MODULE_5__["default"]]; // ===================== UTILITIES COLORS ===========================

function intRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(palette) {
  return palette[Math.ceil(Math.random() * palette.length)];
}

var loaded = false;

for (var i = 0; i < technologies.length; i++) {
  (function (j) {
    var imgObj = new Image();
    imgObj.src = technologies[i];
    imgObj.addEventListener('load', function () {
      imgObj.classList.add("img".concat(j));
      document.querySelector('.grid-img').appendChild(imgObj);
      var getPosition = imgObj.getBoundingClientRect();
      var topImg = getPosition.top;
      var leftImg = getPosition.left;
      console.log({
        topImg: topImg,
        leftImg: leftImg
      });
      var circles = [];

      for (var i = 0; i < 25; i++) {
        var radius = Math.random() * 3 + 1;
        var color = randomColor(autumnPalette);
        circles.push(new Circle(leftImg + imgObj.clientWidth / 2, topImg + imgObj.clientHeight / 2, radius, color));
      }

      var animate = function animate() {
        requestAnimationFrame(animate);
        c.fillStyle = 'rgba(255,255,255,0.09)';
        c.fillRect(0, 0, canvas.width, canvas.height);
        circles.forEach(function (circle) {
          circle.update();
        });
      };

      animate();
    }, false);
  })(i);
}

function Circle(x, y, radius, color) {
  this.radius = radius;
  this.color = color;
  this.speed = 0.01;
  this.distanceFromCenter = intRange(50, 120);
  this.x = x;
  this.y = y;
  this.radians = Math.random() * Math.PI * 2;
  this.lastPoint = {
    x: this.x,
    y: this.y
  };
}

Circle.prototype.draw = function (lastPoint) {
  c.beginPath();
  c.lineWidth = this.radius * 1.3;
  c.strokeStyle = this.color;
  c.moveTo(lastPoint.x, lastPoint.y);
  c.lineTo(this.x, this.y);
  c.stroke();
  c.closePath();
};

Circle.prototype.update = function () {
  var lastPoint = {
    x: this.x,
    y: this.y
  };
  this.radians += this.speed;
  this.x = this.lastPoint.x + Math.cos(this.radians) * this.distanceFromCenter;
  this.y = this.lastPoint.y + Math.sin(this.radians) * this.distanceFromCenter;
  this.draw(lastPoint);
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map
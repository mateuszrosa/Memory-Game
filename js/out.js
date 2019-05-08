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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet firstCard, secondCard;\n\nconst flipCard = function() {\n    this.classList.add('flip');\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    hasFlippedCard = false;\n\n    checkForPair();\n};\n\nconst checkForPair = () => {\n    let isMatch = firstCard.dataset.name === secondCard.dataset.name;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    console.log('disable');\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n};\n\nconst unFlipCards = () => {\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        console.log('unflip');\n    }, 1500)\n};\n\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcblxuY29uc3QgZmxpcENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcbiAgICBpZiAoIWhhc0ZsaXBwZWRDYXJkKSB7XG4gICAgICAgIGhhc0ZsaXBwZWRDYXJkID0gdHJ1ZTtcbiAgICAgICAgZmlyc3RDYXJkID0gdGhpcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc2Vjb25kQ2FyZCA9IHRoaXM7XG4gICAgaGFzRmxpcHBlZENhcmQgPSBmYWxzZTtcblxuICAgIGNoZWNrRm9yUGFpcigpO1xufTtcblxuY29uc3QgY2hlY2tGb3JQYWlyID0gKCkgPT4ge1xuICAgIGxldCBpc01hdGNoID0gZmlyc3RDYXJkLmRhdGFzZXQubmFtZSA9PT0gc2Vjb25kQ2FyZC5kYXRhc2V0Lm5hbWU7XG4gICAgaXNNYXRjaCA/IGV4Y2x1ZGVDYXJkcygpIDogdW5GbGlwQ2FyZHMoKTtcbn07XG5cbmNvbnN0IGV4Y2x1ZGVDYXJkcyA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGlzYWJsZScpO1xuICAgIGZpcnN0Q2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICBzZWNvbmRDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xufTtcblxuY29uc3QgdW5GbGlwQ2FyZHMgPSAoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcnN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHNlY29uZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICBjb25zb2xlLmxvZygndW5mbGlwJyk7XG4gICAgfSwgMTUwMClcbn07XG5cbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
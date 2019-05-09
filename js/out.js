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

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\n\nconst flipCard = function() {\n    if (lockBoard) return;\n    if (this === firstCard) return;\n    this.classList.add('flip');\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    hasFlippedCard = false;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        lockBoard = false;\n    }, 1500)\n};\n\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpO1xubGV0IGhhc0ZsaXBwZWRDYXJkID0gZmFsc2U7XG5sZXQgbG9ja0JvYXJkID0gZmFsc2U7XG5sZXQgZmlyc3RDYXJkLCBzZWNvbmRDYXJkO1xuXG5jb25zdCBmbGlwQ2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2NrQm9hcmQpIHJldHVybjtcbiAgICBpZiAodGhpcyA9PT0gZmlyc3RDYXJkKSByZXR1cm47XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XG4gICAgaWYgKCFoYXNGbGlwcGVkQ2FyZCkge1xuICAgICAgICBoYXNGbGlwcGVkQ2FyZCA9IHRydWU7XG4gICAgICAgIGZpcnN0Q2FyZCA9IHRoaXM7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHNlY29uZENhcmQgPSB0aGlzO1xuICAgIGhhc0ZsaXBwZWRDYXJkID0gZmFsc2U7XG4gICAgY2hlY2tGb3JQYWlyKCk7XG59O1xuXG5jb25zdCBjaGVja0ZvclBhaXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaXNNYXRjaCA9IGZpcnN0Q2FyZC5kYXRhc2V0LnR5cGUgPT09IHNlY29uZENhcmQuZGF0YXNldC50eXBlO1xuICAgIGlzTWF0Y2ggPyBleGNsdWRlQ2FyZHMoKSA6IHVuRmxpcENhcmRzKCk7XG59O1xuXG5jb25zdCBleGNsdWRlQ2FyZHMgPSAoKSA9PiB7XG4gICAgZmlyc3RDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIHNlY29uZENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG59O1xuXG5jb25zdCB1bkZsaXBDYXJkcyA9ICgpID0+IHtcbiAgICBsb2NrQm9hcmQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJzdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICBzZWNvbmRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgbG9ja0JvYXJkID0gZmFsc2U7XG4gICAgfSwgMTUwMClcbn07XG5cbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
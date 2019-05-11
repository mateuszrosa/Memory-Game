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

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = false;\nconst h1 = document.querySelector('h1');\nlet startTime = 0;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        startTime = new Date();\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        endTime = new Date();\n        let time = Math.round(endTime - startTime);\n        time /= 1000;\n        h1.innerHTML = `Your time: <span>${Math.round(time)} seconds</span>`;\n    }\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlCQUFpQjtBQUM1RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGxvY2tCb2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcbmxldCBjaGVjayA9IDA7XG5sZXQgc3RhcnQgPSBmYWxzZTtcbmNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbmxldCBzdGFydFRpbWUgPSAwO1xuXG5jb25zdCBmbGlwQ2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN0YXJ0Kys7XG4gICAgaWYgKHN0YXJ0ID09PSAxKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBpZiAobG9ja0JvYXJkKSByZXR1cm47XG4gICAgaWYgKHRoaXMgPT09IGZpcnN0Q2FyZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XG5cbiAgICBpZiAoIWhhc0ZsaXBwZWRDYXJkKSB7XG4gICAgICAgIGhhc0ZsaXBwZWRDYXJkID0gdHJ1ZTtcbiAgICAgICAgZmlyc3RDYXJkID0gdGhpcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc2Vjb25kQ2FyZCA9IHRoaXM7XG4gICAgY2hlY2tGb3JQYWlyKCk7XG59O1xuXG5jb25zdCBjaGVja0ZvclBhaXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaXNNYXRjaCA9IGZpcnN0Q2FyZC5kYXRhc2V0LnR5cGUgPT09IHNlY29uZENhcmQuZGF0YXNldC50eXBlO1xuICAgIGlzTWF0Y2ggPyBleGNsdWRlQ2FyZHMoKSA6IHVuRmxpcENhcmRzKCk7XG59O1xuXG5jb25zdCBleGNsdWRlQ2FyZHMgPSAoKSA9PiB7XG4gICAgZmlyc3RDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIHNlY29uZENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgY2hlY2srKztcbiAgICByZXNldEJvYXJkKCk7XG4gICAgaWYgKGNoZWNrID09PSBjYXJkcy5sZW5ndGggLyAyKSB7XG4gICAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoZW5kVGltZSAtIHN0YXJ0VGltZSk7XG4gICAgICAgIHRpbWUgLz0gMTAwMDtcbiAgICAgICAgaDEuaW5uZXJIVE1MID0gYFlvdXIgdGltZTogPHNwYW4+JHtNYXRoLnJvdW5kKHRpbWUpfSBzZWNvbmRzPC9zcGFuPmA7XG4gICAgfVxufTtcblxuY29uc3QgdW5GbGlwQ2FyZHMgPSAoKSA9PiB7XG4gICAgbG9ja0JvYXJkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyc3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgc2Vjb25kQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICB9LCAxNTAwKVxufTtcblxuY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBbaGFzRmxpcHBlZENhcmQsIGxvY2tCb2FyZF0gPSBbZmFsc2UsIGZhbHNlXTtcbiAgICBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IFtudWxsLCBudWxsXTtcbn1cblxuY29uc3Qgc2h1ZmZsZUNhcmRzID0gKCkgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGxldCBzaHVmZmxlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpO1xuICAgICAgICBjYXJkLnN0eWxlLm9yZGVyID0gc2h1ZmZsZTtcbiAgICB9KVxufVxuXG5zaHVmZmxlQ2FyZHMoKTtcbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
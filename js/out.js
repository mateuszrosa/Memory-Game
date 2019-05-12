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

eval("const cards = document.querySelectorAll('.game-card');\nconst h1 = document.querySelector('h1');\nconst btn = document.querySelector('button');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = 0;\nlet startTime = 0;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        startTime = new Date();\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        getTime();\n        btn.style.display = \"block\";\n        check = 0;\n        start = 0;\n    }\n\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nconst getTime = () => {\n    endTime = new Date();\n    let time = Math.round(endTime - startTime);\n    time /= 1000;\n    h1.innerHTML = `Your time: <span>${Math.round(time)} seconds</span>`;\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});\n\nbtn.addEventListener('click', () => {\n    shuffleCards();\n    btn.style.display = 'none';\n    cards.forEach(card => {\n        card.classList.remove('flip');\n    });\n    h1.innerHTML = \"\";\n    cards.forEach(card => {\n        card.addEventListener('click', flipCard);\n    });\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xubGV0IGhhc0ZsaXBwZWRDYXJkID0gZmFsc2U7XG5sZXQgbG9ja0JvYXJkID0gZmFsc2U7XG5sZXQgZmlyc3RDYXJkLCBzZWNvbmRDYXJkO1xubGV0IGNoZWNrID0gMDtcbmxldCBzdGFydCA9IDA7XG5sZXQgc3RhcnRUaW1lID0gMDtcblxuY29uc3QgZmxpcENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICBzdGFydCsrO1xuICAgIGlmIChzdGFydCA9PT0gMSkge1xuICAgICAgICBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIH07XG4gICAgaWYgKGxvY2tCb2FyZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzID09PSBmaXJzdENhcmQpIHJldHVybjtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuXG4gICAgaWYgKCFoYXNGbGlwcGVkQ2FyZCkge1xuICAgICAgICBoYXNGbGlwcGVkQ2FyZCA9IHRydWU7XG4gICAgICAgIGZpcnN0Q2FyZCA9IHRoaXM7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHNlY29uZENhcmQgPSB0aGlzO1xuICAgIGNoZWNrRm9yUGFpcigpO1xufTtcblxuY29uc3QgY2hlY2tGb3JQYWlyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlzTWF0Y2ggPSBmaXJzdENhcmQuZGF0YXNldC50eXBlID09PSBzZWNvbmRDYXJkLmRhdGFzZXQudHlwZTtcbiAgICBpc01hdGNoID8gZXhjbHVkZUNhcmRzKCkgOiB1bkZsaXBDYXJkcygpO1xufTtcblxuY29uc3QgZXhjbHVkZUNhcmRzID0gKCkgPT4ge1xuICAgIGZpcnN0Q2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICBzZWNvbmRDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIGNoZWNrKys7XG4gICAgcmVzZXRCb2FyZCgpO1xuICAgIGlmIChjaGVjayA9PT0gY2FyZHMubGVuZ3RoIC8gMikge1xuICAgICAgICBnZXRUaW1lKCk7XG4gICAgICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBjaGVjayA9IDA7XG4gICAgICAgIHN0YXJ0ID0gMDtcbiAgICB9XG5cbn07XG5cbmNvbnN0IHVuRmxpcENhcmRzID0gKCkgPT4ge1xuICAgIGxvY2tCb2FyZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcnN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHNlY29uZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICByZXNldEJvYXJkKCk7XG4gICAgfSwgMTUwMClcbn07XG5cbmNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgW2hhc0ZsaXBwZWRDYXJkLCBsb2NrQm9hcmRdID0gW2ZhbHNlLCBmYWxzZV07XG4gICAgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSBbbnVsbCwgbnVsbF07XG59XG5cbmNvbnN0IHNodWZmbGVDYXJkcyA9ICgpID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBsZXQgc2h1ZmZsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKTtcbiAgICAgICAgY2FyZC5zdHlsZS5vcmRlciA9IHNodWZmbGU7XG4gICAgfSlcbn1cblxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcbiAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoZW5kVGltZSAtIHN0YXJ0VGltZSk7XG4gICAgdGltZSAvPSAxMDAwO1xuICAgIGgxLmlubmVySFRNTCA9IGBZb3VyIHRpbWU6IDxzcGFuPiR7TWF0aC5yb3VuZCh0aW1lKX0gc2Vjb25kczwvc3Bhbj5gO1xufVxuXG5zaHVmZmxlQ2FyZHMoKTtcbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc2h1ZmZsZUNhcmRzKCk7XG4gICAgYnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgfSk7XG4gICAgaDEuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIH0pO1xufSlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
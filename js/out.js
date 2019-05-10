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

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nconst h1 = document.querySelector('h1');\n\nconst flipCard = function() {\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        h1.textContent = \"You win!\";\n    }\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGxvY2tCb2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcbmxldCBjaGVjayA9IDA7XG5jb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5cbmNvbnN0IGZsaXBDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGxvY2tCb2FyZCkgcmV0dXJuO1xuICAgIGlmICh0aGlzID09PSBmaXJzdENhcmQpIHJldHVybjtcblxuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xuXG4gICAgaWYgKCFoYXNGbGlwcGVkQ2FyZCkge1xuICAgICAgICBoYXNGbGlwcGVkQ2FyZCA9IHRydWU7XG4gICAgICAgIGZpcnN0Q2FyZCA9IHRoaXM7XG4gICAgICAgIHJldHVybjtcbiAgICB9O1xuICAgIHNlY29uZENhcmQgPSB0aGlzO1xuICAgIGNoZWNrRm9yUGFpcigpO1xufTtcblxuY29uc3QgY2hlY2tGb3JQYWlyID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGlzTWF0Y2ggPSBmaXJzdENhcmQuZGF0YXNldC50eXBlID09PSBzZWNvbmRDYXJkLmRhdGFzZXQudHlwZTtcbiAgICBpc01hdGNoID8gZXhjbHVkZUNhcmRzKCkgOiB1bkZsaXBDYXJkcygpO1xufTtcblxuY29uc3QgZXhjbHVkZUNhcmRzID0gKCkgPT4ge1xuICAgIGZpcnN0Q2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICBzZWNvbmRDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIGNoZWNrKys7XG4gICAgcmVzZXRCb2FyZCgpO1xuICAgIGlmIChjaGVjayA9PT0gY2FyZHMubGVuZ3RoIC8gMikge1xuICAgICAgICBoMS50ZXh0Q29udGVudCA9IFwiWW91IHdpbiFcIjtcbiAgICB9XG59O1xuXG5jb25zdCB1bkZsaXBDYXJkcyA9ICgpID0+IHtcbiAgICBsb2NrQm9hcmQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJzdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICBzZWNvbmRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgcmVzZXRCb2FyZCgpO1xuICAgIH0sIDE1MDApXG59O1xuXG5jb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIFtoYXNGbGlwcGVkQ2FyZCwgbG9ja0JvYXJkXSA9IFtmYWxzZSwgZmFsc2VdO1xuICAgIFtmaXJzdENhcmQsIHNlY29uZENhcmRdID0gW251bGwsIG51bGxdO1xufVxuXG5jb25zdCBzaHVmZmxlQ2FyZHMgPSAoKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgbGV0IHNodWZmbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMik7XG4gICAgICAgIGNhcmQuc3R5bGUub3JkZXIgPSBzaHVmZmxlO1xuICAgIH0pXG59XG5cbnNodWZmbGVDYXJkcygpO1xuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
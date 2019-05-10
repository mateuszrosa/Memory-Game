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

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = false;\nconst h1 = document.querySelector('h1');\nlet startTime = 0;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        startTime = new Date();\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        endTime = new Date();\n        let time = Math.round(endTime - startTime);\n        time /= 1000;\n        h1.textContent = `Your time: ${Math.round(time)} seconds`;\n    }\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlCQUFpQjtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGxvY2tCb2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcbmxldCBjaGVjayA9IDA7XG5sZXQgc3RhcnQgPSBmYWxzZTtcbmNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbmxldCBzdGFydFRpbWUgPSAwO1xuXG5jb25zdCBmbGlwQ2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN0YXJ0Kys7XG4gICAgaWYgKHN0YXJ0ID09PSAxKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBpZiAobG9ja0JvYXJkKSByZXR1cm47XG4gICAgaWYgKHRoaXMgPT09IGZpcnN0Q2FyZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XG5cbiAgICBpZiAoIWhhc0ZsaXBwZWRDYXJkKSB7XG4gICAgICAgIGhhc0ZsaXBwZWRDYXJkID0gdHJ1ZTtcbiAgICAgICAgZmlyc3RDYXJkID0gdGhpcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc2Vjb25kQ2FyZCA9IHRoaXM7XG4gICAgY2hlY2tGb3JQYWlyKCk7XG59O1xuXG5jb25zdCBjaGVja0ZvclBhaXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaXNNYXRjaCA9IGZpcnN0Q2FyZC5kYXRhc2V0LnR5cGUgPT09IHNlY29uZENhcmQuZGF0YXNldC50eXBlO1xuICAgIGlzTWF0Y2ggPyBleGNsdWRlQ2FyZHMoKSA6IHVuRmxpcENhcmRzKCk7XG59O1xuXG5jb25zdCBleGNsdWRlQ2FyZHMgPSAoKSA9PiB7XG4gICAgZmlyc3RDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIHNlY29uZENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgY2hlY2srKztcbiAgICByZXNldEJvYXJkKCk7XG4gICAgaWYgKGNoZWNrID09PSBjYXJkcy5sZW5ndGggLyAyKSB7XG4gICAgICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBsZXQgdGltZSA9IE1hdGgucm91bmQoZW5kVGltZSAtIHN0YXJ0VGltZSk7XG4gICAgICAgIHRpbWUgLz0gMTAwMDtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSBgWW91ciB0aW1lOiAke01hdGgucm91bmQodGltZSl9IHNlY29uZHNgO1xuICAgIH1cbn07XG5cbmNvbnN0IHVuRmxpcENhcmRzID0gKCkgPT4ge1xuICAgIGxvY2tCb2FyZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcnN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHNlY29uZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICByZXNldEJvYXJkKCk7XG4gICAgfSwgMTUwMClcbn07XG5cbmNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgW2hhc0ZsaXBwZWRDYXJkLCBsb2NrQm9hcmRdID0gW2ZhbHNlLCBmYWxzZV07XG4gICAgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSBbbnVsbCwgbnVsbF07XG59XG5cbmNvbnN0IHNodWZmbGVDYXJkcyA9ICgpID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBsZXQgc2h1ZmZsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKTtcbiAgICAgICAgY2FyZC5zdHlsZS5vcmRlciA9IHNodWZmbGU7XG4gICAgfSlcbn1cblxuc2h1ZmZsZUNhcmRzKCk7XG5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
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

eval("const cards = document.querySelectorAll('.game-card');\nconst h1 = document.querySelector('h1');\nconst btn = document.querySelector('button');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = false;\nlet startTime = 0;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        startTime = new Date();\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        getTime();\n        btn.style.display = \"block\";\n    }\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nconst getTime = () => {\n    endTime = new Date();\n    let time = Math.round(endTime - startTime);\n    time /= 1000;\n    h1.innerHTML = `Your time: <span>${Math.round(time)} seconds</span>`;\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});\n\nbtn.addEventListener('click', () => {\n    shuffleCards();\n    btn.style.display = 'none';\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsaUJBQWlCO0FBQ3hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1jYXJkJyk7XG5jb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGxvY2tCb2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcbmxldCBjaGVjayA9IDA7XG5sZXQgc3RhcnQgPSBmYWxzZTtcbmxldCBzdGFydFRpbWUgPSAwO1xuXG5jb25zdCBmbGlwQ2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHN0YXJ0Kys7XG4gICAgaWYgKHN0YXJ0ID09PSAxKSB7XG4gICAgICAgIHN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgfTtcbiAgICBpZiAobG9ja0JvYXJkKSByZXR1cm47XG4gICAgaWYgKHRoaXMgPT09IGZpcnN0Q2FyZCkgcmV0dXJuO1xuXG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XG5cbiAgICBpZiAoIWhhc0ZsaXBwZWRDYXJkKSB7XG4gICAgICAgIGhhc0ZsaXBwZWRDYXJkID0gdHJ1ZTtcbiAgICAgICAgZmlyc3RDYXJkID0gdGhpcztcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG4gICAgc2Vjb25kQ2FyZCA9IHRoaXM7XG4gICAgY2hlY2tGb3JQYWlyKCk7XG59O1xuXG5jb25zdCBjaGVja0ZvclBhaXIgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgaXNNYXRjaCA9IGZpcnN0Q2FyZC5kYXRhc2V0LnR5cGUgPT09IHNlY29uZENhcmQuZGF0YXNldC50eXBlO1xuICAgIGlzTWF0Y2ggPyBleGNsdWRlQ2FyZHMoKSA6IHVuRmxpcENhcmRzKCk7XG59O1xuXG5jb25zdCBleGNsdWRlQ2FyZHMgPSAoKSA9PiB7XG4gICAgZmlyc3RDYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xuICAgIHNlY29uZENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgY2hlY2srKztcbiAgICByZXNldEJvYXJkKCk7XG4gICAgaWYgKGNoZWNrID09PSBjYXJkcy5sZW5ndGggLyAyKSB7XG4gICAgICAgIGdldFRpbWUoKTtcbiAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxufTtcblxuY29uc3QgdW5GbGlwQ2FyZHMgPSAoKSA9PiB7XG4gICAgbG9ja0JvYXJkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyc3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgc2Vjb25kQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICB9LCAxNTAwKVxufTtcblxuY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBbaGFzRmxpcHBlZENhcmQsIGxvY2tCb2FyZF0gPSBbZmFsc2UsIGZhbHNlXTtcbiAgICBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IFtudWxsLCBudWxsXTtcbn1cblxuY29uc3Qgc2h1ZmZsZUNhcmRzID0gKCkgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGxldCBzaHVmZmxlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpO1xuICAgICAgICBjYXJkLnN0eWxlLm9yZGVyID0gc2h1ZmZsZTtcbiAgICB9KVxufVxuXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aW1lID0gTWF0aC5yb3VuZChlbmRUaW1lIC0gc3RhcnRUaW1lKTtcbiAgICB0aW1lIC89IDEwMDA7XG4gICAgaDEuaW5uZXJIVE1MID0gYFlvdXIgdGltZTogPHNwYW4+JHtNYXRoLnJvdW5kKHRpbWUpfSBzZWNvbmRzPC9zcGFuPmA7XG59XG5cbnNodWZmbGVDYXJkcygpO1xuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcENhcmQpO1xufSk7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaHVmZmxlQ2FyZHMoKTtcbiAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
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

eval("const cards = document.querySelectorAll('.game-card');\nconst h1 = document.querySelector('h1');\nconst btn = document.querySelector('button');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = 0;\nlet startTime = 0;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        startTime = new Date();\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        getTime();\n        btn.style.display = \"block\";\n        check = 0;\n        start = 0;\n    }\n\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nconst getTime = () => {\n    endTime = new Date();\n    let time = Math.round(endTime - startTime);\n    time /= 1000;\n    h1.innerHTML = `Your time: <span>${Math.round(time)} seconds</span>`;\n}\n\nconst resetGame = () => {\n    shuffleCards();\n    btn.style.display = 'none';\n    cards.forEach(card => {\n        card.classList.remove('flip');\n    });\n    h1.innerHTML = \"\";\n    cards.forEach(card => {\n        card.addEventListener('click', flipCard);\n    });\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});\n\nbtn.addEventListener('click', resetGame);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxpQkFBaUI7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZS1jYXJkJyk7XG5jb25zdCBoMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gxJyk7XG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbmxldCBoYXNGbGlwcGVkQ2FyZCA9IGZhbHNlO1xubGV0IGxvY2tCb2FyZCA9IGZhbHNlO1xubGV0IGZpcnN0Q2FyZCwgc2Vjb25kQ2FyZDtcbmxldCBjaGVjayA9IDA7XG5sZXQgc3RhcnQgPSAwO1xubGV0IHN0YXJ0VGltZSA9IDA7XG5cbmNvbnN0IGZsaXBDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgc3RhcnQrKztcbiAgICBpZiAoc3RhcnQgPT09IDEpIHtcbiAgICAgICAgc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9O1xuICAgIGlmIChsb2NrQm9hcmQpIHJldHVybjtcbiAgICBpZiAodGhpcyA9PT0gZmlyc3RDYXJkKSByZXR1cm47XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcblxuICAgIGlmICghaGFzRmxpcHBlZENhcmQpIHtcbiAgICAgICAgaGFzRmxpcHBlZENhcmQgPSB0cnVlO1xuICAgICAgICBmaXJzdENhcmQgPSB0aGlzO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBzZWNvbmRDYXJkID0gdGhpcztcbiAgICBjaGVja0ZvclBhaXIoKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yUGFpciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpc01hdGNoID0gZmlyc3RDYXJkLmRhdGFzZXQudHlwZSA9PT0gc2Vjb25kQ2FyZC5kYXRhc2V0LnR5cGU7XG4gICAgaXNNYXRjaCA/IGV4Y2x1ZGVDYXJkcygpIDogdW5GbGlwQ2FyZHMoKTtcbn07XG5cbmNvbnN0IGV4Y2x1ZGVDYXJkcyA9ICgpID0+IHtcbiAgICBmaXJzdENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgc2Vjb25kQ2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICBjaGVjaysrO1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICBpZiAoY2hlY2sgPT09IGNhcmRzLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgZ2V0VGltZSgpO1xuICAgICAgICBidG4uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgY2hlY2sgPSAwO1xuICAgICAgICBzdGFydCA9IDA7XG4gICAgfVxuXG59O1xuXG5jb25zdCB1bkZsaXBDYXJkcyA9ICgpID0+IHtcbiAgICBsb2NrQm9hcmQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmaXJzdENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICBzZWNvbmRDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgcmVzZXRCb2FyZCgpO1xuICAgIH0sIDE1MDApXG59O1xuXG5jb25zdCByZXNldEJvYXJkID0gKCkgPT4ge1xuICAgIFtoYXNGbGlwcGVkQ2FyZCwgbG9ja0JvYXJkXSA9IFtmYWxzZSwgZmFsc2VdO1xuICAgIFtmaXJzdENhcmQsIHNlY29uZENhcmRdID0gW251bGwsIG51bGxdO1xufVxuXG5jb25zdCBzaHVmZmxlQ2FyZHMgPSAoKSA9PiB7XG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgbGV0IHNodWZmbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMik7XG4gICAgICAgIGNhcmQuc3R5bGUub3JkZXIgPSBzaHVmZmxlO1xuICAgIH0pXG59XG5cbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XG4gICAgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRpbWUgPSBNYXRoLnJvdW5kKGVuZFRpbWUgLSBzdGFydFRpbWUpO1xuICAgIHRpbWUgLz0gMTAwMDtcbiAgICBoMS5pbm5lckhUTUwgPSBgWW91ciB0aW1lOiA8c3Bhbj4ke01hdGgucm91bmQodGltZSl9IHNlY29uZHM8L3NwYW4+YDtcbn1cblxuY29uc3QgcmVzZXRHYW1lID0gKCkgPT4ge1xuICAgIHNodWZmbGVDYXJkcygpO1xuICAgIGJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgIH0pO1xuICAgIGgxLmlubmVySFRNTCA9IFwiXCI7XG4gICAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICB9KTtcbn1cblxuc2h1ZmZsZUNhcmRzKCk7XG5jYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG59KTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRHYW1lKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2pzL2FwcC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
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

eval("const cards = document.querySelectorAll('.game-card');\nconst h1 = document.querySelector('h1');\nconst btn = document.querySelector('button');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\nlet check = 0;\nlet start = 0;\nlet startTime = 0;\nlet time = 0;\nlet timing;\n\nconst flipCard = function() {\n    start++;\n    if (start === 1) {\n        timing = setInterval(timer, 10);\n    };\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n    check++;\n    resetBoard();\n    if (check === cards.length / 2) {\n        clearInterval(timing);\n        h1.innerHTML = `Your time: <span>${(time/100).toFixed(2)} seconds</span>`;\n        time = 0;\n        btn.style.display = \"block\";\n        check = 0;\n        start = 0;\n    }\n\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\nconst timer = () => {\n    time++;\n}\n\nconst resetGame = () => {\n    shuffleCards();\n    btn.style.display = 'none';\n    cards.forEach(card => {\n        card.classList.remove('flip');\n        card.addEventListener('click', flipCard);\n    });\n    h1.innerHTML = \"\";\n}\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});\n\nbtn.addEventListener('click', resetGame);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsc0JBQXNCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLWNhcmQnKTtcbmNvbnN0IGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xubGV0IGhhc0ZsaXBwZWRDYXJkID0gZmFsc2U7XG5sZXQgbG9ja0JvYXJkID0gZmFsc2U7XG5sZXQgZmlyc3RDYXJkLCBzZWNvbmRDYXJkO1xubGV0IGNoZWNrID0gMDtcbmxldCBzdGFydCA9IDA7XG5sZXQgc3RhcnRUaW1lID0gMDtcbmxldCB0aW1lID0gMDtcbmxldCB0aW1pbmc7XG5cbmNvbnN0IGZsaXBDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgc3RhcnQrKztcbiAgICBpZiAoc3RhcnQgPT09IDEpIHtcbiAgICAgICAgdGltaW5nID0gc2V0SW50ZXJ2YWwodGltZXIsIDEwKTtcbiAgICB9O1xuICAgIGlmIChsb2NrQm9hcmQpIHJldHVybjtcbiAgICBpZiAodGhpcyA9PT0gZmlyc3RDYXJkKSByZXR1cm47XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcblxuICAgIGlmICghaGFzRmxpcHBlZENhcmQpIHtcbiAgICAgICAgaGFzRmxpcHBlZENhcmQgPSB0cnVlO1xuICAgICAgICBmaXJzdENhcmQgPSB0aGlzO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBzZWNvbmRDYXJkID0gdGhpcztcbiAgICBjaGVja0ZvclBhaXIoKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yUGFpciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpc01hdGNoID0gZmlyc3RDYXJkLmRhdGFzZXQudHlwZSA9PT0gc2Vjb25kQ2FyZC5kYXRhc2V0LnR5cGU7XG4gICAgaXNNYXRjaCA/IGV4Y2x1ZGVDYXJkcygpIDogdW5GbGlwQ2FyZHMoKTtcbn07XG5cbmNvbnN0IGV4Y2x1ZGVDYXJkcyA9ICgpID0+IHtcbiAgICBmaXJzdENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgc2Vjb25kQ2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICBjaGVjaysrO1xuICAgIHJlc2V0Qm9hcmQoKTtcbiAgICBpZiAoY2hlY2sgPT09IGNhcmRzLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1pbmcpO1xuICAgICAgICBoMS5pbm5lckhUTUwgPSBgWW91ciB0aW1lOiA8c3Bhbj4keyh0aW1lLzEwMCkudG9GaXhlZCgyKX0gc2Vjb25kczwvc3Bhbj5gO1xuICAgICAgICB0aW1lID0gMDtcbiAgICAgICAgYnRuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIGNoZWNrID0gMDtcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIH1cblxufTtcblxuY29uc3QgdW5GbGlwQ2FyZHMgPSAoKSA9PiB7XG4gICAgbG9ja0JvYXJkID0gdHJ1ZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZmlyc3RDYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgc2Vjb25kQ2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHJlc2V0Qm9hcmQoKTtcbiAgICB9LCAxNTAwKVxufTtcblxuY29uc3QgcmVzZXRCb2FyZCA9ICgpID0+IHtcbiAgICBbaGFzRmxpcHBlZENhcmQsIGxvY2tCb2FyZF0gPSBbZmFsc2UsIGZhbHNlXTtcbiAgICBbZmlyc3RDYXJkLCBzZWNvbmRDYXJkXSA9IFtudWxsLCBudWxsXTtcbn1cblxuY29uc3Qgc2h1ZmZsZUNhcmRzID0gKCkgPT4ge1xuICAgIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgIGxldCBzaHVmZmxlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTIpO1xuICAgICAgICBjYXJkLnN0eWxlLm9yZGVyID0gc2h1ZmZsZTtcbiAgICB9KVxufVxuXG5jb25zdCB0aW1lciA9ICgpID0+IHtcbiAgICB0aW1lKys7XG59XG5cbmNvbnN0IHJlc2V0R2FtZSA9ICgpID0+IHtcbiAgICBzaHVmZmxlQ2FyZHMoKTtcbiAgICBidG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbiAgICB9KTtcbiAgICBoMS5pbm5lckhUTUwgPSBcIlwiO1xufVxuXG5zaHVmZmxlQ2FyZHMoKTtcbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldEdhbWUpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
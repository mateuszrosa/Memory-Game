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

eval("const cards = document.querySelectorAll('.game-card');\nlet hasFlippedCard = false;\nlet lockBoard = false;\nlet firstCard, secondCard;\n\nconst flipCard = function() {\n    if (lockBoard) return;\n    if (this === firstCard) return;\n\n    this.classList.add('flip');\n\n    if (!hasFlippedCard) {\n        hasFlippedCard = true;\n        firstCard = this;\n        return;\n    };\n    secondCard = this;\n    checkForPair();\n};\n\nconst checkForPair = function() {\n    let isMatch = firstCard.dataset.type === secondCard.dataset.type;\n    isMatch ? excludeCards() : unFlipCards();\n};\n\nconst excludeCards = () => {\n    firstCard.removeEventListener('click', flipCard);\n    secondCard.removeEventListener('click', flipCard);\n\n    resetBoard();\n};\n\nconst unFlipCards = () => {\n    lockBoard = true;\n    setTimeout(() => {\n        firstCard.classList.remove('flip');\n        secondCard.classList.remove('flip');\n        resetBoard();\n    }, 1500)\n};\n\nconst resetBoard = () => {\n    [hasFlippedCard, lockBoard] = [false, false];\n    [firstCard, secondCard] = [null, null];\n}\n\nconst shuffleCards = () => {\n    cards.forEach(card => {\n        let shuffle = Math.floor(Math.random() * 12);\n        card.style.order = shuffle;\n    })\n}\n\n\nshuffleCards();\ncards.forEach(card => {\n    card.addEventListener('click', flipCard);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9hcHAuanM/Yzk5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWUtY2FyZCcpO1xubGV0IGhhc0ZsaXBwZWRDYXJkID0gZmFsc2U7XG5sZXQgbG9ja0JvYXJkID0gZmFsc2U7XG5sZXQgZmlyc3RDYXJkLCBzZWNvbmRDYXJkO1xuXG5jb25zdCBmbGlwQ2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChsb2NrQm9hcmQpIHJldHVybjtcbiAgICBpZiAodGhpcyA9PT0gZmlyc3RDYXJkKSByZXR1cm47XG5cbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcblxuICAgIGlmICghaGFzRmxpcHBlZENhcmQpIHtcbiAgICAgICAgaGFzRmxpcHBlZENhcmQgPSB0cnVlO1xuICAgICAgICBmaXJzdENhcmQgPSB0aGlzO1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbiAgICBzZWNvbmRDYXJkID0gdGhpcztcbiAgICBjaGVja0ZvclBhaXIoKTtcbn07XG5cbmNvbnN0IGNoZWNrRm9yUGFpciA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBpc01hdGNoID0gZmlyc3RDYXJkLmRhdGFzZXQudHlwZSA9PT0gc2Vjb25kQ2FyZC5kYXRhc2V0LnR5cGU7XG4gICAgaXNNYXRjaCA/IGV4Y2x1ZGVDYXJkcygpIDogdW5GbGlwQ2FyZHMoKTtcbn07XG5cbmNvbnN0IGV4Y2x1ZGVDYXJkcyA9ICgpID0+IHtcbiAgICBmaXJzdENhcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwQ2FyZCk7XG4gICAgc2Vjb25kQ2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcblxuICAgIHJlc2V0Qm9hcmQoKTtcbn07XG5cbmNvbnN0IHVuRmxpcENhcmRzID0gKCkgPT4ge1xuICAgIGxvY2tCb2FyZCA9IHRydWU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcnN0Q2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XG4gICAgICAgIHNlY29uZENhcmQuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xuICAgICAgICByZXNldEJvYXJkKCk7XG4gICAgfSwgMTUwMClcbn07XG5cbmNvbnN0IHJlc2V0Qm9hcmQgPSAoKSA9PiB7XG4gICAgW2hhc0ZsaXBwZWRDYXJkLCBsb2NrQm9hcmRdID0gW2ZhbHNlLCBmYWxzZV07XG4gICAgW2ZpcnN0Q2FyZCwgc2Vjb25kQ2FyZF0gPSBbbnVsbCwgbnVsbF07XG59XG5cbmNvbnN0IHNodWZmbGVDYXJkcyA9ICgpID0+IHtcbiAgICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgICAgICBsZXQgc2h1ZmZsZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEyKTtcbiAgICAgICAgY2FyZC5zdHlsZS5vcmRlciA9IHNodWZmbGU7XG4gICAgfSlcbn1cblxuXG5zaHVmZmxlQ2FyZHMoKTtcbmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBDYXJkKTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);
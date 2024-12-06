/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n \nfunction aboutLoad() \n{\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const about = document.createElement(\"div\");\n    \n    const name = document.createElement(\"h2\");\n    name.textContent = \"Bob Kebab jr.\";\n    const email = document.createElement(\"p\");\n    email.textContent = \"bob.shawarama@falafel.com\";\n    const number = document.createElement(\"p\");\n    number.textContent = \"123-456-789\";\n    about.appendChild(name);\n    about.appendChild(email);\n    about.appendChild(number);\n\n    content.appendChild(about);\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutLoad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL29wLXJlc3RhdXJhbnQvLi9zcmMvYWJvdXQuanM/NTg2NCJdLCJzb3VyY2VzQ29udGVudCI6WyIgXG5mdW5jdGlvbiBhYm91dExvYWQoKSBcbntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBcIkJvYiBLZWJhYiBqci5cIjtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJib2Iuc2hhd2FyYW1hQGZhbGFmZWwuY29tXCI7XG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbnVtYmVyLnRleHRDb250ZW50ID0gXCIxMjMtNDU2LTc4OVwiO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIGFib3V0LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgICBhYm91dC5hcHBlbmRDaGlsZChudW1iZXIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dCk7XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0TG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _page_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-load.js */ \"./src/page-load.js\");\n\n\n\n\n(0,_page_load_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nfunction tabs() \n{\n    const home = document.querySelector(\".home\");\n    home.addEventListener(\"click\", () => \n    {\n        (0,_page_load_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    })\n\n    const menu = document.querySelector(\".menu\");\n    menu.addEventListener(\"click\", () => \n    {\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    })\n\n    const about = document.querySelector(\".about\");\n    about.addEventListener(\"click\", () => \n    {\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    })\n}\n\ntabs();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFtQztBQUNGO0FBQ0s7O0FBRXRDLHlEQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVM7QUFDakIsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3AtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dExvYWQgZnJvbSBcIi4vYWJvdXQuanNcIjtcbmltcG9ydCBtZW51TG9hZCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgcGFnZUxvYWQgZnJvbSBcIi4vcGFnZS1sb2FkLmpzXCI7XG5cbnBhZ2VMb2FkKCk7XG5cbmZ1bmN0aW9uIHRhYnMoKSBcbntcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IFxuICAgIHtcbiAgICAgICAgcGFnZUxvYWQoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKTtcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBcbiAgICB7XG4gICAgICAgIG1lbnVMb2FkKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hYm91dFwiKTtcbiAgICBhYm91dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gXG4gICAge1xuICAgICAgICBhYm91dExvYWQoKTtcbiAgICB9KVxufVxuXG50YWJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n \nfunction menuLoad() \n{\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const menu = document.createElement(\"div\");\n    \n    const item1 = document.createElement(\"div\");\n    const title1 = document.createElement(\"h2\");\n    title1.textContent = \"Chicken Shawarma\";\n    const desc1 = document.createElement(\"p\");\n    desc1.textContent = \"Juicy, spiced chicken shawarma wrapped in warm bread, served with crispy golden chips and a side of flavor-packed sauces—comfort food with a Middle Eastern twist!\";\n    item1.appendChild(title1);\n    item1.appendChild(desc1);\n\n    const item2 = document.createElement(\"div\");\n    const title2 = document.createElement(\"h2\");\n    title2.textContent = \"Falafel Platter\";\n    const desc2 = document.createElement(\"p\");\n    desc2.textContent = \"Golden, crispy falafel served with fresh salad, fluffy pita bread, creamy hummus, and a drizzle of tangy tahini—plant-based perfection on a plate!\";\n    item2.appendChild(title2);\n    item2.appendChild(desc2);\n\n    menu.appendChild(item1);\n    menu.appendChild(item2);\n\n    content.appendChild(menu);\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuLoad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL29wLXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcbmZ1bmN0aW9uIG1lbnVMb2FkKCkgXG57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBcbiAgICBjb25zdCBpdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlMS50ZXh0Q29udGVudCA9IFwiQ2hpY2tlbiBTaGF3YXJtYVwiO1xuICAgIGNvbnN0IGRlc2MxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzYzEudGV4dENvbnRlbnQgPSBcIkp1aWN5LCBzcGljZWQgY2hpY2tlbiBzaGF3YXJtYSB3cmFwcGVkIGluIHdhcm0gYnJlYWQsIHNlcnZlZCB3aXRoIGNyaXNweSBnb2xkZW4gY2hpcHMgYW5kIGEgc2lkZSBvZiBmbGF2b3ItcGFja2VkIHNhdWNlc+KAlGNvbWZvcnQgZm9vZCB3aXRoIGEgTWlkZGxlIEVhc3Rlcm4gdHdpc3QhXCI7XG4gICAgaXRlbTEuYXBwZW5kQ2hpbGQodGl0bGUxKTtcbiAgICBpdGVtMS5hcHBlbmRDaGlsZChkZXNjMSk7XG5cbiAgICBjb25zdCBpdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlMi50ZXh0Q29udGVudCA9IFwiRmFsYWZlbCBQbGF0dGVyXCI7XG4gICAgY29uc3QgZGVzYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjMi50ZXh0Q29udGVudCA9IFwiR29sZGVuLCBjcmlzcHkgZmFsYWZlbCBzZXJ2ZWQgd2l0aCBmcmVzaCBzYWxhZCwgZmx1ZmZ5IHBpdGEgYnJlYWQsIGNyZWFteSBodW1tdXMsIGFuZCBhIGRyaXp6bGUgb2YgdGFuZ3kgdGFoaW5p4oCUcGxhbnQtYmFzZWQgcGVyZmVjdGlvbiBvbiBhIHBsYXRlIVwiO1xuICAgIGl0ZW0yLmFwcGVuZENoaWxkKHRpdGxlMik7XG4gICAgaXRlbTIuYXBwZW5kQ2hpbGQoZGVzYzIpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMSk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChpdGVtMik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51TG9hZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.jpg */ \"./src/home.jpg\");\n\n\n\nfunction pageLoad() \n{\n    const content = document.getElementById(\"content\");\n    content.innerHTML = \"\";\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Bob's Kebabs!\";\n    content.appendChild(title);\n    \n    const imageContainer = document.createElement(\"div\");\n    const homeImage = document.createElement(\"img\");\n    homeImage.classList = \"home-img\";\n    homeImage.src = _home_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    imageContainer.appendChild(homeImage);\n    content.appendChild(imageContainer);\n\n    const description = document.createElement(\"p\");\n    description.textContent = \"Bob's Kebab Shop: Where the skewers are hotter than the sun, the sauces flow like gossip at a family reunion, and every bite is a meat-lover's mic drop. Serving kebabs so good, you'll swear Bob's got a secret recipe (spoiler: it's love and a little extra garlic).\";\n    content.appendChild(description);\n\n    \n\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQW1DOzs7QUFHbkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0NBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcC1yZXN0YXVyYW50Ly4vc3JjL3BhZ2UtbG9hZC5qcz9iZWNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzaG9wSW1hZ2UgZnJvbSBcIi4vaG9tZS5qcGdcIjtcblxuXG5mdW5jdGlvbiBwYWdlTG9hZCgpIFxue1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkJvYidzIEtlYmFicyFcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBcbiAgICBjb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaG9tZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBob21lSW1hZ2UuY2xhc3NMaXN0ID0gXCJob21lLWltZ1wiO1xuICAgIGhvbWVJbWFnZS5zcmMgPSBzaG9wSW1hZ2U7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUltYWdlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkJvYidzIEtlYmFiIFNob3A6IFdoZXJlIHRoZSBza2V3ZXJzIGFyZSBob3R0ZXIgdGhhbiB0aGUgc3VuLCB0aGUgc2F1Y2VzIGZsb3cgbGlrZSBnb3NzaXAgYXQgYSBmYW1pbHkgcmV1bmlvbiwgYW5kIGV2ZXJ5IGJpdGUgaXMgYSBtZWF0LWxvdmVyJ3MgbWljIGRyb3AuIFNlcnZpbmcga2ViYWJzIHNvIGdvb2QsIHlvdSdsbCBzd2VhciBCb2IncyBnb3QgYSBzZWNyZXQgcmVjaXBlIChzcG9pbGVyOiBpdCdzIGxvdmUgYW5kIGEgbGl0dGxlIGV4dHJhIGdhcmxpYykuXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBcblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2VMb2FkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/page-load.js\n");

/***/ }),

/***/ "./src/home.jpg":
/*!**********************!*\
  !*** ./src/home.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca26e58bd367e48119ea.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
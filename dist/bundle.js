/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactLoad)\n/* harmony export */ });\nfunction contactLoad() {\r\n  const container = document.querySelector(\".container\");\r\n  const desc = document.createElement(\"div\");\r\n  desc.classList.add(\"description\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.setAttribute(\"alt\", \"food\");\r\n  img.setAttribute(\"src\", \"../food.jpg\");\r\n  const text = document.createElement(\"div\");\r\n  text.textContent = \"Contact us!\";\r\n\r\n  desc.appendChild(img);\r\n  desc.appendChild(text);\r\n  container.appendChild(desc);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ homeLoad)\n/* harmony export */ });\nfunction homeLoad() {\r\n  const container = document.querySelector(\".container\");\r\n  const desc = document.createElement(\"div\");\r\n  desc.classList.add(\"description\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.setAttribute(\"alt\", \"food\");\r\n  img.setAttribute(\"src\", \"../food.jpg\");\r\n  const text = document.createElement(\"div\");\r\n  text.textContent =\r\n    \"We are a tight-knit, fun-loving, devoted team of local cooks spreading\" +\r\n    \"the gospel of good times and good food. We offer limited capacity onsite\" +\r\n    \"events in our restaurant kitchen space. And worry not, our krewe will\" +\r\n    \"travel to your destination of choice from hotel ballrooms to private\" +\r\n    \"kitchens to entertain groups of all sizes. We cook, we tell stories, we\" +\r\n    \" deliver informative culinary demonstrations and lectures, but most of\" +\r\n    \"all we treat every event like you're a guest at our dinner table. Join\" +\r\n    \"us!\";\r\n\r\n  desc.appendChild(img);\r\n  desc.appendChild(text);\r\n  container.appendChild(desc);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ \"./src/pageload.js\");\n\r\n\r\n(0,_pageload__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuLoad)\n/* harmony export */ });\nfunction menuLoad() {\r\n  const container = document.querySelector(\".container\");\r\n  const desc = document.createElement(\"div\");\r\n  desc.classList.add(\"description\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.setAttribute(\"alt\", \"food\");\r\n  img.setAttribute(\"src\", \"../food.jpg\");\r\n  const text = document.createElement(\"div\");\r\n  text.textContent = \"This is a menu\";\r\n\r\n  desc.appendChild(img);\r\n  desc.appendChild(text);\r\n  container.appendChild(desc);\r\n}\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\r\n\r\n\r\n\r\nfunction pageLoad() {\r\n  const container = document.querySelector(\".container\");\r\n  //header\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Restaurant page\";\r\n\r\n  const ul = document.createElement(\"ul\");\r\n\r\n  const list1 = document.createElement(\"li\");\r\n  const home = document.createElement(\"a\");\r\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  home.textContent = \"Home\";\r\n  home.addEventListener(\"click\", () => {\r\n    container.innerHTML = \"\";\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  const list2 = document.createElement(\"li\");\r\n  const contact = document.createElement(\"a\");\r\n  contact.textContent = \"Contact\";\r\n  contact.addEventListener(\"click\", () => {\r\n    container.innerHTML = \"\";\r\n    (0,_contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  const list3 = document.createElement(\"li\");\r\n  const menu = document.createElement(\"a\");\r\n  menu.textContent = \"Menu\";\r\n  menu.addEventListener(\"click\", () => {\r\n    container.innerHTML = \"\";\r\n    (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n\r\n  list1.appendChild(home);\r\n  list2.appendChild(contact);\r\n  list3.appendChild(menu);\r\n  ul.append(list1, list2, list3);\r\n\r\n  header.appendChild(h1);\r\n  header.appendChild(ul);\r\n  container.parentNode.insertBefore(header, container);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad());\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/pageload.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
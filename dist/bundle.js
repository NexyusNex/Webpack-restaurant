/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function pageLoad() {\r\n  const body = document.querySelector(\"body\");\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Restaurant page\";\r\n\r\n  const ul = document.createElement(\"ul\");\r\n  const list = [\"Home\", \"Contact\", \"Menu\"];\r\n  for (let i = 0; i < 3; i++) {\r\n    const li = document.createElement(\"li\");\r\n    li.textContent = list[i];\r\n    ul.appendChild(li);\r\n  }\r\n  header.appendChild(h1);\r\n  header.appendChild(ul);\r\n  body.appendChild(header);\r\n}\r\n\r\npageLoad();\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
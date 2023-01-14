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

eval("function pageLoad() {\r\n  const body = document.querySelector(\"body\");\r\n  //header\r\n  const header = document.createElement(\"div\");\r\n  header.classList.add(\"header\");\r\n\r\n  const h1 = document.createElement(\"h1\");\r\n  h1.textContent = \"Restaurant page\";\r\n\r\n  const ul = document.createElement(\"ul\");\r\n  const list = [\"Home\", \"Contact\", \"Menu\"];\r\n  for (let i = 0; i < 3; i++) {\r\n    const li = document.createElement(\"li\");\r\n    li.textContent = list[i];\r\n    ul.appendChild(li);\r\n  }\r\n  header.appendChild(h1);\r\n  header.appendChild(ul);\r\n  body.appendChild(header);\r\n\r\n  const container = document.createElement(\"div\");\r\n  container.classList.add(\"container\");\r\n  const desc = document.createElement(\"div\");\r\n  desc.classList.add(\"description\");\r\n\r\n  const img = document.createElement(\"img\");\r\n  img.setAttribute(\"alt\", \"food\");\r\n  img.setAttribute(\"src\", \"../food.jpg\");\r\n  const text = document.createElement(\"div\");\r\n  text.textContent =\r\n    \"We are a tight-knit, fun-loving, devoted team of local cooks spreading\" +\r\n    \"the gospel of good times and good food. We offer limited capacity onsite\" +\r\n    \"events in our restaurant kitchen space. And worry not, our krewe will\" +\r\n    \"travel to your destination of choice from hotel ballrooms to private\" +\r\n    \"kitchens to entertain groups of all sizes. We cook, we tell stories, we\" +\r\n    \" deliver informative culinary demonstrations and lectures, but most of\" +\r\n    \"all we treat every event like you're a guest at our dinner table. Join\" +\r\n    \"us!\";\r\n\r\n  desc.appendChild(img);\r\n  desc.appendChild(text);\r\n  container.appendChild(desc);\r\n  body.appendChild(container);\r\n}\r\n\r\npageLoad();\r\n\n\n//# sourceURL=webpack://webpack-restaurant/./src/index.js?");

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
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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("const imagenes = document.querySelectorAll('.galeriaPage__imagen');\r\nconst fullscreen = document.getElementById('fullscreen');\r\n\r\nimagenes.forEach(img => {\r\n    img.addEventListener('click', abrirImagen);\r\n})\r\n\r\nfunction abrirImagen(e){\r\n    const url = e.target.src\r\n\r\n    let screen = document.querySelector('.fullscreen__absoluto');\r\n    if(!screen) {\r\n        screen = document.createElement('div');\r\n        screen.classList.add('fullscreen__absoluto');\r\n        fullscreen.appendChild(screen);\r\n    }\r\n\r\n    const img = document.createElement('img');\r\n    img.classList.add('fullscreen__imagen');\r\n    img.src = url;\r\n\r\n    // Limpiar 'screen' y mostrar nueva imagen\r\n    screen.innerHTML = '';\r\n    screen.appendChild(img);\r\n\r\n    // Cerrar la imagen al hacer click fuera\r\n    screen.addEventListener('click', () => {\r\n        fullscreen.removeChild(screen);\r\n    })\r\n}\n\n//# sourceURL=webpack://family_values/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;
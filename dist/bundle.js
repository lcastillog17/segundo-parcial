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

/***/ "./src/aggregator.js":
/*!***************************!*\
  !*** ./src/aggregator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculationsScript: () => (/* reexport safe */ _scripts_calculations_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   imagesGalleryScript: () => (/* reexport safe */ _scripts_imagesGallery_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   passwordsGenerationScript: () => (/* reexport safe */ _scripts_passwordsGeneration_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   tasksListScript: () => (/* reexport safe */ _scripts_tasksList_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   unitsConversionScript: () => (/* reexport safe */ _scripts_unitsConversion_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _scripts_calculations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/calculations.js */ \"./src/scripts/calculations.js\");\n/* harmony import */ var _scripts_imagesGallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/imagesGallery.js */ \"./src/scripts/imagesGallery.js\");\n/* harmony import */ var _scripts_passwordsGeneration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/passwordsGeneration.js */ \"./src/scripts/passwordsGeneration.js\");\n/* harmony import */ var _scripts_tasksList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/tasksList.js */ \"./src/scripts/tasksList.js\");\n/* harmony import */ var _scripts_unitsConversion_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/unitsConversion.js */ \"./src/scripts/unitsConversion.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://segundo-parcial/./src/aggregator.js?");

/***/ }),

/***/ "./src/modules/calculations/index.js":
/*!*******************************************!*\
  !*** ./src/modules/calculations/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index.js */ \"./src/modules/common/index.js\");\n\nconst calculations = {\n  add: (num1, num2) => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num1) && _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num2) ? num1 + num2 : 0,\n  subtract: (num1, num2) => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num1) && _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num2) ? num1 - num2 : 0,\n  multiply: (num1, num2) => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num1) && _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num2) ? num1 * num2 : 0,\n  divide: (num1, num2) => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num1) && _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(num2) ? num1 / num2 : 0\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculations);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/calculations/index.js?");

/***/ }),

/***/ "./src/modules/common/index.js":
/*!*************************************!*\
  !*** ./src/modules/common/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst common = {\n  isValidNumber: num => !Number.isNaN(Number(num))\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/common/index.js?");

/***/ }),

/***/ "./src/modules/imagesGallery/index.js":
/*!********************************************!*\
  !*** ./src/modules/imagesGallery/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst imageGallery = {\n  images: [],\n  addImage: imageUrl => imageGallery.images.push(imageUrl),\n  displayImages: () => imageGallery.images\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageGallery);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/imagesGallery/index.js?");

/***/ }),

/***/ "./src/modules/passwordsGeneration/index.js":
/*!**************************************************!*\
  !*** ./src/modules/passwordsGeneration/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst characters = {\n  letters: \"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\",\n  numbers: \"0123456789\",\n  symbols: \"!@#$%^&*()_+[]{}|;:,.<>?\"\n};\nconst passwordsGeneration = {\n  generatePassword: (length, useLetters, useNumbers, useSymbols) => {\n    let allowedCharacters = \"\";\n    if (useLetters) {\n      allowedCharacters += characters.letters;\n    }\n    if (useNumbers) {\n      allowedCharacters += characters.numbers;\n    }\n    if (useSymbols) {\n      allowedCharacters += characters.symbols;\n    }\n    let password = \"\";\n    for (let i = 0; i < length; i++) {\n      const randomIndex = Math.floor(Math.random() * allowedCharacters.length);\n      password += allowedCharacters.charAt(randomIndex);\n    }\n    return password;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (passwordsGeneration);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/passwordsGeneration/index.js?");

/***/ }),

/***/ "./src/modules/tasksList/index.js":
/*!****************************************!*\
  !*** ./src/modules/tasksList/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tasksList = {\n  tasks: [],\n  addTask: task => tasksList.tasks.push(task),\n  completeTask: index => tasksList.tasks[index].completed = true,\n  displayTasks: () => tasksList.tasks\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tasksList);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/tasksList/index.js?");

/***/ }),

/***/ "./src/modules/unitsConversion/index.js":
/*!**********************************************!*\
  !*** ./src/modules/unitsConversion/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _common_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/index.js */ \"./src/modules/common/index.js\");\n\nconst unitsConversion = {\n  celsiusToFahrenheit: celsius => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(celsius) ? celsius * 9 / 5 + 32 : 0,\n  fahrenheitToCelsius: fahrenheit => _common_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isValidNumber(fahrenheit) ? (fahrenheit - 32) * 5 / 9 : 0\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unitsConversion);\n\n//# sourceURL=webpack://segundo-parcial/./src/modules/unitsConversion/index.js?");

/***/ }),

/***/ "./src/scripts/calculations.js":
/*!*************************************!*\
  !*** ./src/scripts/calculations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_calculations_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/calculations/index.js */ \"./src/modules/calculations/index.js\");\n\nconst addNumbers = () => {\n  const num1 = parseFloat(document.getElementById('num1').value);\n  const num2 = parseFloat(document.getElementById('num2').value);\n  const result = _modules_calculations_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].add(num1, num2);\n  document.getElementById('result').textContent = `Result: ${result}`;\n};\nconst subtractNumbers = () => {\n  const num1 = parseFloat(document.getElementById('num1').value);\n  const num2 = parseFloat(document.getElementById('num2').value);\n  const result = _modules_calculations_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].subtract(num1, num2);\n  document.getElementById('result').textContent = `Result: ${result}`;\n};\nconst multiplyNumbers = () => {\n  const num1 = parseFloat(document.getElementById('num1').value);\n  const num2 = parseFloat(document.getElementById('num2').value);\n  const result = _modules_calculations_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].multiply(num1, num2);\n  document.getElementById('result').textContent = `Result: ${result}`;\n};\nconst divideNumbers = () => {\n  const num1 = parseFloat(document.getElementById('num1').value);\n  const num2 = parseFloat(document.getElementById('num2').value);\n  if (num2 !== 0) {\n    const result = _modules_calculations_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].divide(num1, num2);\n    document.getElementById('result').textContent = `Result: ${result}`;\n  } else {\n    document.getElementById('result').textContent = 'Cannot divide by zero';\n  }\n};\ndocument.getElementById('addBtn').addEventListener('click', addNumbers);\ndocument.getElementById('subtractBtn').addEventListener('click', subtractNumbers);\ndocument.getElementById('multiplyBtn').addEventListener('click', multiplyNumbers);\ndocument.getElementById('divideBtn').addEventListener('click', divideNumbers);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addNumbers,\n  subtractNumbers,\n  multiplyNumbers,\n  divideNumbers\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/scripts/calculations.js?");

/***/ }),

/***/ "./src/scripts/imagesGallery.js":
/*!**************************************!*\
  !*** ./src/scripts/imagesGallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_imagesGallery_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/imagesGallery/index.js */ \"./src/modules/imagesGallery/index.js\");\n\nconst addImage = () => {\n  const imageUrl = document.getElementById(\"imageUrl\").value;\n  _modules_imagesGallery_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addImage(imageUrl);\n  displayImages();\n  document.getElementById(\"imageUrl\").value = \"\";\n};\nconst displayImages = () => {\n  const gallery = document.getElementById(\"gallery\");\n  gallery.innerHTML = \"\";\n  _modules_imagesGallery_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayImages().forEach(imageUrl => {\n    const imgElement = document.createElement(\"img\");\n    imgElement.src = imageUrl;\n    gallery.appendChild(imgElement);\n  });\n};\ndisplayImages();\ndocument.getElementById('addImageBtn').addEventListener('click', addImage);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addImage,\n  displayImages\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/scripts/imagesGallery.js?");

/***/ }),

/***/ "./src/scripts/passwordsGeneration.js":
/*!********************************************!*\
  !*** ./src/scripts/passwordsGeneration.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_passwordsGeneration_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/passwordsGeneration/index.js */ \"./src/modules/passwordsGeneration/index.js\");\n\nconst generatePassword = () => {\n  const passwordLength = parseInt(document.getElementById('passwordLength').value);\n  const includeLetters = document.getElementById('includeLetters').checked;\n  const includeNumbers = document.getElementById('includeNumbers').checked;\n  const includeSymbols = document.getElementById('includeSymbols').checked;\n  const password = _modules_passwordsGeneration_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].generatePassword(passwordLength, includeLetters, includeNumbers, includeSymbols);\n  document.getElementById('password').textContent = `Generated Password: ${password}`;\n};\ndocument.getElementById('generatePasswordBtn').addEventListener('click', generatePassword);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  generatePassword\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/scripts/passwordsGeneration.js?");

/***/ }),

/***/ "./src/scripts/tasksList.js":
/*!**********************************!*\
  !*** ./src/scripts/tasksList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_tasksList_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/tasksList/index.js */ \"./src/modules/tasksList/index.js\");\n\nconst addTask = () => {\n  const taskInput = document.getElementById(\"taskInput\");\n  const newTask = taskInput.value;\n  _modules_tasksList_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTask({\n    task: newTask,\n    completed: false\n  });\n  taskInput.value = \"\";\n  displayTasks();\n};\nconst displayTasks = () => {\n  const taskList = document.getElementById(\"taskList\");\n  taskList.innerHTML = \"\";\n  _modules_tasksList_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayTasks().forEach((task, index) => {\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = task.task;\n    if (task.completed) {\n      listItem.style.textDecoration = \"line-through\";\n    }\n    listItem.addEventListener(\"click\", () => completeTask(index));\n    taskList.appendChild(listItem);\n  });\n};\nconst completeTask = index => {\n  _modules_tasksList_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].completeTask(index);\n  displayTasks();\n};\ndisplayTasks();\ndocument.getElementById(\"addTaskBtn\").addEventListener(\"click\", addTask);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  addTask,\n  displayTasks,\n  completeTask\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/scripts/tasksList.js?");

/***/ }),

/***/ "./src/scripts/unitsConversion.js":
/*!****************************************!*\
  !*** ./src/scripts/unitsConversion.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_unitsConversion_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/unitsConversion/index.js */ \"./src/modules/unitsConversion/index.js\");\n\nconst convertTemperature = () => {\n  const temperature = parseFloat(document.getElementById(\"temperature\").value);\n  const conversionType = document.getElementById(\"conversionType\").value;\n  let result;\n  if (conversionType === \"celsiusToFahrenheit\") {\n    result = _modules_unitsConversion_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].celsiusToFahrenheit(temperature);\n  } else if (conversionType === \"fahrenheitToCelsius\") {\n    result = _modules_unitsConversion_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fahrenheitToCelsius(temperature);\n  }\n  document.getElementById(\"result\").textContent = `Result: ${result}`;\n};\ndocument.getElementById(\"convertTemperatureBtn\").addEventListener(\"click\", convertTemperature);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  convertTemperature\n});\n\n//# sourceURL=webpack://segundo-parcial/./src/scripts/unitsConversion.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/aggregator.js");
/******/ 	
/******/ })()
;
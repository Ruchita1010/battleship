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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#gameboards-screen {\\r\\n  min-height: 100vh;\\r\\n  padding: 2vmax;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  gap: 1rem;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.gameboard-container {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.gameboard {\\r\\n  width: 35vmax;\\r\\n  height: 35vmax;\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(10, 1fr);\\r\\n  grid-template-rows: repeat(10, 1fr);\\r\\n  border-top: 1px solid var(--color-blackolive);\\r\\n  border-left: 1px solid var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.cell {\\r\\n  position: relative;\\r\\n  border-bottom: 1px solid var(--color-blackolive);\\r\\n  border-right: 1px solid var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.board-btn {\\r\\n  padding: 10px;\\r\\n  font-size: 2vmin;\\r\\n  margin: 1rem;\\r\\n}\\r\\n\\r\\n.ship {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  background-color: var(--color-blackolive-transparent);\\r\\n  border: 4px solid var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.hit::before {\\r\\n  content: '✕';\\r\\n  display: grid;\\r\\n  place-items: center;\\r\\n  font-size: 2.5vmax;\\r\\n  font-weight: bold;\\r\\n  color: var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.miss::before {\\r\\n  content: '•';\\r\\n  height: 100%;\\r\\n  display: grid;\\r\\n  place-items: center;\\r\\n  font-size: 2vmax;\\r\\n  color: var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.veil {\\r\\n  position: absolute;\\r\\n  top: -4px;\\r\\n  left: -2px;\\r\\n  bottom: -4px;\\r\\n  right: -2px;\\r\\n  display: grid;\\r\\n  place-items: center;\\r\\n  backdrop-filter: blur(6px);\\r\\n}\\r\\n\\r\\n#play-btn {\\r\\n  padding: 1vmax;\\r\\n  font-size: 2vmax;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/gameboard.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ \"./src/assets/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --color-blackolive: hsl(60, 11%, 21%);\\r\\n  --color-blackolive-transparent: hsla(60, 10%, 21%, 0.452);\\r\\n  --color-gainsboro: hsl(0, 0%, 87%);\\r\\n}\\r\\n\\r\\n#main-container {\\r\\n  min-height: 100vh;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center/cover;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  color: var(--color-gainsboro);\\r\\n  background-color: var(--color-blackolive);\\r\\n  letter-spacing: 4px;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  cursor: pointer;\\r\\n  transform: scale(1.02);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/bg.jpg */ \"./src/assets/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#modal {\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  min-height: 100vh;\\r\\n  padding: 1rem;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  flex-wrap: wrap;\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center/cover;\\r\\n}\\r\\n\\r\\n#port {\\r\\n  width: 35vmax;\\r\\n  height: 35vmax;\\r\\n  display: grid;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.ship-container {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n}\\r\\n\\r\\n.draggable-ship {\\r\\n  height: 3.5vmax;\\r\\n  margin-left: 2vmax;\\r\\n  background-color: var(--color-blackolive-transparent);\\r\\n  border: 4px solid var(--color-blackolive);\\r\\n  cursor: grab;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/start-screen.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/start-screen.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#start-screen {\\r\\n  display: grid;\\r\\n  width: 100vw;\\r\\n  min-height: 100vh;\\r\\n  place-content: center;\\r\\n  gap: 3rem;\\r\\n  font-size: 2.4vmax;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n#troop-name {\\r\\n  padding: 0.1rem;\\r\\n  font-size: 2.4vmax;\\r\\n  color: var(--color-blackolive);\\r\\n  background: transparent;\\r\\n  box-shadow: 0px 1.5px var(--color-blackolive);\\r\\n  border: none;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n#troop-name::placeholder {\\r\\n  font-size: 2vmax;\\r\\n  color: var(--color-blackolive);\\r\\n}\\r\\n\\r\\n.mode-label {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n  margin-bottom: 3vmin;\\r\\n  color: var(--color-blackolive);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type='radio'] {\\r\\n  -webkit-appearance: none;\\r\\n  appearance: none;\\r\\n  width: 4vmin;\\r\\n  height: 4vmin;\\r\\n  margin: 0;\\r\\n  background-color: transparent;\\r\\n  border: 1px solid var(--color-blackolive);\\r\\n  transition: background-color 0.25s ease-in-out;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput[type='radio']:checked {\\r\\n  background-color: var(--color-blackolive);\\r\\n}\\r\\n\\r\\n#start-btn {\\r\\n  place-self: center;\\r\\n  padding: 1rem;\\r\\n  font-size: 2.4vmax;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles/start-screen.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/gameboard.css?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/main.css?");

/***/ }),

/***/ "./src/styles/modal.css":
/*!******************************!*\
  !*** ./src/styles/modal.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/modal.css?");

/***/ }),

/***/ "./src/styles/start-screen.css":
/*!*************************************!*\
  !*** ./src/styles/start-screen.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./start-screen.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/start-screen.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_start_screen_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles/start-screen.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/gameboard.css */ \"./src/styles/gameboard.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/modal.css */ \"./src/styles/modal.css\");\n/* harmony import */ var _styles_start_screen_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/start-screen.css */ \"./src/styles/start-screen.css\");\n/* harmony import */ var _modules_dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dom/gameboardsScreen */ \"./src/modules/dom/gameboardsScreen.js\");\n/* harmony import */ var _modules_dom_shipsPlacement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dom/shipsPlacement */ \"./src/modules/dom/shipsPlacement.js\");\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/player */ \"./src/modules/player.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst GAMEBOARDSIZE = 10;\r\n\r\nconst initGame = (e) => {\r\n  e.preventDefault();\r\n  const troopName = document.querySelector('#troop-name').value;\r\n  const mode = document.querySelector('input[type=\"radio\"]:checked').value;\r\n  const human = (0,_modules_player__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(troopName, GAMEBOARDSIZE);\r\n  const bot = (0,_modules_player__WEBPACK_IMPORTED_MODULE_7__[\"default\"])('Robobo', GAMEBOARDSIZE);\r\n  (0,_modules_dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_4__.renderGameboardsScreen)(human.gameboard.size);\r\n  // placing ships on board\r\n  bot.placeShipsRandomly();\r\n  const randomizeBoardBtn = document.querySelector('#randomize-board-btn');\r\n  randomizeBoardBtn.addEventListener('click', _modules_dom_shipsPlacement__WEBPACK_IMPORTED_MODULE_5__.randomizeBoard.bind(null, human));\r\n  const resetBoardBtn = document.querySelector('#reset-board-btn');\r\n  resetBoardBtn.addEventListener('click', _modules_dom_shipsPlacement__WEBPACK_IMPORTED_MODULE_5__.resetBoard.bind(null, human));\r\n  // starts game\r\n  const playBtn = document.querySelector('#play-btn');\r\n  playBtn.addEventListener('click', _modules_game__WEBPACK_IMPORTED_MODULE_6__[\"default\"].bind(null, mode, human, bot));\r\n};\r\n\r\nconst startScreen = document.querySelector('#start-screen');\r\nstartScreen.addEventListener('submit', initGame);\r\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/gameboardsScreen.js":
/*!*********************************************!*\
  !*** ./src/modules/dom/gameboardsScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearGameboard\": () => (/* binding */ clearGameboard),\n/* harmony export */   \"createGameboardDOM\": () => (/* binding */ createGameboardDOM),\n/* harmony export */   \"markCell\": () => (/* binding */ markCell),\n/* harmony export */   \"removeBoardBtns\": () => (/* binding */ removeBoardBtns),\n/* harmony export */   \"renderGameboardsScreen\": () => (/* binding */ renderGameboardsScreen),\n/* harmony export */   \"renderShip\": () => (/* binding */ renderShip)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/modules/dom/utils.js\");\n\r\n\r\nconst createGameboardContainer = () => {\r\n  const gameboardContainer = document.createElement('div');\r\n  gameboardContainer.classList.add('gameboard-container');\r\n  return gameboardContainer;\r\n};\r\n\r\nconst createGameboardDOM = (gameboardSize) => {\r\n  const gameboard = document.createElement('div');\r\n  gameboard.classList.add('gameboard');\r\n  for (let i = 0; i < gameboardSize; i++) {\r\n    for (let j = 0; j < gameboardSize; j++) {\r\n      let cell = document.createElement('div');\r\n      cell.classList.add('cell');\r\n      // setting the coordinates as the id of the cell\r\n      cell.setAttribute('id', `${i}${j}`);\r\n      gameboard.appendChild(cell);\r\n    }\r\n  }\r\n  return gameboard;\r\n};\r\n\r\nconst createBoardButtons = () => {\r\n  const boardBtns = document.createElement('div');\r\n  boardBtns.id = 'board-btns';\r\n  const resetBoardBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createButton)('RESET', 'reset-board-btn');\r\n  const randomizeBoardBtn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createButton)('RANDOM', 'randomize-board-btn');\r\n  boardBtns.appendChild(randomizeBoardBtn);\r\n  boardBtns.appendChild(resetBoardBtn);\r\n  return boardBtns;\r\n};\r\n\r\nconst createHumanGameboardContainer = (gameboardSize) => {\r\n  const gameboardContainer = createGameboardContainer();\r\n  const gameboard = createGameboardDOM(gameboardSize);\r\n  const boardBtns = createBoardButtons();\r\n  gameboardContainer.appendChild(gameboard);\r\n  gameboardContainer.appendChild(boardBtns);\r\n  return gameboardContainer;\r\n};\r\n\r\nconst createComputerGameboardContainer = (gameboardSize) => {\r\n  const gameboardContainer = createGameboardContainer();\r\n  const gameboard = createGameboardDOM(gameboardSize);\r\n  gameboardContainer.appendChild(gameboard);\r\n  return gameboardContainer;\r\n};\r\n\r\nconst createGameboardsScreen = (gameboardSize) => {\r\n  const gameboardsScreen = document.createElement('div');\r\n  gameboardsScreen.id = 'gameboards-screen';\r\n  const gameboardContainer1 = createHumanGameboardContainer(gameboardSize);\r\n  const gameboardContainer2 = createComputerGameboardContainer(gameboardSize);\r\n  gameboardsScreen.appendChild(gameboardContainer1);\r\n  gameboardsScreen.appendChild(gameboardContainer2);\r\n  return gameboardsScreen;\r\n};\r\n\r\nconst renderGameboardsScreen = (gameboardSize) => {\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clearMainContainer)();\r\n  const gameboardsScreen = createGameboardsScreen(gameboardSize);\r\n  const mainContainer = document.querySelector('#main-container');\r\n  mainContainer.appendChild(gameboardsScreen);\r\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.toggleVeil)();\r\n};\r\n\r\nconst clearGameboard = () => {\r\n  const cells = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getGameboardCells)(0);\r\n  cells.forEach((cell) => {\r\n    cell.innerHTML = '';\r\n  });\r\n};\r\n\r\nconst markCell = (coords, hit, gameboardIndex) => {\r\n  const cells = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getGameboardCells)(gameboardIndex);\r\n  const targetCell = cells.find(\r\n    (cell) => cell.id === `${coords[0]}${coords[1]}`\r\n  );\r\n  if (hit) {\r\n    targetCell.classList.add('hit');\r\n    return;\r\n  }\r\n  targetCell.classList.add('miss');\r\n};\r\n\r\nconst renderShip = (placedShip, gameboardCells) => {\r\n  const { ship, coordinates, orientation } = placedShip;\r\n  const targetCell = gameboardCells.find(\r\n    (gameboardCell) =>\r\n      gameboardCell.id === `${coordinates[0].xCoord}${coordinates[0].yCoord}`\r\n  );\r\n  const domShip = document.createElement('div');\r\n  domShip.classList.add('ship');\r\n  if (orientation === 'vertical') {\r\n    domShip.style.height = `${ship.length * 3.5}vmax`;\r\n    domShip.style.width = '3.5vmax';\r\n  } else {\r\n    domShip.style.width = `${ship.length * 3.5}vmax`;\r\n    domShip.style.height = '3.5vmax';\r\n  }\r\n  targetCell.appendChild(domShip);\r\n  return;\r\n};\r\n\r\nconst removeBoardBtns = () => {\r\n  const boardBtns = document.querySelectorAll('.board-btn');\r\n  boardBtns.forEach((boardBtn) => {\r\n    boardBtn.remove();\r\n  });\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom/gameboardsScreen.js?");

/***/ }),

/***/ "./src/modules/dom/shipsPlacement.js":
/*!*******************************************!*\
  !*** ./src/modules/dom/shipsPlacement.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomizeBoard\": () => (/* binding */ randomizeBoard),\n/* harmony export */   \"resetBoard\": () => (/* binding */ resetBoard)\n/* harmony export */ });\n/* harmony import */ var _gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardsScreen */ \"./src/modules/dom/gameboardsScreen.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/modules/dom/utils.js\");\n\r\n\r\n\r\nconst toggleShipOrientation = (shipLength, e) => {\r\n  const currShip = e.target;\r\n  const currOrientation = currShip.dataset.orientation;\r\n  if (currOrientation === 'horizontal') {\r\n    currShip.style.width = '3.5vmax';\r\n    currShip.style.height = `${shipLength * 3.5}vmax`;\r\n    currShip.dataset.orientation = 'vertical';\r\n    return;\r\n  }\r\n  currShip.style.height = '3.5vmax';\r\n  currShip.style.width = `${shipLength * 3.5}vmax`;\r\n  currShip.dataset.orientation = 'horizontal';\r\n};\r\n\r\nconst createShipsDOM = (ships) => {\r\n  const shipsContainer = document.createElement('div');\r\n  shipsContainer.id = 'port';\r\n  let prevShipLength = 0,\r\n    shipsCount = 0;\r\n  let shipContainer;\r\n  ships.forEach((ship) => {\r\n    const draggableShip = document.createElement('div');\r\n    draggableShip.id = shipsCount;\r\n    draggableShip.classList.add('draggable-ship');\r\n    draggableShip.setAttribute('draggable', 'true');\r\n    draggableShip.setAttribute('data-orientation', 'horizontal');\r\n    draggableShip.style.width = `${ship.length * 3.5}vmax`;\r\n    draggableShip.addEventListener(\r\n      'click',\r\n      toggleShipOrientation.bind(null, ship.length)\r\n    );\r\n    // to put ships of same length in one container\r\n    if (prevShipLength === ship.length) {\r\n      shipContainer.appendChild(draggableShip);\r\n    } else {\r\n      shipContainer = document.createElement('div');\r\n      shipContainer.classList.add('ship-container', `ship-size-${ship.length}`);\r\n      shipContainer.appendChild(draggableShip);\r\n    }\r\n    shipsCount++;\r\n    prevShipLength = ship.length;\r\n    shipsContainer.appendChild(shipContainer);\r\n  });\r\n  return shipsContainer;\r\n};\r\n\r\nconst renderAllShips = (placedShips) => {\r\n  const cells = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getGameboardCells)(0);\r\n  placedShips.forEach((placedShip) => {\r\n    (0,_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.renderShip)(placedShip, cells);\r\n  });\r\n};\r\n\r\nconst dragAndDropShips = (player, gameboard) => {\r\n  let draggedShip,\r\n    placedShipsCount = 0;\r\n  const draggableShips = document.querySelectorAll('.draggable-ship');\r\n  draggableShips.forEach((draggableShip) => {\r\n    draggableShip.addEventListener('dragstart', (e) => {\r\n      draggedShip = e.target;\r\n    });\r\n  });\r\n  gameboard.addEventListener('dragover', (e) => {\r\n    e.preventDefault();\r\n  });\r\n  gameboard.addEventListener('drop', (e) => {\r\n    const [x, y] = e.target.id.split('');\r\n    const placed = player.gameboard.placeShip(\r\n      player.ships[draggedShip.id],\r\n      Number(x),\r\n      Number(y),\r\n      draggedShip.dataset.orientation\r\n    );\r\n    if (placed) {\r\n      placedShipsCount++;\r\n      draggedShip.remove();\r\n      const placedShip = player.gameboard.placedShips[placedShipsCount - 1];\r\n      (0,_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.renderShip)(placedShip, [...gameboard.children]);\r\n    }\r\n    if (placedShipsCount === 10) {\r\n      const modal = document.querySelector('#modal');\r\n      modal.remove();\r\n      const placedShips = player.gameboard.placedShips;\r\n      renderAllShips(placedShips);\r\n      return;\r\n    }\r\n  });\r\n};\r\n\r\nconst resetBoard = (player) => {\r\n  player.gameboard.reset();\r\n  (0,_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.clearGameboard)();\r\n  const modal = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getModal)();\r\n  const tempGameboard = (0,_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.createGameboardDOM)(player.gameboard.size);\r\n  const shipsContainer = createShipsDOM(player.ships);\r\n  modal.appendChild(tempGameboard);\r\n  modal.appendChild(shipsContainer);\r\n  dragAndDropShips(player, tempGameboard);\r\n};\r\n\r\nconst randomizeBoard = (player) => {\r\n  (0,_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.clearGameboard)();\r\n  player.placeShipsRandomly();\r\n  const placedShips = player.gameboard.placedShips;\r\n  renderAllShips(placedShips);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom/shipsPlacement.js?");

/***/ }),

/***/ "./src/modules/dom/utils.js":
/*!**********************************!*\
  !*** ./src/modules/dom/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearMainContainer\": () => (/* binding */ clearMainContainer),\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"getGameboardCells\": () => (/* binding */ getGameboardCells),\n/* harmony export */   \"getModal\": () => (/* binding */ getModal),\n/* harmony export */   \"toggleVeil\": () => (/* binding */ toggleVeil)\n/* harmony export */ });\nconst clearMainContainer = () => {\r\n  const mainContainer = document.querySelector('#main-container');\r\n  mainContainer.innerHTML = '';\r\n};\r\n\r\nconst createButton = (btnContent, idValue) => {\r\n  const btn = document.createElement('button');\r\n  btn.textContent = btnContent;\r\n  btn.id = idValue;\r\n  btn.classList.add('btn', 'board-btn');\r\n  return btn;\r\n};\r\n\r\nconst getGameboardCells = (index) => {\r\n  const gameboards = document.querySelectorAll('.gameboard');\r\n  return [...gameboards[index].children];\r\n};\r\n\r\nconst getModal = () => {\r\n  const modal = document.createElement('div');\r\n  modal.id = 'modal';\r\n  const mainContainer = document.querySelector('#main-container');\r\n  mainContainer.appendChild(modal);\r\n  return modal;\r\n};\r\n\r\nconst toggleVeil = () => {\r\n  const veilElem = document.querySelector('.veil');\r\n  if (veilElem) {\r\n    veilElem.remove();\r\n    return;\r\n  }\r\n  const gameboard = document.querySelectorAll('.gameboard')[1];\r\n  gameboard.style.position = 'relative';\r\n  const veil = document.createElement('div');\r\n  veil.classList.add('veil');\r\n  const playButton = createButton('PLAY', 'play-btn');\r\n  veil.appendChild(playButton);\r\n  gameboard.appendChild(veil);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/dom/utils.js?");

/***/ }),

/***/ "./src/modules/game.js":
/*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom/gameboardsScreen */ \"./src/modules/dom/gameboardsScreen.js\");\n/* harmony import */ var _dom_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/utils */ \"./src/modules/dom/utils.js\");\n\r\n\r\n\r\nconst playTurns = async (human, bot, e) => {\r\n  let result;\r\n  result = human.play(bot, e.target.id, false);\r\n  (0,_dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.markCell)(result.coords, result.hit, 1);\r\n  if (result.win) {\r\n    console.log(human.name);\r\n    return;\r\n  }\r\n  await new Promise((resolve) => setTimeout(resolve, 1000));\r\n  result = bot.play(human, null, true);\r\n  (0,_dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.markCell)(result.coords, result.hit, 0);\r\n  if (result.win) {\r\n    console.log(bot.name);\r\n    return;\r\n  }\r\n};\r\n\r\nconst startManualMode = (human, bot) => {\r\n  const cells = (0,_dom_utils__WEBPACK_IMPORTED_MODULE_1__.getGameboardCells)(1);\r\n  cells.forEach((cell) => {\r\n    cell.addEventListener('click', playTurns.bind(null, human, bot), {\r\n      once: true,\r\n    });\r\n  });\r\n};\r\n\r\nconst game = (mode, human, bot) => {\r\n  (0,_dom_gameboardsScreen__WEBPACK_IMPORTED_MODULE_0__.removeBoardBtns)();\r\n  (0,_dom_utils__WEBPACK_IMPORTED_MODULE_1__.toggleVeil)();\r\n  if (mode === 'manual') {\r\n    startManualMode(human, bot);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/game.js?");

/***/ }),

/***/ "./src/modules/gameboardFactory.js":
/*!*****************************************!*\
  !*** ./src/modules/gameboardFactory.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst gameboardFactory = (size) => {\r\n  const placedShips = [];\r\n  const grid = new Array(size).fill(0).map(() => new Array(size).fill(0));\r\n  const missedShots = [];\r\n\r\n  const placeShip = (ship, x, y, orientation) => {\r\n    let coordinates = [];\r\n    // ṭo check that the ship gets placed within the board\r\n    if (x + ship.length > size || y + ship.length > size) {\r\n      return false;\r\n    }\r\n    for (let i = 0; i < ship.length; i++) {\r\n      let X = orientation === 'vertical' ? x + i : x;\r\n      let Y = orientation === 'vertical' ? y : y + i;\r\n      // to check if any ship is already placed at the coordinate\r\n      if (grid[X][Y] !== 0) {\r\n        return false;\r\n      }\r\n      grid[X][Y] = 1;\r\n      coordinates.push({ xCoord: X, yCoord: Y });\r\n    }\r\n    // to keep track of the placed ships\r\n    placedShips.push({ ship, orientation, coordinates });\r\n    return true;\r\n  };\r\n\r\n  const receiveAttack = (x, y) => {\r\n    if (grid[x][y] === 0) {\r\n      // to record the coordinates of the missed shot\r\n      missedShots.push({ x, y });\r\n      return false;\r\n    }\r\n    // to find the ship that was hit\r\n    const hitShipData = placedShips.find((placedShip) =>\r\n      placedShip.coordinates.some(\r\n        ({ xCoord, yCoord }) => xCoord === x && yCoord === y\r\n      )\r\n    );\r\n    hitShipData.ship.hit();\r\n    return true;\r\n  };\r\n\r\n  const isFleetSunk = () => {\r\n    return placedShips.every((placedShip) => placedShip.ship.isSunk());\r\n  };\r\n\r\n  const reset = () => {\r\n    grid.forEach((row) => {\r\n      row.forEach((cell, index) => {\r\n        row[index] = 0;\r\n      });\r\n    });\r\n    placedShips.length = 0;\r\n  };\r\n\r\n  return {\r\n    grid,\r\n    missedShots,\r\n    placedShips,\r\n    size,\r\n    isFleetSunk,\r\n    placeShip,\r\n    receiveAttack,\r\n    reset,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboardFactory);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboardFactory.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboardFactory */ \"./src/modules/gameboardFactory.js\");\n/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipFactory */ \"./src/modules/shipFactory.js\");\n\r\n\r\n\r\nconst player = (name, gameboardSize) => {\r\n  const gameboard = (0,_gameboardFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gameboardSize);\r\n  const attackedCoordinates = [];\r\n  const shipSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];\r\n  const ships = shipSizes.map((shipSize) => (0,_shipFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(shipSize));\r\n\r\n  const getCoords = (attackedCoords, clickedElem, random) => {\r\n    if (!random) {\r\n      return clickedElem.split('').map(Number);\r\n    }\r\n    let x, y;\r\n    do {\r\n      x = Math.floor(Math.random() * gameboardSize);\r\n      y = Math.floor(Math.random() * gameboardSize);\r\n    } while (\r\n      /* to ensure that the coordinates have not been attacked before. Thus, the loop\r\n      goes on until we get such coords */\r\n      attackedCoords.some((coords) => coords.x === x && coords.y === y)\r\n    );\r\n    // to keep track of the attacked coordinates, later used for generating new coords\r\n    attackedCoords.push({ x, y });\r\n    return [x, y];\r\n  };\r\n\r\n  const play = (enemy, clickedElem, random) => {\r\n    const [x, y] = getCoords(enemy.attackedCoordinates, clickedElem, random);\r\n    const hit = enemy.gameboard.receiveAttack(x, y);\r\n    let result = { coords: [x, y], hit, win: false };\r\n    if (enemy.gameboard.isFleetSunk()) {\r\n      result.win = true;\r\n    }\r\n    return result;\r\n  };\r\n\r\n  const placeShipsRandomly = () => {\r\n    // to remove previous placed ships (both from grid and placedShips array)\r\n    gameboard.reset();\r\n    ships.forEach((ship) => {\r\n      let placed = false;\r\n      while (!placed) {\r\n        let x = Math.floor(Math.random() * gameboardSize);\r\n        let y = Math.floor(Math.random() * gameboardSize);\r\n        let orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';\r\n        placed = gameboard.placeShip(ship, x, y, orientation);\r\n      }\r\n    });\r\n  };\r\n\r\n  return {\r\n    attackedCoordinates,\r\n    gameboard,\r\n    name,\r\n    ships,\r\n    placeShipsRandomly,\r\n    play,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/shipFactory.js":
/*!************************************!*\
  !*** ./src/modules/shipFactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst shipFactory = (length) => {\r\n  let hits = 0;\r\n  const hit = () => {\r\n    hits += 1;\r\n  };\r\n\r\n  const isSunk = () => {\r\n    return length === hits;\r\n  };\r\n\r\n  return {\r\n    length,\r\n    hit,\r\n    isSunk,\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipFactory);\r\n\n\n//# sourceURL=webpack://battleship/./src/modules/shipFactory.js?");

/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bg.jpg\";\n\n//# sourceURL=webpack://battleship/./src/assets/bg.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
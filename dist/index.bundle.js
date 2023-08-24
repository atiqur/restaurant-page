"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printContact: () => (/* binding */ printContact)
/* harmony export */ });
function printContact(name) {
    console.log(`contact.js has also been loaded ${name}`);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");



(0,_menu__WEBPACK_IMPORTED_MODULE_0__.printMenu)("Atiqur")
;(0,_contact__WEBPACK_IMPORTED_MODULE_1__.printContact)("Atiqur")

const div = document.createElement('div')
div.id = "content"
// const contentDiv = document.querySelector("div")
// console.log(contentDiv);
const h1 = document.createElement('h1')
h1.innerText = "Foodiz Resturant"
div.appendChild(h1)

document.querySelector("body").appendChild(div)

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   printMenu: () => (/* binding */ printMenu)
/* harmony export */ });
function printMenu(name) {
    console.log(`Hello ${name}, menu.js has loaded`);
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLG1EQUFtRCxLQUFLO0FBQ3hEOzs7Ozs7Ozs7Ozs7Ozs7QUNGa0M7QUFDTTs7QUFFeEMsZ0RBQVM7QUFDVCx1REFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHByaW50Q29udGFjdChuYW1lKSB7XG4gICAgY29uc29sZS5sb2coYGNvbnRhY3QuanMgaGFzIGFsc28gYmVlbiBsb2FkZWQgJHtuYW1lfWApO1xufVxuXG5leHBvcnQgeyBwcmludENvbnRhY3QgfSIsImltcG9ydCB7IHByaW50TWVudSB9IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHsgcHJpbnRDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXG5cbnByaW50TWVudShcIkF0aXF1clwiKVxucHJpbnRDb250YWN0KFwiQXRpcXVyXCIpXG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaXYuaWQgPSBcImNvbnRlbnRcIlxuLy8gY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJkaXZcIilcbi8vIGNvbnNvbGUubG9nKGNvbnRlbnREaXYpO1xuY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG5oMS5pbm5lclRleHQgPSBcIkZvb2RpeiBSZXN0dXJhbnRcIlxuZGl2LmFwcGVuZENoaWxkKGgxKVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5hcHBlbmRDaGlsZChkaXYpIiwiZnVuY3Rpb24gcHJpbnRNZW51KG5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhgSGVsbG8gJHtuYW1lfSwgbWVudS5qcyBoYXMgbG9hZGVkYCk7XG59XG5cbmV4cG9ydCB7IHByaW50TWVudSB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
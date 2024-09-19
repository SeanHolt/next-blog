"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Header = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const isActive = (pathname)=>router.pathname === pathname || router.pathname.startsWith(\"/p\") && pathname === \"/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"jsx-23cb334d4d9c2294\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-23cb334d4d9c2294\" + \" \" + \"left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/\",\n                        \"data-active\": isActive(\"/\"),\n                        className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                        children: \"Blog\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/drafts\",\n                        \"data-active\": isActive(\"/drafts\"),\n                        className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                        children: \"Drafts\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/about\",\n                        \"data-active\": isActive(\"/about\"),\n                        className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-23cb334d4d9c2294\" + \" \" + \"right\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/create\",\n                        \"data-active\": isActive(\"/create\"),\n                        className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                        children: \"+ Create\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, undefined),\n                    !session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"/signup\",\n                                \"data-active\": isActive(\"/signup\"),\n                                className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                                children: \"Signup\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(),\n                                \"data-active\": isActive(\"/auth/signin\"),\n                                className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link\",\n                                children: \"Sign In\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                        className: \"jsx-23cb334d4d9c2294\" + \" \" + \"link signout\",\n                        children: \"Sign Out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"23cb334d4d9c2294\",\n                children: 'nav.jsx-23cb334d4d9c2294{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;padding:2rem;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid gray}.link.jsx-23cb334d4d9c2294{text-decoration:none;color:#000;display:inline-block}.link.jsx-23cb334d4d9c2294+.link.jsx-23cb334d4d9c2294{margin-left:1rem}nav.jsx-23cb334d4d9c2294 .left.jsx-23cb334d4d9c2294 .link[data-active=\"true\"].jsx-23cb334d4d9c2294{color:gray;font-weight:bold}.bold.jsx-23cb334d4d9c2294{font-weight:bold}nav.jsx-23cb334d4d9c2294 .right.jsx-23cb334d4d9c2294{margin-left:auto}.right.jsx-23cb334d4d9c2294 a.jsx-23cb334d4d9c2294{border:1px solid black;padding:.5rem 1rem;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px}.right.jsx-23cb334d4d9c2294 .link[data-active=\"true\"].jsx-23cb334d4d9c2294{color:gray;font-weight:bold}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Header.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFFOUQsTUFBTUksU0FBbUI7SUFDdkIsTUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLE1BQU0sRUFBRU0sTUFBTUMsT0FBTyxFQUFFLEdBQUdKLDJEQUFVQTtJQUNwQyxNQUFNSyxXQUEwQyxDQUFDQyxXQUMvQ0osT0FBT0ksUUFBUSxLQUFLQSxZQUNuQkosT0FBT0ksUUFBUSxDQUFDQyxVQUFVLENBQUMsU0FBU0QsYUFBYTtJQUNwRCxxQkFDRSw4REFBQ0U7OzswQkFDQyw4REFBQ0M7MERBQWM7O2tDQUNiLDhEQUFDQzt3QkFBRUMsTUFBSzt3QkFBSUMsZUFBYVAsU0FBUztrRUFBZ0I7a0NBQU87Ozs7OztrQ0FHekQsOERBQUNLO3dCQUFtQkMsTUFBSzt3QkFBVUMsZUFBYVAsU0FBUztrRUFBNUM7a0NBQXdEOzs7Ozs7a0NBR3JFLDhEQUFDSzt3QkFBbUJDLE1BQUs7d0JBQVNDLGVBQWFQLFNBQVM7a0VBQTNDO2tDQUFzRDs7Ozs7Ozs7Ozs7OzBCQUlyRSw4REFBQ0k7MERBQWM7O2tDQUNiLDhEQUFDQzt3QkFBbUJDLE1BQUs7d0JBQVVDLGVBQWFQLFNBQVM7a0VBQTVDO2tDQUF3RDs7Ozs7O29CQUdwRSxDQUFDRCx3QkFDQTs7MENBQ0UsOERBQUNNO2dDQUVDQyxNQUFLO2dDQUNMQyxlQUFhUCxTQUFTOzBFQUZaOzBDQUdYOzs7Ozs7MENBR0QsOERBQUNLO2dDQUFtQkMsTUFBSztnQ0FBSUUsU0FBUyxJQUFNZix1REFBTUE7Z0NBQUljLGVBQWFQLFNBQVM7MEVBQS9EOzBDQUFnRjs7Ozs7OztxREFLL0YsOERBQUNLO3dCQUEyQkMsTUFBSzt3QkFBSUUsU0FBUyxJQUFNZCx3REFBT0E7a0VBQTlDO2tDQUFrRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDekU7QUFDQSxpRUFBZUUsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3JlYWN0LWJsb2cvLi9jb21wb25lbnRzL0hlYWRlci50c3g/MDM2OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxuY29uc3QgSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCBpc0FjdGl2ZTogKHBhdGhuYW1lOiBzdHJpbmcpID0+IGJvb2xlYW4gPSAocGF0aG5hbWUpID0+XHJcbiAgICByb3V0ZXIucGF0aG5hbWUgPT09IHBhdGhuYW1lIHx8XHJcbiAgICAocm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvcFwiKSAmJiBwYXRobmFtZSA9PT0gXCIvXCIpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cclxuICAgICAgICA8YSBocmVmPVwiL1wiIGRhdGEtYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9IGNsYXNzTmFtZT1cImxpbmtcIj5cclxuICAgICAgICAgIEJsb2dcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIvZHJhZnRzXCIgZGF0YS1hY3RpdmU9e2lzQWN0aXZlKFwiL2RyYWZ0c1wiKX0+XHJcbiAgICAgICAgICBEcmFmdHNcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIvYWJvdXRcIiBkYXRhLWFjdGl2ZT17aXNBY3RpdmUoXCIvYWJvdXRcIil9PlxyXG4gICAgICAgICAgQWJvdXRcclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIvY3JlYXRlXCIgZGF0YS1hY3RpdmU9e2lzQWN0aXZlKFwiL2NyZWF0ZVwiKX0+XHJcbiAgICAgICAgICArIENyZWF0ZVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICB7IXNlc3Npb24gPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpbmtcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvc2lnbnVwXCJcclxuICAgICAgICAgICAgICBkYXRhLWFjdGl2ZT17aXNBY3RpdmUoXCIvc2lnbnVwXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgU2lnbnVwXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4gc2lnbkluKCl9IGRhdGEtYWN0aXZlPXtpc0FjdGl2ZShcIi9hdXRoL3NpZ25pblwiKX0+XHJcbiAgICAgICAgICAgICAgU2lnbiBJblxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGluayBzaWdub3V0XCIgaHJlZj1cIiNcIiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlxyXG4gICAgICAgICAgICBTaWduIE91dFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgbmF2IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGluayB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpbmsgKyAubGluayB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmF2IC5sZWZ0IC5saW5rW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB7XHJcbiAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvbGQge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5hdiAucmlnaHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucmlnaHQgYSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmlnaHQgLmxpbmtbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIHtcclxuICAgICAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJIZWFkZXIiLCJyb3V0ZXIiLCJkYXRhIiwic2Vzc2lvbiIsImlzQWN0aXZlIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwibmF2IiwiZGl2IiwiYSIsImhyZWYiLCJkYXRhLWFjdGl2ZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.tsx\n");

/***/ }),

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.tsx\");\n\n\n\n\nconst Layout = (props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-9e45a83c86e9b510\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 13,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-9e45a83c86e9b510\" + \" \" + \"layout\",\n                children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9e45a83c86e9b510\",\n                children: 'html.jsx-9e45a83c86e9b510{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}*.jsx-9e45a83c86e9b510,*.jsx-9e45a83c86e9b510:before,*.jsx-9e45a83c86e9b510:after{-webkit-box-sizing:inherit;-moz-box-sizing:inherit;box-sizing:inherit}body.jsx-9e45a83c86e9b510{margin:0;padding:0;font-size:16px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";background:rgba(0,0,0,.05)}input.jsx-9e45a83c86e9b510,textarea.jsx-9e45a83c86e9b510{font-size:16px}button.jsx-9e45a83c86e9b510{cursor:pointer}.layout.jsx-9e45a83c86e9b510{padding:0 2rem}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\components\\\\Layout.tsx\",\n        lineNumber: 12,\n        columnNumber: 3\n    }, undefined);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNDO0FBUzFDLE1BQU1FLFNBQTBCLENBQUNDLHNCQUMvQiw4REFBQ0M7OzswQkFDQyw4REFBQ0gsMERBQU1BOzs7OzswQkFDUCw4REFBQ0c7MERBQWM7MEJBQVVELE1BQU1FLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzNDLGlFQUFlSCxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IHsgU2Vzc2lvblByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIHNlc3Npb24/OiBTZXNzaW9uO1xyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0OiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPEhlYWRlciAvPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsYXlvdXRcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIGh0bWwge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgKixcclxuICAgICAgKjpiZWZvcmUsXHJcbiAgICAgICo6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLFxyXG4gICAgICAgICAgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsXHJcbiAgICAgICAgICBcIlNlZ29lIFVJIFN5bWJvbFwiO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQsXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmxheW91dCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsIkxheW91dCIsInByb3BzIiwiZGl2IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App),\n/* harmony export */   metadata: () => (/* binding */ metadata)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst metadata = {\n    title: {\n        template: \"%s | NextBlog\",\n        default: \"NextBlog\"\n    }\n};\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: pageProps.session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5QztBQUVTO0FBRzNDLE1BQU1FLFdBQXFCO0lBQ2hDQyxPQUFPO1FBQ0xDLFVBQVU7UUFDVkMsU0FBUztJQUNYO0FBQ0YsRUFBRTtBQUNhLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0UsOERBQUNQLDREQUFlQTtRQUFDUSxTQUFTRCxVQUFVQyxPQUFPO2tCQUN6Qyw0RUFBQ1QsMERBQU1BO3NCQUNMLDRFQUFDTztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3QtYmxvZy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7fTtcclxuZXhwb3J0IGNvbnN0IG1ldGFkYXRhOiBNZXRhZGF0YSA9IHtcclxuICB0aXRsZToge1xyXG4gICAgdGVtcGxhdGU6IFwiJXMgfCBOZXh0QmxvZ1wiLFxyXG4gICAgZGVmYXVsdDogXCJOZXh0QmxvZ1wiLFxyXG4gIH0sXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxheW91dCIsIlNlc3Npb25Qcm92aWRlciIsIm1ldGFkYXRhIiwidGl0bGUiLCJ0ZW1wbGF0ZSIsImRlZmF1bHQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();
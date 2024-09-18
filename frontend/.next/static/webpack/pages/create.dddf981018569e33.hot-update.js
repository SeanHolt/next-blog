"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./pages/create.tsx":
/*!**************************!*\
  !*** ./pages/create.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LinkButton */ \"./components/LinkButton.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/fetch */ \"./lib/fetch.ts\");\n/* harmony import */ var md_editor_rt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! md-editor-rt */ \"./node_modules/md-editor-rt/lib/es/chunks/Editor.mjs\");\n/* harmony import */ var md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md-editor-rt/lib/style.css */ \"./node_modules/md-editor-rt/lib/style.css\");\n/* harmony import */ var md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Draft = ()=>{\n    var _session_user;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"**Hello world!!!**\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const submitData = async (e)=>{\n        e.preventDefault();\n        try {\n            var _session_user;\n            const body = {\n                title,\n                content: text,\n                authorEmail: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email\n            };\n            if (body.authorEmail) {\n                await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_6__.fetchPost)(\"post\", body);\n                await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/drafts\");\n            } else {\n                setError(\"No email sent.\");\n            }\n        } catch (err) {\n            console.error(err);\n            setError(err);\n        }\n    };\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-1b420fc81e599013\",\n                    children: \"NextBlog | Create\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1b420fc81e599013\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-1b420fc81e599013\",\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-1b420fc81e599013\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: submitData,\n                        className: \"jsx-1b420fc81e599013\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-1b420fc81e599013\",\n                                children: \"Create Draft\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                autoFocus: true,\n                                onChange: (e)=>setTitle(e.target.value),\n                                placeholder: \"Title\",\n                                type: \"text\",\n                                value: title,\n                                className: \"jsx-1b420fc81e599013\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(md_editor_rt__WEBPACK_IMPORTED_MODULE_9__.E, {\n                                language: \"en-US\",\n                                editorId: \"editorId\",\n                                modelValue: text,\n                                onChange: setText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-1b420fc81e599013\" + \" \" + \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        disabled: !text || !title || !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email),\n                                        type: \"submit\",\n                                        value: \"Create\",\n                                        className: \"jsx-1b420fc81e599013\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {\n                                        className: \"back\",\n                                        href: \"#\",\n                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\"),\n                                        text: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1b420fc81e599013\",\n                children: '.buttons.jsx-1b420fc81e599013{margin-top:8px}p.error.jsx-1b420fc81e599013{padding:3rem;border:1px solid red;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.page.jsx-1b420fc81e599013{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}input[type=\"text\"].jsx-1b420fc81e599013,textarea.jsx-1b420fc81e599013{width:100%;padding:.5rem;margin:.5rem 0;-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;border:.125rem solid rgba(0,0,0,.2)}input[type=\"submit\"].jsx-1b420fc81e599013{background:#ececec;border:0;padding:1rem 2rem}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Not authorized\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n        lineNumber: 97,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Draft, \"sXpBJKFsCBHez/3z+4iJcfBKRTc=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = Draft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Draft);\nvar _c;\n$RefreshReg$(_c, \"Draft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0E7QUFDcUI7QUFDVDtBQUNMO0FBQ0E7QUFDSjtBQUNQO0FBRTdCLE1BQU1PLFFBQWtCO1FBNkN5QkM7O0lBNUMvQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sRUFBRVksTUFBTUwsT0FBTyxFQUFFTSxNQUFNLEVBQUUsR0FBR1gsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ1ksT0FBT0MsU0FBUyxHQUFHZiwrQ0FBUUEsQ0FBUztJQUUzQyxNQUFNZ0IsYUFBYSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO2dCQUNnRFg7WUFBbEQsTUFBTVksT0FBTztnQkFBRVQ7Z0JBQU9VLFNBQVNaO2dCQUFNYSxXQUFXLEVBQUVkLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNlLElBQUksY0FBYmYsb0NBQUFBLGNBQWVnQixLQUFLO1lBQUM7WUFDdkUsSUFBSUosS0FBS0UsV0FBVyxFQUFFO2dCQUNwQixNQUFNbEIscURBQVNBLENBQUMsUUFBUWdCO2dCQUN4QixNQUFNcEIsdURBQVcsQ0FBQztZQUNwQixPQUFPO2dCQUNMZ0IsU0FBUztZQUNYO1FBQ0YsRUFBRSxPQUFPVSxLQUFVO1lBQ2pCQyxRQUFRWixLQUFLLENBQUNXO1lBQ2RWLFNBQVNVO1FBQ1g7SUFDRjtJQUNBLE9BQU9sQix3QkFDTDs7MEJBQ0UsOERBQUNGLGtEQUFJQTswQkFDSCw0RUFBQ0s7OzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ2lCOzBEQUFjOztrQ0FDYiw4REFBQ0M7O2tDQUFHZjs7Ozs7O29CQUNIQyx1QkFBUyw4REFBQ2M7O2tDQUFHZDs7Ozs7O2tDQUNkLDhEQUFDZTt3QkFBS0MsVUFBVWQ7OzswQ0FDZCw4REFBQ2U7OzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUNDQyxTQUFTO2dDQUNUQyxVQUFVLENBQUNqQixJQUFNTixTQUFTTSxFQUFFa0IsTUFBTSxDQUFDQyxLQUFLO2dDQUN4Q0MsYUFBWTtnQ0FDWkMsTUFBSztnQ0FDTEYsT0FBTzFCOzs7Ozs7OzBDQUVULDhEQUFDTiwyQ0FBUUE7Z0NBQ1BtQyxVQUFTO2dDQUNUQyxVQUFTO2dDQUNUQyxZQUFZakM7Z0NBQ1owQixVQUFVekI7Ozs7OzswQ0FFWiw4REFBQ2tCOzBFQUFjOztrREFDYiw4REFBQ0s7d0NBQU1VLFVBQVUsQ0FBQ2xDLFFBQVEsQ0FBQ0UsU0FBUyxFQUFDSCxvQkFBQUEsK0JBQUFBLGdCQUFBQSxRQUFTZSxJQUFJLGNBQWJmLG9DQUFBQSxjQUFlZ0IsS0FBSzt3Q0FBRWUsTUFBSzt3Q0FBU0YsT0FBTTs7Ozs7OztrREFDL0UsOERBQUNuQyw4REFBVUE7d0NBQ1QwQyxXQUFVO3dDQUNWQyxNQUFLO3dDQUNMQyxTQUFTLElBQU05Qyx1REFBVyxDQUFDO3dDQUMzQlMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUNmLDhEQUFDb0I7a0JBQUU7Ozs7OztBQUVQO0dBekZNdEI7O1FBRzhCSix1REFBVUE7OztLQUh4Q0k7QUEwRk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLnRzeD8yMWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCJAL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgeyBNZEVkaXRvciB9IGZyb20gXCJtZC1lZGl0b3ItcnRcIjtcclxuaW1wb3J0IFwibWQtZWRpdG9yLXJ0L2xpYi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgRHJhZnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCIqKkhlbGxvIHdvcmxkISEhKipcIik7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG5cclxuICBjb25zdCBzdWJtaXREYXRhID0gYXN5bmMgKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBib2R5ID0geyB0aXRsZSwgY29udGVudDogdGV4dCwgYXV0aG9yRW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsIH07XHJcbiAgICAgIGlmIChib2R5LmF1dGhvckVtYWlsKSB7XHJcbiAgICAgICAgYXdhaXQgZmV0Y2hQb3N0KFwicG9zdFwiLCBib2R5KTtcclxuICAgICAgICBhd2FpdCBSb3V0ZXIucHVzaChcIi9kcmFmdHNcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0RXJyb3IoXCJObyBlbWFpbCBzZW50LlwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICBzZXRFcnJvcihlcnIpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHNlc3Npb24gPyAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmV4dEJsb2cgfCBDcmVhdGU8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxwPntzdGF0dXN9PC9wPlxyXG4gICAgICAgIHtlcnJvciAmJiA8cD57ZXJyb3J9PC9wPn1cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0RGF0YX0+XHJcbiAgICAgICAgICA8aDE+Q3JlYXRlIERyYWZ0PC9oMT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt0aXRsZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8TWRFZGl0b3JcclxuICAgICAgICAgICAgbGFuZ3VhZ2U9XCJlbi1VU1wiXHJcbiAgICAgICAgICAgIGVkaXRvcklkPVwiZWRpdG9ySWRcIlxyXG4gICAgICAgICAgICBtb2RlbFZhbHVlPXt0ZXh0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17c2V0VGV4dH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgPGlucHV0IGRpc2FibGVkPXshdGV4dCB8fCAhdGl0bGUgfHwgIXNlc3Npb24/LnVzZXI/LmVtYWlsfSB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDcmVhdGVcIiAvPlxyXG4gICAgICAgICAgICA8TGlua0J1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tcIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9cIil9XHJcbiAgICAgICAgICAgICAgdGV4dD1cIkNhbmNlbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwLmVycm9yIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wYWdlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgICAgICAgICBib3JkZXI6IDAuMTI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKSA6IChcclxuICAgIDxwPk5vdCBhdXRob3JpemVkPC9wPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IERyYWZ0O1xyXG4iXSwibmFtZXMiOlsiUm91dGVyIiwidXNlU3RhdGUiLCJMaW5rQnV0dG9uIiwidXNlU2Vzc2lvbiIsImZldGNoUG9zdCIsIk1kRWRpdG9yIiwiSGVhZCIsIkRyYWZ0Iiwic2Vzc2lvbiIsInRleHQiLCJzZXRUZXh0IiwidGl0bGUiLCJzZXRUaXRsZSIsImRhdGEiLCJzdGF0dXMiLCJlcnJvciIsInNldEVycm9yIiwic3VibWl0RGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJjb250ZW50IiwiYXV0aG9yRW1haWwiLCJ1c2VyIiwiZW1haWwiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImRpdiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJoMSIsImlucHV0IiwiYXV0b0ZvY3VzIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwidHlwZSIsImxhbmd1YWdlIiwiZWRpdG9ySWQiLCJtb2RlbFZhbHVlIiwiZGlzYWJsZWQiLCJjbGFzc05hbWUiLCJocmVmIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/create.tsx\n"));

/***/ })

});
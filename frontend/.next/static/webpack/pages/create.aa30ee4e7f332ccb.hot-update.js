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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LinkButton */ \"./components/LinkButton.tsx\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/fetch */ \"./lib/fetch.ts\");\n/* harmony import */ var md_editor_rt__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! md-editor-rt */ \"./node_modules/md-editor-rt/lib/es/chunks/Editor.mjs\");\n/* harmony import */ var md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! md-editor-rt/lib/style.css */ \"./node_modules/md-editor-rt/lib/style.css\");\n/* harmony import */ var md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(md_editor_rt_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Draft = ()=>{\n    var _session_user;\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"**Hello world!!!**\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const submitData = async (e)=>{\n        e.preventDefault();\n        try {\n            var _session_user;\n            const body = {\n                title,\n                content: text,\n                authorEmail: session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email\n            };\n            if (body.authorEmail) {\n                await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_6__.fetchPost)(\"post\", body);\n                await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/drafts\");\n            } else {\n                setError(\"No email sent.\");\n            }\n        } catch (err) {\n            console.error(err);\n            setError(err);\n        }\n    };\n    return session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-1b420fc81e599013\",\n                    children: \"NextBlog | Create\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-1b420fc81e599013\" + \" \" + \"page\",\n                children: [\n                    error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-1b420fc81e599013\",\n                        children: error\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: submitData,\n                        className: \"jsx-1b420fc81e599013\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-1b420fc81e599013\",\n                                children: \"Create Draft\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                autoFocus: true,\n                                onChange: (e)=>setTitle(e.target.value),\n                                placeholder: \"Title\",\n                                type: \"text\",\n                                value: title,\n                                className: \"jsx-1b420fc81e599013\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(md_editor_rt__WEBPACK_IMPORTED_MODULE_9__.E, {\n                                language: \"en-US\",\n                                editorId: \"editorId\",\n                                modelValue: text,\n                                onChange: setText\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-1b420fc81e599013\" + \" \" + \"buttons\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        disabled: !text || !title || !(session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.email),\n                                        type: \"submit\",\n                                        value: \"Create\",\n                                        className: \"jsx-1b420fc81e599013\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_LinkButton__WEBPACK_IMPORTED_MODULE_4__.LinkButton, {\n                                        className: \"back\",\n                                        href: \"#\",\n                                        onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\"),\n                                        text: \"Cancel\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"1b420fc81e599013\",\n                children: '.buttons.jsx-1b420fc81e599013{margin-top:8px}p.error.jsx-1b420fc81e599013{padding:3rem;border:1px solid red;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.page.jsx-1b420fc81e599013{background:white;padding:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}input[type=\"text\"].jsx-1b420fc81e599013,textarea.jsx-1b420fc81e599013{width:100%;padding:.5rem;margin:.5rem 0;-webkit-border-radius:.25rem;-moz-border-radius:.25rem;border-radius:.25rem;border:.125rem solid rgba(0,0,0,.2)}input[type=\"submit\"].jsx-1b420fc81e599013{background:#ececec;border:0;padding:1rem 2rem}'\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Not authorized\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\create.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Draft, \"jlThNYvajKIQ2ILpqS0z8RhPOMg=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession\n    ];\n});\n_c = Draft;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Draft);\nvar _c;\n$RefreshReg$(_c, \"Draft\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0E7QUFDcUI7QUFDVDtBQUNMO0FBQ0E7QUFDSjtBQUNQO0FBRTdCLE1BQU1PLFFBQWtCO1FBNEN5QkM7O0lBM0MvQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQVM7SUFDekMsTUFBTSxDQUFDVSxPQUFPQyxTQUFTLEdBQUdYLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sRUFBRVksTUFBTUwsT0FBTyxFQUFFLEdBQUdMLDJEQUFVQTtJQUNwQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR2QsK0NBQVFBLENBQVM7SUFFM0MsTUFBTWUsYUFBYSxPQUFPQztRQUN4QkEsRUFBRUMsY0FBYztRQUNoQixJQUFJO2dCQUNnRFY7WUFBbEQsTUFBTVcsT0FBTztnQkFBRVI7Z0JBQU9TLFNBQVNYO2dCQUFNWSxXQUFXLEVBQUViLG9CQUFBQSwrQkFBQUEsZ0JBQUFBLFFBQVNjLElBQUksY0FBYmQsb0NBQUFBLGNBQWVlLEtBQUs7WUFBQztZQUN2RSxJQUFJSixLQUFLRSxXQUFXLEVBQUU7Z0JBQ3BCLE1BQU1qQixxREFBU0EsQ0FBQyxRQUFRZTtnQkFDeEIsTUFBTW5CLHVEQUFXLENBQUM7WUFDcEIsT0FBTztnQkFDTGUsU0FBUztZQUNYO1FBQ0YsRUFBRSxPQUFPVSxLQUFVO1lBQ2pCQyxRQUFRWixLQUFLLENBQUNXO1lBQ2RWLFNBQVNVO1FBQ1g7SUFDRjtJQUNBLE9BQU9qQix3QkFDTDs7MEJBQ0UsOERBQUNGLGtEQUFJQTswQkFDSCw0RUFBQ0s7OzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ2dCOzBEQUFjOztvQkFDWmIsdUJBQVMsOERBQUNjOztrQ0FBR2Q7Ozs7OztrQ0FDZCw4REFBQ2U7d0JBQUtDLFVBQVVkOzs7MENBQ2QsOERBQUNlOzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FDQ0MsU0FBUztnQ0FDVEMsVUFBVSxDQUFDakIsSUFBTUwsU0FBU0ssRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDeENDLGFBQVk7Z0NBQ1pDLE1BQUs7Z0NBQ0xGLE9BQU96Qjs7Ozs7OzswQ0FFVCw4REFBQ04sMkNBQVFBO2dDQUNQa0MsVUFBUztnQ0FDVEMsVUFBUztnQ0FDVEMsWUFBWWhDO2dDQUNaeUIsVUFBVXhCOzs7Ozs7MENBRVosOERBQUNpQjswRUFBYzs7a0RBQ2IsOERBQUNLO3dDQUFNVSxVQUFVLENBQUNqQyxRQUFRLENBQUNFLFNBQVMsRUFBQ0gsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBU2MsSUFBSSxjQUFiZCxvQ0FBQUEsY0FBZWUsS0FBSzt3Q0FBRWUsTUFBSzt3Q0FBU0YsT0FBTTs7Ozs7OztrREFDL0UsOERBQUNsQyw4REFBVUE7d0NBQ1R5QyxXQUFVO3dDQUNWQyxNQUFLO3dDQUNMQyxTQUFTLElBQU03Qyx1REFBVyxDQUFDO3dDQUMzQlMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBcUNmLDhEQUFDbUI7a0JBQUU7Ozs7OztBQUVQO0dBeEZNckI7O1FBR3NCSix1REFBVUE7OztLQUhoQ0k7QUF5Rk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3JlYXRlLnRzeD8yMWJjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExpbmtCdXR0b24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaW5rQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IGZldGNoUG9zdCB9IGZyb20gXCJAL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgeyBNZEVkaXRvciB9IGZyb20gXCJtZC1lZGl0b3ItcnRcIjtcclxuaW1wb3J0IFwibWQtZWRpdG9yLXJ0L2xpYi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuY29uc3QgRHJhZnQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlPHN0cmluZz4oXCIqKkhlbGxvIHdvcmxkISEhKipcIik7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xyXG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuXHJcbiAgY29uc3Qgc3VibWl0RGF0YSA9IGFzeW5jIChlOiBSZWFjdC5TeW50aGV0aWNFdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgYm9keSA9IHsgdGl0bGUsIGNvbnRlbnQ6IHRleHQsIGF1dGhvckVtYWlsOiBzZXNzaW9uPy51c2VyPy5lbWFpbCB9O1xyXG4gICAgICBpZiAoYm9keS5hdXRob3JFbWFpbCkge1xyXG4gICAgICAgIGF3YWl0IGZldGNoUG9zdChcInBvc3RcIiwgYm9keSk7XHJcbiAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goXCIvZHJhZnRzXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldEVycm9yKFwiTm8gZW1haWwgc2VudC5cIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgc2V0RXJyb3IoZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiBzZXNzaW9uID8gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPk5leHRCbG9nIHwgQ3JlYXRlPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHA+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdERhdGF9PlxyXG4gICAgICAgICAgPGgxPkNyZWF0ZSBEcmFmdDwvaDE+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPE1kRWRpdG9yXHJcbiAgICAgICAgICAgIGxhbmd1YWdlPVwiZW4tVVNcIlxyXG4gICAgICAgICAgICBlZGl0b3JJZD1cImVkaXRvcklkXCJcclxuICAgICAgICAgICAgbW9kZWxWYWx1ZT17dGV4dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3NldFRleHR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCBkaXNhYmxlZD17IXRleHQgfHwgIXRpdGxlIHx8ICFzZXNzaW9uPy51c2VyPy5lbWFpbH0gdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ3JlYXRlXCIgLz5cclxuICAgICAgICAgICAgPExpbmtCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrXCJcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goXCIvXCIpfVxyXG4gICAgICAgICAgICAgIHRleHQ9XCJDYW5jZWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5idXR0b25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcC5lcnJvciB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4gICAgICAgICAgYm9yZGVyOiAwLjEyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VjZWNlYztcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICkgOiAoXHJcbiAgICA8cD5Ob3QgYXV0aG9yaXplZDwvcD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBEcmFmdDtcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsInVzZVN0YXRlIiwiTGlua0J1dHRvbiIsInVzZVNlc3Npb24iLCJmZXRjaFBvc3QiLCJNZEVkaXRvciIsIkhlYWQiLCJEcmFmdCIsInNlc3Npb24iLCJ0ZXh0Iiwic2V0VGV4dCIsInRpdGxlIiwic2V0VGl0bGUiLCJkYXRhIiwiZXJyb3IiLCJzZXRFcnJvciIsInN1Ym1pdERhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwiY29udGVudCIsImF1dGhvckVtYWlsIiwidXNlciIsImVtYWlsIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJkaXYiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwiaDEiLCJpbnB1dCIsImF1dG9Gb2N1cyIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJsYW5ndWFnZSIsImVkaXRvcklkIiwibW9kZWxWYWx1ZSIsImRpc2FibGVkIiwiY2xhc3NOYW1lIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/create.tsx\n"));

/***/ })

});
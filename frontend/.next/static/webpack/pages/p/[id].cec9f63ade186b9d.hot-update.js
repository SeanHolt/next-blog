"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/p/[id]",{

/***/ "./pages/p/[id].tsx":
/*!**************************!*\
  !*** ./pages/p/[id].tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/fetch */ \"./lib/fetch.ts\");\n/* harmony import */ var _components_AddComment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AddComment */ \"./components/AddComment.tsx\");\n/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Comments */ \"./components/Comments.tsx\");\n/* harmony import */ var md_editor_rt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! md-editor-rt */ \"./node_modules/md-editor-rt/lib/es/MdPreview.mjs\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nconst Post = (props)=>{\n    var _props_post_author;\n    if (!props || !props.post || !props.post.author) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"ERROR : No post supplied\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n        lineNumber: 15,\n        columnNumber: 59\n    }, undefined);\n    let title = !props.post.published ? \"\".concat(props.post.title, \" (Draft)\") : props.post.title;\n    const destroy = async (id)=>{\n        await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchDelete)(\"post/\".concat(id));\n        return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n    };\n    const publish = async (id)=>{\n        await (0,_lib_fetch__WEBPACK_IMPORTED_MODULE_4__.fetchPut)(\"publish/\".concat(id));\n        return next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/drafts\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-3b2e643989235275\",\n                    children: [\n                        props.post.title,\n                        \" | NextBlog\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-3b2e643989235275\" + \" \" + \"page\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-3b2e643989235275\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-3b2e643989235275\",\n                        children: [\n                            \"By \",\n                            ((_props_post_author = props.post.author) === null || _props_post_author === void 0 ? void 0 : _props_post_author.name) || \"Unknown author\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(md_editor_rt__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        previewTheme: \"dark\",\n                        editorId: \"editorId\",\n                        modelValue: props.post.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-3b2e643989235275\" + \" \" + \"actions\",\n                        children: [\n                            !props.post.published && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>publish(props.post.id),\n                                className: \"jsx-3b2e643989235275\",\n                                children: \"Publish\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>destroy(props.post.id),\n                                className: \"jsx-3b2e643989235275\",\n                                children: \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"jsx-3b2e643989235275\",\n                children: \"Comments\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddComment__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                postId: props.post.id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Comments__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                comments: props.post.comments\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lisa Holt\\\\Desktop\\\\Seans\\\\code\\\\react-express-blog\\\\frontend\\\\pages\\\\p\\\\[id].tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3b2e643989235275\",\n                children: \".page.jsx-3b2e643989235275{background:white;padding:2rem}.actions.jsx-3b2e643989235275{margin-top:2rem}button.jsx-3b2e643989235275{background:#ececec;border:0;-webkit-border-radius:.125rem;-moz-border-radius:.125rem;border-radius:.125rem;padding:1rem 2rem}button.jsx-3b2e643989235275+button.jsx-3b2e643989235275{margin-left:1rem}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true);\n};\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wL1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUVvQztBQUViO0FBQ0o7QUFDSjtBQUNaO0FBSzdCLE1BQU1RLE9BQXdCLENBQUNDO1FBb0JoQkE7SUFuQmIsSUFBSSxDQUFDQSxTQUFTLENBQUNBLE1BQU1DLElBQUksSUFBSSxDQUFDRCxNQUFNQyxJQUFJLENBQUNDLE1BQU0sRUFBRSxxQkFBTyw4REFBQ0M7a0JBQUU7Ozs7OztJQUMzRCxJQUFJQyxRQUFRLENBQUNKLE1BQU1DLElBQUksQ0FBQ0ksU0FBUyxHQUM3QixHQUFvQixPQUFqQkwsTUFBTUMsSUFBSSxDQUFDRyxLQUFLLEVBQUMsY0FDcEJKLE1BQU1DLElBQUksQ0FBQ0csS0FBSztJQUNwQixNQUFNRSxVQUFVLE9BQU9DO1FBQ3JCLE1BQU1kLHVEQUFXQSxDQUFDLFFBQVcsT0FBSGM7UUFDMUIsT0FBT2hCLHVEQUFXLENBQUM7SUFDckI7SUFDQSxNQUFNa0IsVUFBVSxPQUFPRjtRQUNyQixNQUFNYixvREFBUUEsQ0FBQyxXQUFjLE9BQUhhO1FBQzFCLE9BQU9oQix1REFBVyxDQUFDO0lBQ3JCO0lBQ0EscUJBQ0U7OzBCQUNFLDhEQUFDTyxrREFBSUE7MEJBQ0gsNEVBQUNNOzs7d0JBQU9KLE1BQU1DLElBQUksQ0FBQ0csS0FBSzt3QkFBQzs7Ozs7Ozs7Ozs7OzBCQUUzQiw4REFBQ007MERBQWM7O2tDQUNiLDhEQUFDQzs7a0NBQUlQOzs7Ozs7a0NBQ0wsOERBQUNEOzs7NEJBQUU7NEJBQUlILEVBQUFBLHFCQUFBQSxNQUFNQyxJQUFJLENBQUNDLE1BQU0sY0FBakJGLHlDQUFBQSxtQkFBbUJZLElBQUksS0FBSTs7Ozs7OztrQ0FDbEMsOERBQUNmLG9EQUFTQTt3QkFDUmdCLGNBQWE7d0JBQ2JDLFVBQVM7d0JBQ1RDLFlBQVlmLE1BQU1DLElBQUksQ0FBQ2UsT0FBTzs7Ozs7O2tDQUVoQyw4REFBQ047a0VBQWM7OzRCQUNaLENBQUNWLE1BQU1DLElBQUksQ0FBQ0ksU0FBUyxrQkFDcEIsOERBQUNZO2dDQUFPQyxTQUFTLElBQU1ULFFBQVFULE1BQU1DLElBQUksQ0FBQ00sRUFBRTs7MENBQUc7Ozs7OzswQ0FFakQsOERBQUNVO2dDQUFPQyxTQUFTLElBQU1aLFFBQVFOLE1BQU1DLElBQUksQ0FBQ00sRUFBRTs7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkQsOERBQUNZOzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDeEIsOERBQVVBO2dCQUFDeUIsUUFBUXBCLE1BQU1DLElBQUksQ0FBQ00sRUFBRTs7Ozs7OzBCQUNqQyw4REFBQ1gsNERBQVFBO2dCQUFDeUIsVUFBVXJCLE1BQU1DLElBQUksQ0FBQ29CLFFBQVE7Ozs7Ozs7Ozs7OztBQXFCN0M7S0F4RE10Qjs7QUE4RE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcC9baWRdLnRzeD80Mzk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgZmV0Y2hEZWxldGUsIGZldGNoR2V0LCBmZXRjaFB1dCB9IGZyb20gXCJAL2xpYi9mZXRjaFwiO1xyXG5pbXBvcnQgeyBQb3N0Q29tbWVudCwgdHlwZSBQb3N0IGFzIFBvc3RUeXBlIH0gZnJvbSBcIkAvbGliL3R5cGVzXCI7XHJcbmltcG9ydCBBZGRDb21tZW50IGZyb20gXCJAL2NvbXBvbmVudHMvQWRkQ29tbWVudFwiO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSBcIkAvY29tcG9uZW50cy9Db21tZW50c1wiO1xyXG5pbXBvcnQgeyBNZFByZXZpZXcgfSBmcm9tIFwibWQtZWRpdG9yLXJ0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcG9zdDogUG9zdFR5cGU7XHJcbn07XHJcbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGlmICghcHJvcHMgfHwgIXByb3BzLnBvc3QgfHwgIXByb3BzLnBvc3QuYXV0aG9yKSByZXR1cm4gPHA+RVJST1IgOiBObyBwb3N0IHN1cHBsaWVkPC9wPjtcclxuICBsZXQgdGl0bGUgPSAhcHJvcHMucG9zdC5wdWJsaXNoZWRcclxuICAgID8gYCR7cHJvcHMucG9zdC50aXRsZX0gKERyYWZ0KWBcclxuICAgIDogcHJvcHMucG9zdC50aXRsZTtcclxuICBjb25zdCBkZXN0cm95ID0gYXN5bmMgKGlkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcclxuICAgIGF3YWl0IGZldGNoRGVsZXRlKGBwb3N0LyR7aWR9YCk7XHJcbiAgICByZXR1cm4gUm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcbiAgY29uc3QgcHVibGlzaCA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaFB1dChgcHVibGlzaC8ke2lkfWApO1xyXG4gICAgcmV0dXJuIFJvdXRlci5wdXNoKFwiL2RyYWZ0c1wiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3Byb3BzLnBvc3QudGl0bGV9IHwgTmV4dEJsb2c8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICA8cD5CeSB7cHJvcHMucG9zdC5hdXRob3I/Lm5hbWUgfHwgXCJVbmtub3duIGF1dGhvclwifTwvcD5cclxuICAgICAgICA8TWRQcmV2aWV3XHJcbiAgICAgICAgICBwcmV2aWV3VGhlbWU9XCJkYXJrXCJcclxuICAgICAgICAgIGVkaXRvcklkPVwiZWRpdG9ySWRcIlxyXG4gICAgICAgICAgbW9kZWxWYWx1ZT17cHJvcHMucG9zdC5jb250ZW50fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgICB7IXByb3BzLnBvc3QucHVibGlzaGVkICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwdWJsaXNoKHByb3BzLnBvc3QuaWQpfT5QdWJsaXNoPC9idXR0b24+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZXN0cm95KHByb3BzLnBvc3QuaWQpfT5EZWxldGU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMz5Db21tZW50czwvaDM+XHJcbiAgICAgIDxBZGRDb21tZW50IHBvc3RJZD17cHJvcHMucG9zdC5pZH0gLz5cclxuICAgICAgPENvbW1lbnRzIGNvbW1lbnRzPXtwcm9wcy5wb3N0LmNvbW1lbnRzIGFzIFBvc3RDb21tZW50W119IC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucGFnZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiArIGJ1dHRvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgaWYgKCFjb250ZXh0LnBhcmFtcykgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoR2V0PFBvc3RUeXBlW10+KGBwb3N0LyR7Y29udGV4dC5wYXJhbXMuaWR9YCk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdDogZGF0YSB9IH07XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJSZWFjdCIsImZldGNoRGVsZXRlIiwiZmV0Y2hQdXQiLCJBZGRDb21tZW50IiwiQ29tbWVudHMiLCJNZFByZXZpZXciLCJIZWFkIiwiUG9zdCIsInByb3BzIiwicG9zdCIsImF1dGhvciIsInAiLCJ0aXRsZSIsInB1Ymxpc2hlZCIsImRlc3Ryb3kiLCJpZCIsInB1c2giLCJwdWJsaXNoIiwiZGl2IiwiaDIiLCJuYW1lIiwicHJldmlld1RoZW1lIiwiZWRpdG9ySWQiLCJtb2RlbFZhbHVlIiwiY29udGVudCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMyIsInBvc3RJZCIsImNvbW1lbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/p/[id].tsx\n"));

/***/ })

});
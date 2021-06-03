webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/esm/index.js\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ \"./src/components/Header/logo.svg\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back.svg */ \"./src/components/Header/back.svg\");\n/* harmony import */ var _back_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_back_svg__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/ricardoteixeira/Documents/code/ignite/reactjs/desafios/desafio-06-interface-com-chakra-ui/src/components/Header/index.tsx\";\n\n\n\nfunction Header(_ref) {\n  var _ref$hasBackButton = _ref.hasBackButton,\n      hasBackButton = _ref$hasBackButton === void 0 ? false : _ref$hasBackButton;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    as: \"header\",\n    maxWidth: 1440,\n    w: \"100%\",\n    h: 100,\n    bgColor: \"gray.300\",\n    align: \"center\",\n    p: \"6\",\n    mx: \"auto\",\n    justify: \"center\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n      maxWidth: 1160,\n      width: \"100%\",\n      justify: \"space-between\",\n      children: [hasBackButton && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        src: _back_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 35\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n        w: \"100%\",\n        justify: \"center\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          src: _logo_svg__WEBPACK_IMPORTED_MODULE_2___default.a\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, this);\n}\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD9hZWViIl0sIm5hbWVzIjpbIkhlYWRlciIsImhhc0JhY2tCdXR0b24iLCJiYWNrSW1nIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNTyxTQUFTQSxNQUFULE9BQXVEO0FBQUEsZ0NBQXRDQyxhQUFzQztBQUFBLE1BQXRDQSxhQUFzQyxtQ0FBdEIsS0FBc0I7QUFFMUQsc0JBRUkscUVBQUMscURBQUQ7QUFDSSxNQUFFLEVBQUMsUUFEUDtBQUVJLFlBQVEsRUFBRSxJQUZkO0FBR0ksS0FBQyxFQUFDLE1BSE47QUFJSSxLQUFDLEVBQUUsR0FKUDtBQUtJLFdBQU8sRUFBQyxVQUxaO0FBTUksU0FBSyxFQUFDLFFBTlY7QUFPSSxLQUFDLEVBQUMsR0FQTjtBQVFJLE1BQUUsRUFBQyxNQVJQO0FBU0ksV0FBTyxFQUFDLFFBVFo7QUFBQSwyQkFXSSxxRUFBQyxxREFBRDtBQUFNLGNBQVEsRUFBRSxJQUFoQjtBQUFzQixXQUFLLEVBQUMsTUFBNUI7QUFBbUMsYUFBTyxFQUFDLGVBQTNDO0FBQUEsaUJBQ0tBLGFBQWEsaUJBQUkscUVBQUMsc0RBQUQ7QUFBTyxXQUFHLEVBQUVDLGdEQUFPQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRHRCLGVBRUkscUVBQUMscURBQUQ7QUFBTSxTQUFDLEVBQUMsTUFBUjtBQUFlLGVBQU8sRUFBQyxRQUF2QjtBQUFBLCtCQUNJLHFFQUFDLHNEQUFEO0FBQVEsYUFBRyxFQUFFQyxnREFBSUE7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFzQkg7S0F4QmVILE0iLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmxleCwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGxvZ28gZnJvbSBcIi4vbG9nby5zdmdcIjtcbmltcG9ydCBiYWNrSW1nIGZyb20gXCIuL2JhY2suc3ZnXCI7XG5cbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gICAgaGFzQmFja0J1dHRvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoe2hhc0JhY2tCdXR0b24gPSBmYWxzZX0gOiBIZWFkZXJQcm9wcykge1xuXG4gICAgcmV0dXJuIChcbiAgICBcbiAgICAgICAgPEZsZXhcbiAgICAgICAgICAgIGFzPVwiaGVhZGVyXCJcbiAgICAgICAgICAgIG1heFdpZHRoPXsxNDQwfVxuICAgICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICAgICAgaD17MTAwfVxuICAgICAgICAgICAgYmdDb2xvcj1cImdyYXkuMzAwXCJcbiAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgIHA9XCI2XCJcbiAgICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgICBqdXN0aWZ5PVwiY2VudGVyXCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPEZsZXggbWF4V2lkdGg9ezExNjB9IHdpZHRoPVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICB7IGhhc0JhY2tCdXR0b24gJiYgPEltYWdlIHNyYz17YmFja0ltZ30gLz4gfSBcbiAgICAgICAgICAgICAgICA8RmxleCB3PVwiMTAwJVwiIGp1c3RpZnk9XCJjZW50ZXJcIj4gXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSAgc3JjPXtsb2dvfSAvPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIFxuICAgICAgICA8L0ZsZXg+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n");

/***/ })

})
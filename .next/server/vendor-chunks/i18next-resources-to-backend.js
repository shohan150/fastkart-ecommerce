"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/i18next-resources-to-backend";
exports.ids = ["vendor-chunks/i18next-resources-to-backend"];
exports.modules = {

/***/ "(ssr)/./node_modules/i18next-resources-to-backend/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/i18next-resources-to-backend/dist/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ resourcesToBackend)\n/* harmony export */ });\nvar resourcesToBackend = function resourcesToBackend(res) {\n  return {\n    type: 'backend',\n    init: function init(services, backendOptions, i18nextOptions) {},\n    read: function read(language, namespace, callback) {\n      if (typeof res === 'function') {\n        if (res.length < 3) {\n          try {\n            var r = res(language, namespace);\n            if (r && typeof r.then === 'function') {\n              r.then(function (data) {\n                return callback(null, data && data.default || data);\n              }).catch(callback);\n            } else {\n              callback(null, r);\n            }\n          } catch (err) {\n            callback(err);\n          }\n          return;\n        }\n        res(language, namespace, callback);\n        return;\n      }\n      callback(null, res && res[language] && res[language][namespace]);\n    }\n  };\n};\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1yZXNvdXJjZXMtdG8tYmFja2VuZC9kaXN0L2VzbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsY0FBYztBQUNkO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1yZXNvdXJjZXMtdG8tYmFja2VuZC9kaXN0L2VzbS9pbmRleC5qcz9lNjI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciByZXNvdXJjZXNUb0JhY2tlbmQgPSBmdW5jdGlvbiByZXNvdXJjZXNUb0JhY2tlbmQocmVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2JhY2tlbmQnLFxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoc2VydmljZXMsIGJhY2tlbmRPcHRpb25zLCBpMThuZXh0T3B0aW9ucykge30sXG4gICAgcmVhZDogZnVuY3Rpb24gcmVhZChsYW5ndWFnZSwgbmFtZXNwYWNlLCBjYWxsYmFjaykge1xuICAgICAgaWYgKHR5cGVvZiByZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByID0gcmVzKGxhbmd1YWdlLCBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgaWYgKHIgJiYgdHlwZW9mIHIudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICByLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobnVsbCwgZGF0YSAmJiBkYXRhLmRlZmF1bHQgfHwgZGF0YSk7XG4gICAgICAgICAgICAgIH0pLmNhdGNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlcyhsYW5ndWFnZSwgbmFtZXNwYWNlLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNhbGxiYWNrKG51bGwsIHJlcyAmJiByZXNbbGFuZ3VhZ2VdICYmIHJlc1tsYW5ndWFnZV1bbmFtZXNwYWNlXSk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IHsgcmVzb3VyY2VzVG9CYWNrZW5kIGFzIGRlZmF1bHQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/i18next-resources-to-backend/dist/esm/index.js\n");

/***/ })

};
;
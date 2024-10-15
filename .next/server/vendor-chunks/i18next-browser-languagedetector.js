"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/i18next-browser-languagedetector";
exports.ids = ["vendor-chunks/i18next-browser-languagedetector"];
exports.modules = {

/***/ "(ssr)/./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Browser)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"(ssr)/./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\n\nvar arr = [];\nvar each = arr.forEach;\nvar slice = arr.slice;\nfunction defaults(obj) {\n  each.call(slice.call(arguments, 1), function (source) {\n    if (source) {\n      for (var prop in source) {\n        if (obj[prop] === undefined) obj[prop] = source[prop];\n      }\n    }\n  });\n  return obj;\n}\n\n// eslint-disable-next-line no-control-regex\nvar fieldContentRegExp = /^[\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+$/;\nvar serializeCookie = function serializeCookie(name, val, options) {\n  var opt = options || {};\n  opt.path = opt.path || '/';\n  var value = encodeURIComponent(val);\n  var str = \"\".concat(name, \"=\").concat(value);\n  if (opt.maxAge > 0) {\n    var maxAge = opt.maxAge - 0;\n    if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');\n    str += \"; Max-Age=\".concat(Math.floor(maxAge));\n  }\n  if (opt.domain) {\n    if (!fieldContentRegExp.test(opt.domain)) {\n      throw new TypeError('option domain is invalid');\n    }\n    str += \"; Domain=\".concat(opt.domain);\n  }\n  if (opt.path) {\n    if (!fieldContentRegExp.test(opt.path)) {\n      throw new TypeError('option path is invalid');\n    }\n    str += \"; Path=\".concat(opt.path);\n  }\n  if (opt.expires) {\n    if (typeof opt.expires.toUTCString !== 'function') {\n      throw new TypeError('option expires is invalid');\n    }\n    str += \"; Expires=\".concat(opt.expires.toUTCString());\n  }\n  if (opt.httpOnly) str += '; HttpOnly';\n  if (opt.secure) str += '; Secure';\n  if (opt.sameSite) {\n    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;\n    switch (sameSite) {\n      case true:\n        str += '; SameSite=Strict';\n        break;\n      case 'lax':\n        str += '; SameSite=Lax';\n        break;\n      case 'strict':\n        str += '; SameSite=Strict';\n        break;\n      case 'none':\n        str += '; SameSite=None';\n        break;\n      default:\n        throw new TypeError('option sameSite is invalid');\n    }\n  }\n  return str;\n};\nvar cookie = {\n  create: function create(name, value, minutes, domain) {\n    var cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {\n      path: '/',\n      sameSite: 'strict'\n    };\n    if (minutes) {\n      cookieOptions.expires = new Date();\n      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);\n    }\n    if (domain) cookieOptions.domain = domain;\n    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);\n  },\n  read: function read(name) {\n    var nameEQ = \"\".concat(name, \"=\");\n    var ca = document.cookie.split(';');\n    for (var i = 0; i < ca.length; i++) {\n      var c = ca[i];\n      while (c.charAt(0) === ' ') c = c.substring(1, c.length);\n      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);\n    }\n    return null;\n  },\n  remove: function remove(name) {\n    this.create(name, '', -1);\n  }\n};\nvar cookie$1 = {\n  name: 'cookie',\n  lookup: function lookup(options) {\n    var found;\n    if (options.lookupCookie && typeof document !== 'undefined') {\n      var c = cookie.read(options.lookupCookie);\n      if (c) found = c;\n    }\n    return found;\n  },\n  cacheUserLanguage: function cacheUserLanguage(lng, options) {\n    if (options.lookupCookie && typeof document !== 'undefined') {\n      cookie.create(options.lookupCookie, lng, options.cookieMinutes, options.cookieDomain, options.cookieOptions);\n    }\n  }\n};\n\nvar querystring = {\n  name: 'querystring',\n  lookup: function lookup(options) {\n    var found;\n    if (typeof window !== 'undefined') {\n      var search = window.location.search;\n      if (!window.location.search && window.location.hash && window.location.hash.indexOf('?') > -1) {\n        search = window.location.hash.substring(window.location.hash.indexOf('?'));\n      }\n      var query = search.substring(1);\n      var params = query.split('&');\n      for (var i = 0; i < params.length; i++) {\n        var pos = params[i].indexOf('=');\n        if (pos > 0) {\n          var key = params[i].substring(0, pos);\n          if (key === options.lookupQuerystring) {\n            found = params[i].substring(pos + 1);\n          }\n        }\n      }\n    }\n    return found;\n  }\n};\n\nvar hasLocalStorageSupport = null;\nvar localStorageAvailable = function localStorageAvailable() {\n  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;\n  try {\n    hasLocalStorageSupport = window !== 'undefined' && window.localStorage !== null;\n    var testKey = 'i18next.translate.boo';\n    window.localStorage.setItem(testKey, 'foo');\n    window.localStorage.removeItem(testKey);\n  } catch (e) {\n    hasLocalStorageSupport = false;\n  }\n  return hasLocalStorageSupport;\n};\nvar localStorage = {\n  name: 'localStorage',\n  lookup: function lookup(options) {\n    var found;\n    if (options.lookupLocalStorage && localStorageAvailable()) {\n      var lng = window.localStorage.getItem(options.lookupLocalStorage);\n      if (lng) found = lng;\n    }\n    return found;\n  },\n  cacheUserLanguage: function cacheUserLanguage(lng, options) {\n    if (options.lookupLocalStorage && localStorageAvailable()) {\n      window.localStorage.setItem(options.lookupLocalStorage, lng);\n    }\n  }\n};\n\nvar hasSessionStorageSupport = null;\nvar sessionStorageAvailable = function sessionStorageAvailable() {\n  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;\n  try {\n    hasSessionStorageSupport = window !== 'undefined' && window.sessionStorage !== null;\n    var testKey = 'i18next.translate.boo';\n    window.sessionStorage.setItem(testKey, 'foo');\n    window.sessionStorage.removeItem(testKey);\n  } catch (e) {\n    hasSessionStorageSupport = false;\n  }\n  return hasSessionStorageSupport;\n};\nvar sessionStorage = {\n  name: 'sessionStorage',\n  lookup: function lookup(options) {\n    var found;\n    if (options.lookupSessionStorage && sessionStorageAvailable()) {\n      var lng = window.sessionStorage.getItem(options.lookupSessionStorage);\n      if (lng) found = lng;\n    }\n    return found;\n  },\n  cacheUserLanguage: function cacheUserLanguage(lng, options) {\n    if (options.lookupSessionStorage && sessionStorageAvailable()) {\n      window.sessionStorage.setItem(options.lookupSessionStorage, lng);\n    }\n  }\n};\n\nvar navigator$1 = {\n  name: 'navigator',\n  lookup: function lookup(options) {\n    var found = [];\n    if (typeof navigator !== 'undefined') {\n      if (navigator.languages) {\n        // chrome only; not an array, so can't use .push.apply instead of iterating\n        for (var i = 0; i < navigator.languages.length; i++) {\n          found.push(navigator.languages[i]);\n        }\n      }\n      if (navigator.userLanguage) {\n        found.push(navigator.userLanguage);\n      }\n      if (navigator.language) {\n        found.push(navigator.language);\n      }\n    }\n    return found.length > 0 ? found : undefined;\n  }\n};\n\nvar htmlTag = {\n  name: 'htmlTag',\n  lookup: function lookup(options) {\n    var found;\n    var htmlTag = options.htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);\n    if (htmlTag && typeof htmlTag.getAttribute === 'function') {\n      found = htmlTag.getAttribute('lang');\n    }\n    return found;\n  }\n};\n\nvar path = {\n  name: 'path',\n  lookup: function lookup(options) {\n    var found;\n    if (typeof window !== 'undefined') {\n      var language = window.location.pathname.match(/\\/([a-zA-Z-]*)/g);\n      if (language instanceof Array) {\n        if (typeof options.lookupFromPathIndex === 'number') {\n          if (typeof language[options.lookupFromPathIndex] !== 'string') {\n            return undefined;\n          }\n          found = language[options.lookupFromPathIndex].replace('/', '');\n        } else {\n          found = language[0].replace('/', '');\n        }\n      }\n    }\n    return found;\n  }\n};\n\nvar subdomain = {\n  name: 'subdomain',\n  lookup: function lookup(options) {\n    // If given get the subdomain index else 1\n    var lookupFromSubdomainIndex = typeof options.lookupFromSubdomainIndex === 'number' ? options.lookupFromSubdomainIndex + 1 : 1;\n    // get all matches if window.location. is existing\n    // first item of match is the match itself and the second is the first group macht which sould be the first subdomain match\n    // is the hostname no public domain get the or option of localhost\n    var language = typeof window !== 'undefined' && window.location && window.location.hostname && window.location.hostname.match(/^(\\w{2,5})\\.(([a-z0-9-]{1,63}\\.[a-z]{2,6})|localhost)/i);\n\n    // if there is no match (null) return undefined\n    if (!language) return undefined;\n    // return the given group match\n    return language[lookupFromSubdomainIndex];\n  }\n};\n\nfunction getDefaults() {\n  return {\n    order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],\n    lookupQuerystring: 'lng',\n    lookupCookie: 'i18next',\n    lookupLocalStorage: 'i18nextLng',\n    lookupSessionStorage: 'i18nextLng',\n    // cache user language\n    caches: ['localStorage'],\n    excludeCacheFor: ['cimode'],\n    // cookieMinutes: 10,\n    // cookieDomain: 'myDomain'\n\n    convertDetectedLanguage: function convertDetectedLanguage(l) {\n      return l;\n    }\n  };\n}\nvar Browser = /*#__PURE__*/function () {\n  function Browser(services) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Browser);\n    this.type = 'languageDetector';\n    this.detectors = {};\n    this.init(services, options);\n  }\n  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Browser, [{\n    key: \"init\",\n    value: function init(services) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      this.services = services || {\n        languageUtils: {}\n      }; // this way the language detector can be used without i18next\n      this.options = defaults(options, this.options || {}, getDefaults());\n      if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {\n        this.options.convertDetectedLanguage = function (l) {\n          return l.replace('-', '_');\n        };\n      }\n\n      // backwards compatibility\n      if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;\n      this.i18nOptions = i18nOptions;\n      this.addDetector(cookie$1);\n      this.addDetector(querystring);\n      this.addDetector(localStorage);\n      this.addDetector(sessionStorage);\n      this.addDetector(navigator$1);\n      this.addDetector(htmlTag);\n      this.addDetector(path);\n      this.addDetector(subdomain);\n    }\n  }, {\n    key: \"addDetector\",\n    value: function addDetector(detector) {\n      this.detectors[detector.name] = detector;\n      return this;\n    }\n  }, {\n    key: \"detect\",\n    value: function detect(detectionOrder) {\n      var _this = this;\n      if (!detectionOrder) detectionOrder = this.options.order;\n      var detected = [];\n      detectionOrder.forEach(function (detectorName) {\n        if (_this.detectors[detectorName]) {\n          var lookup = _this.detectors[detectorName].lookup(_this.options);\n          if (lookup && typeof lookup === 'string') lookup = [lookup];\n          if (lookup) detected = detected.concat(lookup);\n        }\n      });\n      detected = detected.map(function (d) {\n        return _this.options.convertDetectedLanguage(d);\n      });\n      if (this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0\n      return detected.length > 0 ? detected[0] : null; // a little backward compatibility\n    }\n  }, {\n    key: \"cacheUserLanguage\",\n    value: function cacheUserLanguage(lng, caches) {\n      var _this2 = this;\n      if (!caches) caches = this.options.caches;\n      if (!caches) return;\n      if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;\n      caches.forEach(function (cacheName) {\n        if (_this2.detectors[cacheName]) _this2.detectors[cacheName].cacheUserLanguage(lng, _this2.options);\n      });\n    }\n  }]);\n  return Browser;\n}();\nBrowser.type = 'languageDetector';\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3IvZGlzdC9lc20vaTE4bmV4dEJyb3dzZXJMYW5ndWFnZURldGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF3RTtBQUNOOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsOEJBQThCO0FBQzlCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDLG9CQUFvQixlQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsd0JBQXdCLGdDQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0lBQXdJLElBQUksZUFBZSxLQUFLLFFBQVEsSUFBSTs7QUFFNUs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRkFBZTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0ZBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLDhFQUE4RTtBQUM5RSx1REFBdUQ7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDs7QUFFOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9ub2RlX21vZHVsZXMvaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3IvZGlzdC9lc20vaTE4bmV4dEJyb3dzZXJMYW5ndWFnZURldGVjdG9yLmpzPzQ1NDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzJztcblxudmFyIGFyciA9IFtdO1xudmFyIGVhY2ggPSBhcnIuZm9yRWFjaDtcbnZhciBzbGljZSA9IGFyci5zbGljZTtcbmZ1bmN0aW9uIGRlZmF1bHRzKG9iaikge1xuICBlYWNoLmNhbGwoc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgaWYgKHNvdXJjZSkge1xuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKG9ialtwcm9wXSA9PT0gdW5kZWZpbmVkKSBvYmpbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcbnZhciBzZXJpYWxpemVDb29raWUgPSBmdW5jdGlvbiBzZXJpYWxpemVDb29raWUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICBvcHQucGF0aCA9IG9wdC5wYXRoIHx8ICcvJztcbiAgdmFyIHZhbHVlID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gIHZhciBzdHIgPSBcIlwiLmNvbmNhdChuYW1lLCBcIj1cIikuY29uY2F0KHZhbHVlKTtcbiAgaWYgKG9wdC5tYXhBZ2UgPiAwKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuICAgIGlmIChOdW1iZXIuaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgc3RyICs9IFwiOyBNYXgtQWdlPVwiLmNvbmNhdChNYXRoLmZsb29yKG1heEFnZSkpO1xuICB9XG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHN0ciArPSBcIjsgRG9tYWluPVwiLmNvbmNhdChvcHQuZG9tYWluKTtcbiAgfVxuICBpZiAob3B0LnBhdGgpIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5wYXRoKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHBhdGggaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgICBzdHIgKz0gXCI7IFBhdGg9XCIuY29uY2F0KG9wdC5wYXRoKTtcbiAgfVxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHN0ciArPSBcIjsgRXhwaXJlcz1cIi5jb25jYXQob3B0LmV4cGlyZXMudG9VVENTdHJpbmcoKSk7XG4gIH1cbiAgaWYgKG9wdC5odHRwT25seSkgc3RyICs9ICc7IEh0dHBPbmx5JztcbiAgaWYgKG9wdC5zZWN1cmUpIHN0ciArPSAnOyBTZWN1cmUnO1xuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZycgPyBvcHQuc2FtZVNpdGUudG9Mb3dlckNhc2UoKSA6IG9wdC5zYW1lU2l0ZTtcbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn07XG52YXIgY29va2llID0ge1xuICBjcmVhdGU6IGZ1bmN0aW9uIGNyZWF0ZShuYW1lLCB2YWx1ZSwgbWludXRlcywgZG9tYWluKSB7XG4gICAgdmFyIGNvb2tpZU9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gNCAmJiBhcmd1bWVudHNbNF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s0XSA6IHtcbiAgICAgIHBhdGg6ICcvJyxcbiAgICAgIHNhbWVTaXRlOiAnc3RyaWN0J1xuICAgIH07XG4gICAgaWYgKG1pbnV0ZXMpIHtcbiAgICAgIGNvb2tpZU9wdGlvbnMuZXhwaXJlcyA9IG5ldyBEYXRlKCk7XG4gICAgICBjb29raWVPcHRpb25zLmV4cGlyZXMuc2V0VGltZShjb29raWVPcHRpb25zLmV4cGlyZXMuZ2V0VGltZSgpICsgbWludXRlcyAqIDYwICogMTAwMCk7XG4gICAgfVxuICAgIGlmIChkb21haW4pIGNvb2tpZU9wdGlvbnMuZG9tYWluID0gZG9tYWluO1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IHNlcmlhbGl6ZUNvb2tpZShuYW1lLCBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLCBjb29raWVPcHRpb25zKTtcbiAgfSxcbiAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgdmFyIG5hbWVFUSA9IFwiXCIuY29uY2F0KG5hbWUsIFwiPVwiKTtcbiAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgYyA9IGNhW2ldO1xuICAgICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XG4gICAgICBpZiAoYy5pbmRleE9mKG5hbWVFUSkgPT09IDApIHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgdGhpcy5jcmVhdGUobmFtZSwgJycsIC0xKTtcbiAgfVxufTtcbnZhciBjb29raWUkMSA9IHtcbiAgbmFtZTogJ2Nvb2tpZScsXG4gIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKG9wdGlvbnMpIHtcbiAgICB2YXIgZm91bmQ7XG4gICAgaWYgKG9wdGlvbnMubG9va3VwQ29va2llICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBjID0gY29va2llLnJlYWQob3B0aW9ucy5sb29rdXBDb29raWUpO1xuICAgICAgaWYgKGMpIGZvdW5kID0gYztcbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kO1xuICB9LFxuICBjYWNoZVVzZXJMYW5ndWFnZTogZnVuY3Rpb24gY2FjaGVVc2VyTGFuZ3VhZ2UobG5nLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMubG9va3VwQ29va2llICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvb2tpZS5jcmVhdGUob3B0aW9ucy5sb29rdXBDb29raWUsIGxuZywgb3B0aW9ucy5jb29raWVNaW51dGVzLCBvcHRpb25zLmNvb2tpZURvbWFpbiwgb3B0aW9ucy5jb29raWVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBxdWVyeXN0cmluZyA9IHtcbiAgbmFtZTogJ3F1ZXJ5c3RyaW5nJyxcbiAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAob3B0aW9ucykge1xuICAgIHZhciBmb3VuZDtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzZWFyY2ggPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgICAgaWYgKCF3aW5kb3cubG9jYXRpb24uc2VhcmNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJz8nKSA+IC0xKSB7XG4gICAgICAgIHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZyh3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCc/JykpO1xuICAgICAgfVxuICAgICAgdmFyIHF1ZXJ5ID0gc2VhcmNoLnN1YnN0cmluZygxKTtcbiAgICAgIHZhciBwYXJhbXMgPSBxdWVyeS5zcGxpdCgnJicpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHBvcyA9IHBhcmFtc1tpXS5pbmRleE9mKCc9Jyk7XG4gICAgICAgIGlmIChwb3MgPiAwKSB7XG4gICAgICAgICAgdmFyIGtleSA9IHBhcmFtc1tpXS5zdWJzdHJpbmcoMCwgcG9zKTtcbiAgICAgICAgICBpZiAoa2V5ID09PSBvcHRpb25zLmxvb2t1cFF1ZXJ5c3RyaW5nKSB7XG4gICAgICAgICAgICBmb3VuZCA9IHBhcmFtc1tpXS5zdWJzdHJpbmcocG9zICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3VuZDtcbiAgfVxufTtcblxudmFyIGhhc0xvY2FsU3RvcmFnZVN1cHBvcnQgPSBudWxsO1xudmFyIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSA9IGZ1bmN0aW9uIGxvY2FsU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgaWYgKGhhc0xvY2FsU3RvcmFnZVN1cHBvcnQgIT09IG51bGwpIHJldHVybiBoYXNMb2NhbFN0b3JhZ2VTdXBwb3J0O1xuICB0cnkge1xuICAgIGhhc0xvY2FsU3RvcmFnZVN1cHBvcnQgPSB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UgIT09IG51bGw7XG4gICAgdmFyIHRlc3RLZXkgPSAnaTE4bmV4dC50cmFuc2xhdGUuYm9vJztcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGVzdEtleSwgJ2ZvbycpO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc0xvY2FsU3RvcmFnZVN1cHBvcnQgPSBmYWxzZTtcbiAgfVxuICByZXR1cm4gaGFzTG9jYWxTdG9yYWdlU3VwcG9ydDtcbn07XG52YXIgbG9jYWxTdG9yYWdlID0ge1xuICBuYW1lOiAnbG9jYWxTdG9yYWdlJyxcbiAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAob3B0aW9ucykge1xuICAgIHZhciBmb3VuZDtcbiAgICBpZiAob3B0aW9ucy5sb29rdXBMb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgIHZhciBsbmcgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0ob3B0aW9ucy5sb29rdXBMb2NhbFN0b3JhZ2UpO1xuICAgICAgaWYgKGxuZykgZm91bmQgPSBsbmc7XG4gICAgfVxuICAgIHJldHVybiBmb3VuZDtcbiAgfSxcbiAgY2FjaGVVc2VyTGFuZ3VhZ2U6IGZ1bmN0aW9uIGNhY2hlVXNlckxhbmd1YWdlKGxuZywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmxvb2t1cExvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VBdmFpbGFibGUoKSkge1xuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKG9wdGlvbnMubG9va3VwTG9jYWxTdG9yYWdlLCBsbmcpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGhhc1Nlc3Npb25TdG9yYWdlU3VwcG9ydCA9IG51bGw7XG52YXIgc2Vzc2lvblN0b3JhZ2VBdmFpbGFibGUgPSBmdW5jdGlvbiBzZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSgpIHtcbiAgaWYgKGhhc1Nlc3Npb25TdG9yYWdlU3VwcG9ydCAhPT0gbnVsbCkgcmV0dXJuIGhhc1Nlc3Npb25TdG9yYWdlU3VwcG9ydDtcbiAgdHJ5IHtcbiAgICBoYXNTZXNzaW9uU3RvcmFnZVN1cHBvcnQgPSB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZSAhPT0gbnVsbDtcbiAgICB2YXIgdGVzdEtleSA9ICdpMThuZXh0LnRyYW5zbGF0ZS5ib28nO1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHRlc3RLZXksICdmb28nKTtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh0ZXN0S2V5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhc1Nlc3Npb25TdG9yYWdlU3VwcG9ydCA9IGZhbHNlO1xuICB9XG4gIHJldHVybiBoYXNTZXNzaW9uU3RvcmFnZVN1cHBvcnQ7XG59O1xudmFyIHNlc3Npb25TdG9yYWdlID0ge1xuICBuYW1lOiAnc2Vzc2lvblN0b3JhZ2UnLFxuICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChvcHRpb25zKSB7XG4gICAgdmFyIGZvdW5kO1xuICAgIGlmIChvcHRpb25zLmxvb2t1cFNlc3Npb25TdG9yYWdlICYmIHNlc3Npb25TdG9yYWdlQXZhaWxhYmxlKCkpIHtcbiAgICAgIHZhciBsbmcgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShvcHRpb25zLmxvb2t1cFNlc3Npb25TdG9yYWdlKTtcbiAgICAgIGlmIChsbmcpIGZvdW5kID0gbG5nO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH0sXG4gIGNhY2hlVXNlckxhbmd1YWdlOiBmdW5jdGlvbiBjYWNoZVVzZXJMYW5ndWFnZShsbmcsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5sb29rdXBTZXNzaW9uU3RvcmFnZSAmJiBzZXNzaW9uU3RvcmFnZUF2YWlsYWJsZSgpKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShvcHRpb25zLmxvb2t1cFNlc3Npb25TdG9yYWdlLCBsbmcpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIG5hdmlnYXRvciQxID0ge1xuICBuYW1lOiAnbmF2aWdhdG9yJyxcbiAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAob3B0aW9ucykge1xuICAgIHZhciBmb3VuZCA9IFtdO1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXMpIHtcbiAgICAgICAgLy8gY2hyb21lIG9ubHk7IG5vdCBhbiBhcnJheSwgc28gY2FuJ3QgdXNlIC5wdXNoLmFwcGx5IGluc3RlYWQgb2YgaXRlcmF0aW5nXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmF2aWdhdG9yLmxhbmd1YWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGZvdW5kLnB1c2gobmF2aWdhdG9yLmxhbmd1YWdlc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChuYXZpZ2F0b3IudXNlckxhbmd1YWdlKSB7XG4gICAgICAgIGZvdW5kLnB1c2gobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSk7XG4gICAgICB9XG4gICAgICBpZiAobmF2aWdhdG9yLmxhbmd1YWdlKSB7XG4gICAgICAgIGZvdW5kLnB1c2gobmF2aWdhdG9yLmxhbmd1YWdlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZvdW5kLmxlbmd0aCA+IDAgPyBmb3VuZCA6IHVuZGVmaW5lZDtcbiAgfVxufTtcblxudmFyIGh0bWxUYWcgPSB7XG4gIG5hbWU6ICdodG1sVGFnJyxcbiAgbG9va3VwOiBmdW5jdGlvbiBsb29rdXAob3B0aW9ucykge1xuICAgIHZhciBmb3VuZDtcbiAgICB2YXIgaHRtbFRhZyA9IG9wdGlvbnMuaHRtbFRhZyB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IG51bGwpO1xuICAgIGlmIChodG1sVGFnICYmIHR5cGVvZiBodG1sVGFnLmdldEF0dHJpYnV0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZm91bmQgPSBodG1sVGFnLmdldEF0dHJpYnV0ZSgnbGFuZycpO1xuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbn07XG5cbnZhciBwYXRoID0ge1xuICBuYW1lOiAncGF0aCcsXG4gIGxvb2t1cDogZnVuY3Rpb24gbG9va3VwKG9wdGlvbnMpIHtcbiAgICB2YXIgZm91bmQ7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUubWF0Y2goL1xcLyhbYS16QS1aLV0qKS9nKTtcbiAgICAgIGlmIChsYW5ndWFnZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb29rdXBGcm9tUGF0aEluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIGlmICh0eXBlb2YgbGFuZ3VhZ2Vbb3B0aW9ucy5sb29rdXBGcm9tUGF0aEluZGV4XSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZvdW5kID0gbGFuZ3VhZ2Vbb3B0aW9ucy5sb29rdXBGcm9tUGF0aEluZGV4XS5yZXBsYWNlKCcvJywgJycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvdW5kID0gbGFuZ3VhZ2VbMF0ucmVwbGFjZSgnLycsICcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZm91bmQ7XG4gIH1cbn07XG5cbnZhciBzdWJkb21haW4gPSB7XG4gIG5hbWU6ICdzdWJkb21haW4nLFxuICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChvcHRpb25zKSB7XG4gICAgLy8gSWYgZ2l2ZW4gZ2V0IHRoZSBzdWJkb21haW4gaW5kZXggZWxzZSAxXG4gICAgdmFyIGxvb2t1cEZyb21TdWJkb21haW5JbmRleCA9IHR5cGVvZiBvcHRpb25zLmxvb2t1cEZyb21TdWJkb21haW5JbmRleCA9PT0gJ251bWJlcicgPyBvcHRpb25zLmxvb2t1cEZyb21TdWJkb21haW5JbmRleCArIDEgOiAxO1xuICAgIC8vIGdldCBhbGwgbWF0Y2hlcyBpZiB3aW5kb3cubG9jYXRpb24uIGlzIGV4aXN0aW5nXG4gICAgLy8gZmlyc3QgaXRlbSBvZiBtYXRjaCBpcyB0aGUgbWF0Y2ggaXRzZWxmIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBmaXJzdCBncm91cCBtYWNodCB3aGljaCBzb3VsZCBiZSB0aGUgZmlyc3Qgc3ViZG9tYWluIG1hdGNoXG4gICAgLy8gaXMgdGhlIGhvc3RuYW1lIG5vIHB1YmxpYyBkb21haW4gZ2V0IHRoZSBvciBvcHRpb24gb2YgbG9jYWxob3N0XG4gICAgdmFyIGxhbmd1YWdlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSAmJiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUubWF0Y2goL14oXFx3ezIsNX0pXFwuKChbYS16MC05LV17MSw2M31cXC5bYS16XXsyLDZ9KXxsb2NhbGhvc3QpL2kpO1xuXG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gbWF0Y2ggKG51bGwpIHJldHVybiB1bmRlZmluZWRcbiAgICBpZiAoIWxhbmd1YWdlKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgIC8vIHJldHVybiB0aGUgZ2l2ZW4gZ3JvdXAgbWF0Y2hcbiAgICByZXR1cm4gbGFuZ3VhZ2VbbG9va3VwRnJvbVN1YmRvbWFpbkluZGV4XTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdHMoKSB7XG4gIHJldHVybiB7XG4gICAgb3JkZXI6IFsncXVlcnlzdHJpbmcnLCAnY29va2llJywgJ2xvY2FsU3RvcmFnZScsICdzZXNzaW9uU3RvcmFnZScsICduYXZpZ2F0b3InLCAnaHRtbFRhZyddLFxuICAgIGxvb2t1cFF1ZXJ5c3RyaW5nOiAnbG5nJyxcbiAgICBsb29rdXBDb29raWU6ICdpMThuZXh0JyxcbiAgICBsb29rdXBMb2NhbFN0b3JhZ2U6ICdpMThuZXh0TG5nJyxcbiAgICBsb29rdXBTZXNzaW9uU3RvcmFnZTogJ2kxOG5leHRMbmcnLFxuICAgIC8vIGNhY2hlIHVzZXIgbGFuZ3VhZ2VcbiAgICBjYWNoZXM6IFsnbG9jYWxTdG9yYWdlJ10sXG4gICAgZXhjbHVkZUNhY2hlRm9yOiBbJ2NpbW9kZSddLFxuICAgIC8vIGNvb2tpZU1pbnV0ZXM6IDEwLFxuICAgIC8vIGNvb2tpZURvbWFpbjogJ215RG9tYWluJ1xuXG4gICAgY29udmVydERldGVjdGVkTGFuZ3VhZ2U6IGZ1bmN0aW9uIGNvbnZlcnREZXRlY3RlZExhbmd1YWdlKGwpIHtcbiAgICAgIHJldHVybiBsO1xuICAgIH1cbiAgfTtcbn1cbnZhciBCcm93c2VyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQnJvd3NlcihzZXJ2aWNlcykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQnJvd3Nlcik7XG4gICAgdGhpcy50eXBlID0gJ2xhbmd1YWdlRGV0ZWN0b3InO1xuICAgIHRoaXMuZGV0ZWN0b3JzID0ge307XG4gICAgdGhpcy5pbml0KHNlcnZpY2VzLCBvcHRpb25zKTtcbiAgfVxuICBfY3JlYXRlQ2xhc3MoQnJvd3NlciwgW3tcbiAgICBrZXk6IFwiaW5pdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbml0KHNlcnZpY2VzKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgICB2YXIgaTE4bk9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICAgICAgdGhpcy5zZXJ2aWNlcyA9IHNlcnZpY2VzIHx8IHtcbiAgICAgICAgbGFuZ3VhZ2VVdGlsczoge31cbiAgICAgIH07IC8vIHRoaXMgd2F5IHRoZSBsYW5ndWFnZSBkZXRlY3RvciBjYW4gYmUgdXNlZCB3aXRob3V0IGkxOG5leHRcbiAgICAgIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRzKG9wdGlvbnMsIHRoaXMub3B0aW9ucyB8fCB7fSwgZ2V0RGVmYXVsdHMoKSk7XG4gICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5jb252ZXJ0RGV0ZWN0ZWRMYW5ndWFnZSA9PT0gJ3N0cmluZycgJiYgdGhpcy5vcHRpb25zLmNvbnZlcnREZXRlY3RlZExhbmd1YWdlLmluZGV4T2YoJzE1ODk3JykgPiAtMSkge1xuICAgICAgICB0aGlzLm9wdGlvbnMuY29udmVydERldGVjdGVkTGFuZ3VhZ2UgPSBmdW5jdGlvbiAobCkge1xuICAgICAgICAgIHJldHVybiBsLnJlcGxhY2UoJy0nLCAnXycpO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5sb29rdXBGcm9tVXJsSW5kZXgpIHRoaXMub3B0aW9ucy5sb29rdXBGcm9tUGF0aEluZGV4ID0gdGhpcy5vcHRpb25zLmxvb2t1cEZyb21VcmxJbmRleDtcbiAgICAgIHRoaXMuaTE4bk9wdGlvbnMgPSBpMThuT3B0aW9ucztcbiAgICAgIHRoaXMuYWRkRGV0ZWN0b3IoY29va2llJDEpO1xuICAgICAgdGhpcy5hZGREZXRlY3RvcihxdWVyeXN0cmluZyk7XG4gICAgICB0aGlzLmFkZERldGVjdG9yKGxvY2FsU3RvcmFnZSk7XG4gICAgICB0aGlzLmFkZERldGVjdG9yKHNlc3Npb25TdG9yYWdlKTtcbiAgICAgIHRoaXMuYWRkRGV0ZWN0b3IobmF2aWdhdG9yJDEpO1xuICAgICAgdGhpcy5hZGREZXRlY3RvcihodG1sVGFnKTtcbiAgICAgIHRoaXMuYWRkRGV0ZWN0b3IocGF0aCk7XG4gICAgICB0aGlzLmFkZERldGVjdG9yKHN1YmRvbWFpbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImFkZERldGVjdG9yXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERldGVjdG9yKGRldGVjdG9yKSB7XG4gICAgICB0aGlzLmRldGVjdG9yc1tkZXRlY3Rvci5uYW1lXSA9IGRldGVjdG9yO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRldGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXRlY3QoZGV0ZWN0aW9uT3JkZXIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICBpZiAoIWRldGVjdGlvbk9yZGVyKSBkZXRlY3Rpb25PcmRlciA9IHRoaXMub3B0aW9ucy5vcmRlcjtcbiAgICAgIHZhciBkZXRlY3RlZCA9IFtdO1xuICAgICAgZGV0ZWN0aW9uT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoZGV0ZWN0b3JOYW1lKSB7XG4gICAgICAgIGlmIChfdGhpcy5kZXRlY3RvcnNbZGV0ZWN0b3JOYW1lXSkge1xuICAgICAgICAgIHZhciBsb29rdXAgPSBfdGhpcy5kZXRlY3RvcnNbZGV0ZWN0b3JOYW1lXS5sb29rdXAoX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgaWYgKGxvb2t1cCAmJiB0eXBlb2YgbG9va3VwID09PSAnc3RyaW5nJykgbG9va3VwID0gW2xvb2t1cF07XG4gICAgICAgICAgaWYgKGxvb2t1cCkgZGV0ZWN0ZWQgPSBkZXRlY3RlZC5jb25jYXQobG9va3VwKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkZXRlY3RlZCA9IGRldGVjdGVkLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub3B0aW9ucy5jb252ZXJ0RGV0ZWN0ZWRMYW5ndWFnZShkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMuc2VydmljZXMubGFuZ3VhZ2VVdGlscy5nZXRCZXN0TWF0Y2hGcm9tQ29kZXMpIHJldHVybiBkZXRlY3RlZDsgLy8gbmV3IGkxOG5leHQgdjE5LjUuMFxuICAgICAgcmV0dXJuIGRldGVjdGVkLmxlbmd0aCA+IDAgPyBkZXRlY3RlZFswXSA6IG51bGw7IC8vIGEgbGl0dGxlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY2FjaGVVc2VyTGFuZ3VhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2FjaGVVc2VyTGFuZ3VhZ2UobG5nLCBjYWNoZXMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgICAgaWYgKCFjYWNoZXMpIGNhY2hlcyA9IHRoaXMub3B0aW9ucy5jYWNoZXM7XG4gICAgICBpZiAoIWNhY2hlcykgcmV0dXJuO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5leGNsdWRlQ2FjaGVGb3IgJiYgdGhpcy5vcHRpb25zLmV4Y2x1ZGVDYWNoZUZvci5pbmRleE9mKGxuZykgPiAtMSkgcmV0dXJuO1xuICAgICAgY2FjaGVzLmZvckVhY2goZnVuY3Rpb24gKGNhY2hlTmFtZSkge1xuICAgICAgICBpZiAoX3RoaXMyLmRldGVjdG9yc1tjYWNoZU5hbWVdKSBfdGhpczIuZGV0ZWN0b3JzW2NhY2hlTmFtZV0uY2FjaGVVc2VyTGFuZ3VhZ2UobG5nLCBfdGhpczIub3B0aW9ucyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJyb3dzZXI7XG59KCk7XG5Ccm93c2VyLnR5cGUgPSAnbGFuZ3VhZ2VEZXRlY3Rvcic7XG5cbmV4cG9ydCB7IEJyb3dzZXIgYXMgZGVmYXVsdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js\n");

/***/ })

};
;
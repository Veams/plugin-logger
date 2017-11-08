(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("index", [], factory);
	else if(typeof exports === 'object')
		exports["index"] = factory();
	else
		root["index"] = root["index"] || {}, root["index"]["index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var VeamsLogger = {
		options: {
			devmodeParam: 'devmode',
			loggerParam: 'logger'
		},
		pluginName: 'Logger',
		initialize: function initialize(Veams, opts) {
	
			if (opts) {
				this.options = Veams.helpers.extend(this.options, opts || {});
			}
	
			/**
	   * Devmode and logger
	   */
			Veams.devmode = false;
			Veams.logger = false;
	
			if (document.location.search.indexOf(this.options.devmodeParam) > -1 || window.sessionStorage && sessionStorage.getItem('devmodeEnabled')) {
				Veams.devmode = true;
	
				if (window.sessionStorage && !sessionStorage.getItem('devmodeEnabled')) {
					sessionStorage.setItem('devmodeEnabled', true);
				}
			}
	
			if (document.location.search.indexOf(this.options.loggerParam) > -1) {
				Veams.logger = true;
			}
	
			// hide all warnings and logs if not in devmode
			if (!Veams.devmode) {
				console.log = console.warn = function () {};
			}
	
			// add console output element (triggered by parameter 'devmode' and 'logger' in url)
			if (Veams.devmode && Veams.logger) {
				var logger = document.createElement('pre');
	
				logger.setAttribute('id', 'logger');
				document.body.appendChild(logger);
	
				console.write = function () {
					for (var i = 0; i < arguments.length; i++) {
						if (_typeof(arguments[i]) === 'object') {
							logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
						} else {
							logger.innerHTML += arguments[i] + '<br />';
						}
					}
	
					logger.innerHTML += '<br />';
					logger.scrollTop = logger.scrollHeight;
				};
	
				console.error = function () {
					logger.innerHTML += '[Error]<br />';
					console.write.apply(this, arguments);
				};
	
				console.warn = function () {
					logger.innerHTML += '[Warn]<br />';
					console.write.apply(this, arguments);
				};
	
				console.log = function () {
					logger.innerHTML += '[Log]<br />';
					console.write.apply(this, arguments);
				};
			}
		}
	};
	
	exports.default = VeamsLogger;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
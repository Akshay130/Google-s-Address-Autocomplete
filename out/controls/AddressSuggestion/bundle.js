/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./AddressSuggestion/index.ts":
/*!************************************!*\
  !*** ./AddressSuggestion/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.AddressInputV3 = void 0;\nvar AddressInputV3 = /** @class */function () {\n  function AddressInputV3() {\n    this._selectedAddress = \"\";\n  }\n  AddressInputV3.prototype.init = function (context, notifyOutputChanged, state, container) {\n    this._context = context;\n    this._notifyOutputChanged = notifyOutputChanged;\n    this._container = container;\n    this._apiKey = context.parameters.apiKey.raw;\n    // Create input element\n    this._input = document.createElement(\"input\");\n    this._input.style.width = context.parameters.IWidth.raw + \"px\";\n    this._input.style.height = context.parameters.IHeight.raw + \"px\";\n    this._input.style.borderRadius = context.parameters.Radius.raw + \"px\";\n    this._input.style.fontSize = context.parameters.Fontsize.raw + \"px\";\n    this._input.type = \"text\";\n    this._input.id = \"address-input\";\n    this._container.appendChild(this._input);\n    // Clear button\n    this.clearButton = document.createElement(\"button\");\n    this.clearButton.style.borderRadius = this._input.style.height;\n    this.clearButton.style.height = this._input.style.height;\n    this.clearButton.style.width = this._input.style.height;\n    this.clearButton.style.fontSize = this._input.style.fontSize;\n    this.clearButton.innerText = \"X\";\n    this.clearButton.addEventListener(\"click\", this._handleClear.bind(this));\n    this._container.appendChild(this.clearButton);\n    // Load Google Places API\n    var script = document.createElement(\"script\");\n    script.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(this._apiKey, \"&libraries=places\");\n    script.async = true;\n    script.onload = this._initializeAutocomplete.bind(this);\n    this._container.appendChild(script);\n  };\n  AddressInputV3.prototype._handleClear = function () {\n    //this._selectedAddress = \"\";\n    this._input.value = \"\";\n    this._notifyOutputChanged();\n  };\n  AddressInputV3.prototype._initializeAutocomplete = function () {\n    // Create autocomplete object\n    this._autocomplete = new google.maps.places.Autocomplete(this._input);\n    this._autocomplete.addListener(\"place_changed\", this._handlePlaceChanged.bind(this));\n    // Add event listener to input element\n    this._input.addEventListener(\"input\", this._handleInput.bind(this));\n  };\n  AddressInputV3.prototype._handleInput = function () {\n    var query = this._input.value;\n    var service = new google.maps.places.AutocompleteService();\n    service.getPlacePredictions({\n      input: query\n    }, function (predictions, status) {\n      if (status === google.maps.places.PlacesServiceStatus.OK) {\n        var addresses = predictions.map(function (prediction) {\n          return prediction.description;\n        });\n        //  this._renderSuggestions(addresses);\n      } else {\n        //  this._renderSuggestions([]);\n      }\n    });\n  };\n  AddressInputV3.prototype._handlePlaceChanged = function () {\n    var place = this._autocomplete.getPlace();\n    if (place && place.formatted_address) {\n      this._selectedAddress = place.formatted_address;\n      this._notifyOutputChanged();\n    }\n  };\n  AddressInputV3.prototype._clearSuggestions = function () {\n    var suggestionsList = this._container.querySelector(\".suggestions-list\");\n    if (suggestionsList) {\n      this._container.removeChild(suggestionsList);\n    }\n  };\n  AddressInputV3.prototype.updateView = function (context) {\n    this._context = context;\n    this._apiKey = context.parameters.apiKey.raw;\n    this._input.style.borderRadius = context.parameters.Radius.raw + \"px\";\n    this._input.style.fontSize = context.parameters.Fontsize.raw + \"px\";\n    this._input.style.width = context.parameters.IWidth.raw + \"px\";\n    this._input.style.height = context.parameters.IHeight.raw + \"px\";\n    this._container.appendChild(this._input);\n    this.clearButton.style.borderRadius = this._input.style.height;\n    this.clearButton.style.height = this._input.style.height;\n    this.clearButton.style.width = this._input.style.height;\n    this.clearButton.style.fontSize = this._input.style.fontSize;\n    this._container.appendChild(this.clearButton);\n    // Load Google Places API\n    var script = document.createElement(\"script\");\n    script.src = \"https://maps.googleapis.com/maps/api/js?key=\".concat(this._apiKey, \"&libraries=places\");\n    script.async = true;\n    script.onload = this._initializeAutocomplete.bind(this);\n    this._container.appendChild(script);\n  };\n  AddressInputV3.prototype.getOutputs = function () {\n    return {\n      SelectedAddress: this._selectedAddress\n    };\n  };\n  AddressInputV3.prototype.destroy = function () {};\n  return AddressInputV3;\n}();\nexports.AddressInputV3 = AddressInputV3;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./AddressSuggestion/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./AddressSuggestion/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('AddressInputV3.AddressInputV3', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AddressInputV3);
} else {
	var AddressInputV3 = AddressInputV3 || {};
	AddressInputV3.AddressInputV3 = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.AddressInputV3;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}
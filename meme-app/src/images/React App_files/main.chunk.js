(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".App {\n  text-align: center;\n}\n\n.App-logo {\n  animation: App-logo-spin infinite 20s linear;\n  height: 40vmin;\n  pointer-events: none;\n}\n\n/* .App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n} */\n\n.memeDropZone {\n  color: blue;\n  height: 30vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: dotted 5px;\n  margin: 10%;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropzone.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Dropzone.css ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".Dropzone {\n    height: 200px;\n    width: 33vw;\n    margin-left: 33vw;\n    background-color: #fff;\n    border: 2px dashed rgb(187, 186, 186);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    font-size: 16px;\n  }\n\n  .Icon {\n    opacity: 0.3;\n    height: 64px;\n    width: 64px;\n  }\n\n  .FileInput {\n      display: none;\n  }\n\n  .Highlight {\n      background-color: green;\n  }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Uploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Uploader */ "./src/components/Uploader.js");
/* harmony import */ var _components_MemeCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/MemeCollection */ "./src/components/MemeCollection.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/App.js";





class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, " // Flatiron Meme Department "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "/vote",
      component: _components_MemeCollection__WEBPACK_IMPORTED_MODULE_3__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Route"], {
      path: "/upload",
      component: _components_Uploader__WEBPACK_IMPORTED_MODULE_2__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/components/Dropzone.css":
/*!*************************************!*\
  !*** ./src/components/Dropzone.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Dropzone.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropzone.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Dropzone.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropzone.css", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./Dropzone.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Dropzone.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Dropzone.js":
/*!************************************!*\
  !*** ./src/components/Dropzone.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropzone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropzone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropzone.css */ "./src/components/Dropzone.css");
/* harmony import */ var _Dropzone_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dropzone_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_poo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/poo.png */ "./src/images/poo.png");
/* harmony import */ var _images_poo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_poo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_checkmark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/checkmark.png */ "./src/images/checkmark.png");
/* harmony import */ var _images_checkmark_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_checkmark_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/components/Dropzone.js";




class Dropzone extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props); //state

    this.state = {
      highlight: false,
      uploadText: 'Drop your meme here!'
    }; // create Ref

    this.fileInputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef(); // binding

    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }

  fileListToArray(list) {
    const array = [];

    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }

    return array;
  }

  onFilesAdded(e) {
    if (this.props.disabled) return;
    const files = e.target.files;

    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }

  onDragOver(e) {
    e.preventDefault();
    if (this.props.disabled) return;
    this.setState({
      highlight: true
    });
  }

  onDragLeave(e) {
    e.preventDefault();
    this.setState({
      highlight: false
    });
  }

  onDrop(e) {
    e.preventDefault();
    if (this.props.disabled) return;
    const files = e.dataTransfer.files;

    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }

    this.setState({
      highlight: false,
      uploadText: files[0].name
    });
    console.log(files[0]);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Dropzone ".concat(this.state.highlight ? "Highlight" : ""),
      onDragOver: this.onDragOver,
      onDragLeave: this.onDragLeave,
      onDrop: this.onDrop,
      onClick: this.openFileDialog,
      style: {
        cursor: this.props.disabled ? "default" : "pointer"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "Drop icon",
      className: "Icon",
      src: this.state.uploadText === 'Drop your meme here!' ? _images_poo_png__WEBPACK_IMPORTED_MODULE_2___default.a : _images_checkmark_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.fileInputRef,
      className: "FileInput",
      type: "file",
      multiple: true,
      onChange: this.onFilesAdded,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, this.state.uploadText));
  }

}

/***/ }),

/***/ "./src/components/Meme.js":
/*!********************************!*\
  !*** ./src/components/Meme.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_up_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/up.png */ "./src/images/up.png");
/* harmony import */ var _images_up_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_up_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/components/Meme.js";




const Meme = props => {
  let name = props.name,
      src = props.src,
      votes = props.votes;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "UpVote",
    width: "50px",
    height: "50px",
    src: _images_up_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 10,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    width: "400px",
    height: "400px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      'text-align': 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "By: ", name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Meme);

/***/ }),

/***/ "./src/components/MemeCollection.js":
/*!******************************************!*\
  !*** ./src/components/MemeCollection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MemeCollection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Meme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meme */ "./src/components/Meme.js");
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/components/MemeCollection.js";


class MemeCollection extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
    this.state = {
      memes: []
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "To do: render images that I can upvote"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Meme__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "test",
      src: "http://www.quickmeme.com/img/94/940d9eb9c57d1adad412682cd2e94e1fee75ac0854cca8e59eb1d011158fd61f.jpg",
      votes: "5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }));
  }

}

/***/ }),

/***/ "./src/components/Uploader.js":
/*!************************************!*\
  !*** ./src/components/Uploader.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Uploader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropzone */ "./src/components/Dropzone.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/components/Uploader.js";



class Uploader extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleFileUpload = e => {
      this.setState({
        img: e,
        disabled: true
      });
    };

    this.handleSubmit = e => {
      e.preventDefault();
      alert(this.state.img);
    };

    this.state = {
      img: '',
      disabled: false
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "Submit a meme!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: event => this.handleSubmit(event),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Dropzone__WEBPACK_IMPORTED_MODULE_1__["default"], {
      disabled: this.state.disabled,
      onFilesAdded: e => this.handleFileUpload(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/vote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, "Vote on memes!"));
  }

}

/***/ }),

/***/ "./src/images/checkmark.png":
/*!**********************************!*\
  !*** ./src/images/checkmark.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/poo.png":
/*!****************************!*\
  !*** ./src/images/poo.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/up.png":
/*!***************************!*\
  !*** ./src/images/up.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABI2AAASNgFeuZmYAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAHJQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwopa3AAAACV0Uk5TAAECBQwZJCUmJyg7PkJeZmlrepaZnZ6go7S4usrU4+Tl5uf8/fy3f4wAAAHtSURBVHja7dpHc8IwEIbhNd0klEAgdJfg//8Xc8gwGCxpVVby5dujmPH7uAkOEIVMtrxclhn1Ntm2aZpmm/Xb70/w6PclePb7EbT7fQhe++kF7/3Ugm4/rUDVTylQ99MJdP1UAn0/jcDUTyEw9+MLuH5sAd+PK7DpxxTY9eMJbPuxBPb9OAKXfgyBW19e4NqXFrj3ZQU+fUmBX19O4NuXEvj3ZQQhfQlBWD9cENoPFYT3wwQS/RCBTN9fINX3Fcj1/QSSfR+BbN9dIN13Fcj33QRc/9dp2V3A9fdn9fp5LyNg+4OT+oPTQETA90kHIBHBhu3rAaxgw/eHNds3ADhBPWQB47vpALuMzABGcB/zl+DInb8ZYBYcLZ6BXH8Pdv99M8AkqHOb12Bem8+fA+gF9dxuI8grc58D6ARVThQgePZZgFpg3yeaVaY+D1AJqpnL1+GsNPQtAF1B6dTvCF76NoB3gWufaFpq+1aAV0E5df9ROC10fTtAW1B49FuC974l4Cnw6xNNCnXfFvAQFBPynMmttf96AGiwa5rm5t0nGn39fCqWrQFEH9+rEYmPAyDOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzXgkAywUAMWyQDZ+trNX9de/yD/AwOoopzc00kdAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var _node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/index.js";







react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["BrowserRouter"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/btsvilikhovsky/Code/meme-app/meme-app-front/meme-app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map
webpackHotUpdate(5,{

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _Nav = __webpack_require__(564);

var _Nav2 = _interopRequireDefault(_Nav);

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

__webpack_require__(562);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\project\\App\\pages\\index.js?entry';


var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'Welcome | Strontium University'), _react2.default.createElement('link', { href: '/static/img/favicon/favicon.ico', rel: 'icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement('link', { href: 'static/css/reset.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', { href: 'static/materialize/css/materialize.min.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('link', { href: 'static/build/css/global.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement('link', { href: 'static/build/css/index.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      })), _react2.default.createElement('section', { className: 'fullscreen', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, _react2.default.createElement('div', { className: 'fullscreen landing-bg', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('div', { className: 'welcome', __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, _react2.default.createElement('h4', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Welcome To'), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, 'Strontium University'), _react2.default.createElement('a', { href: '#more', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, 'WE ARE CREATING THE CREATORS'))))), _react2.default.createElement(_Nav2.default, { Page: 'Home', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('main', { id: 'more', className: 'fullscreen', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('section', { className: 'welcome-text', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, _react2.default.createElement('h5', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, this.props.data.welcomeTitle), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, this.props.data.welcomeText))), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('script', { src: 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('script', { type: 'text/javascript', src: '/static/build/js/global.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var url, file, res, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = "http://localhost:40/static/data/";
                file = "index";
                _context.next = 4;
                return fetch(url + file + '.json');

              case 4:
                res = _context.sent;
                _context.next = 7;
                return res.json();

              case 7:
                data = _context.sent;
                return _context.abrupt('return', { data: data });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\project\\App\\pages\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\project\\App\\pages\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcz9jYmM1MzI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDUDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWNNOzZCQUNFOztvQkFBQTtzQkFDRTtBQURGO0FBQUEseUJBQ0c7O29CQUFEO3NCQUNJO0FBREo7QUFBQSxpREFDVSxTQUFRO29CQUFkO3NCQUNBO0FBREE7a0RBQ00sTUFBSyxZQUFXLFNBQVE7b0JBQTlCO3NCQUNBO0FBREE7MEJBQ0E7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNBLDJFQUFNLE1BQUssbUNBQWtDLEtBQUk7b0JBQWpEO3NCQUNBO0FBREE7a0RBQ00sTUFBSyx3QkFBdUIsS0FBSTtvQkFBdEM7c0JBQ0E7QUFEQTtrREFDTSxNQUFLLDJEQUEwRCxLQUFJO29CQUF6RTtzQkFDQTtBQURBO2tEQUNNLE1BQUssOENBQTZDLEtBQUk7b0JBQTVEO3NCQUNBO0FBREE7a0RBQ00sTUFBSywrQkFBOEIsS0FBSTtvQkFBN0M7c0JBQ0E7QUFEQTtrREFDTSxNQUFLLDhCQUE2QixLQUFJO29CQUE1QztzQkFHSjtBQUhJOzJCQUdKLDJCQUFTLFdBQVU7b0JBQW5CO3NCQUNJO0FBREo7eUJBQ0ksdUJBQUssV0FBVTtvQkFBZjtzQkFDRTtBQURGO3lCQUNFLHVCQUFLLFdBQVU7b0JBQWY7c0JBQ0U7QUFERjt5QkFDRTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQ0E7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUNBLDhEQUFHLE1BQUs7b0JBQVI7c0JBQWdCO0FBQWhCO3lCQUFnQjs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBSXhCLHFEQUFDLCtCQUFJLE1BQUs7b0JBQVY7c0JBQ0E7QUFEQTswQkFDQSx3QkFBTSxJQUFHLFFBQU8sV0FBVTtvQkFBMUI7c0JBQ0U7QUFERjt5QkFDRSwyQkFBUyxXQUFVO29CQUFuQjtzQkFDRTtBQURGO3lCQUNFOztvQkFBQTtzQkFBSztBQUFMO0FBQUEsY0FBVSxNQUFNLEtBQ2hCOztvQkFBQTtzQkFBSTtBQUFKO0FBQUEsY0FBUyxNQUFNLEtBSW5CLDBEQUFRLEtBQUk7b0JBQVo7c0JBQ0E7QUFEQTtvREFDUSxLQUFJO29CQUFaO3NCQUNBO0FBREE7b0RBQ1EsTUFBSyxtQkFBa0IsS0FBSTtvQkFBbkM7c0JBSVA7QUFKTzs7Ozs7Ozs7Ozs7bUJBMUNBO3NCQUNBO3VCQUFNOzt1QkFDTSxNQUFNLE1BQU0sT0FBTzs7bUJBQS9COzs7dUJBQ2EsSUFBSTs7bUJBQWpCOztpREFDQyxFQUFFLE1BQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFQa0IsZ0JBQU0iLCJmaWxlIjoiNS40ZWNjM2ZmN2E2ODkwMjk2YmVkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XHJcbiAgICBjb25zdCB1cmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAvc3RhdGljL2RhdGEvXCJcclxuICAgIGNvbnN0IGZpbGU9IFwiaW5kZXhcIlxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsICsgZmlsZSArICcuanNvbicpXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgcmV0dXJuIHsgZGF0YSB9XHJcbiAgfVxyXG4gIFxyXG5cclxucmVuZGVyICgpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCIgLz5cclxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgICAgPHRpdGxlPldlbGNvbWUgfCBTdHJvbnRpdW0gVW5pdmVyc2l0eTwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1nL2Zhdmljb24vZmF2aWNvbi5pY29cIiByZWw9XCJpY29uXCIvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJzdGF0aWMvY3NzL3Jlc2V0LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XHJcbiAgICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJzdGF0aWMvbWF0ZXJpYWxpemUvY3NzL21hdGVyaWFsaXplLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJzdGF0aWMvYnVpbGQvY3NzL2dsb2JhbC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxyXG4gICAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJzdGF0aWMvYnVpbGQvY3NzL2luZGV4LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZ1bGxzY3JlZW5cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ1bGxzY3JlZW4gbGFuZGluZy1iZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5XZWxjb21lIFRvPC9oND5cclxuICAgICAgICAgICAgICAgICAgPGgxPlN0cm9udGl1bSBVbml2ZXJzaXR5PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtb3JlXCI+PHA+V0UgQVJFIENSRUFUSU5HIFRIRSBDUkVBVE9SUzwvcD48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPE5hdiBQYWdlPVwiSG9tZVwiIC8+XHJcbiAgICAgICAgICA8bWFpbiBpZD1cIm1vcmVcIiBjbGFzc05hbWU9XCJmdWxsc2NyZWVuXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUtdGV4dFwiPlxyXG4gICAgICAgICAgICAgIDxoNT57dGhpcy5wcm9wcy5kYXRhLndlbGNvbWVUaXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmRhdGEud2VsY29tZVRleHR9PC9wPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy4yLjEubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHA6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvanF1ZXJ5LWVhc2luZy8xLjMvanF1ZXJ5LmVhc2luZy5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cIi9zdGF0aWMvYnVpbGQvanMvZ2xvYmFsLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICApO1xyXG4gIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Card = require('../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

require('isomorphic-fetch');

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
          lineNumber: 20
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement('meta', { charset: 'UTF-8', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Welcome | Strontium University'), _react2.default.createElement('link', { href: '/static/img/favicon/favicon.ico', rel: 'icon', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement('link', { href: 'static/css/reset.css', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement('link', { href: 'static/materialize/css/materialize.min.css', rel: 'stylesheet', __source: {
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
      }, 'We are creating the creators'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus incidunt ducimus ad, laborum in, laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique, saepe? adipisicing elit. Doloribus incidunt ducimus ad, laborum in, laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique, saepe? laboriosam odit molestias illo. Hic aperiam impedit corrupti, et quis quo magnam consequuntur. Dolores similique')), _react2.default.createElement('section', { className: 'cards', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_Card2.default, { img: '01.jpg', Title: 'Consistent', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(_Card2.default, { img: '02.jpg', Title: 'Co-operative', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_Card2.default, { img: '03.jpg', Title: 'Diversified', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_Card2.default, { img: '04.jpg', Title: 'Excellent', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(_Card2.default, { img: '05.jpg', Title: 'Concise', __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }), _react2.default.createElement(_Card2.default, { img: '06.jpg', Title: 'Responsible', __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement(_Card2.default, { img: '07.jpg', Title: 'Creative', __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement('script', { src: 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('script', { type: 'text/javascript', src: '/static/build/js/global.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }));
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;
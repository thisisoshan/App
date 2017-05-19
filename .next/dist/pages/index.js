'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
  (0, _inherits3.default)(_class, _React$Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'UTF-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('title', null, 'Welcome | Strontium University'), _react2.default.createElement('link', { href: '/static/img/favicon/favicon.ico', rel: 'icon' }), _react2.default.createElement('link', { href: 'static/css/reset.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/materialize/css/materialize.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/build/css/global.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/build/css/index.css', rel: 'stylesheet' })), _react2.default.createElement('section', { className: 'fullscreen' }, _react2.default.createElement('div', { className: 'fullscreen landing-bg' }, _react2.default.createElement('div', { className: 'welcome' }, _react2.default.createElement('h4', null, 'Welcome To'), _react2.default.createElement('h1', null, 'Strontium University'), _react2.default.createElement('a', { href: '#more' }, _react2.default.createElement('p', null, 'Start Exploring ', _react2.default.createElement('i', { className: 'material-icons' }, 'call_made')))))), _react2.default.createElement(_Nav2.default, { Page: 'Home' }), _react2.default.createElement('main', { id: 'more', className: 'fullscreen' }, _react2.default.createElement('section', { className: 'welcome-text' }, _react2.default.createElement('h5', null, this.props.data.welcomeTitle), _react2.default.createElement('p', null, this.props.data.welcomeText))), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.min.js' }), _react2.default.createElement('script', { src: 'http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js' }), _react2.default.createElement('script', { type: 'text/javascript', src: '/static/build/js/global.js' }));
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
                url = "https://thisisoshan.github.io/react-app/static/data/";
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
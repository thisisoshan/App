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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nav = function (_Component) {
  (0, _inherits3.default)(Nav, _Component);

  function Nav() {
    (0, _classCallCheck3.default)(this, Nav);

    return (0, _possibleConstructorReturn3.default)(this, (Nav.__proto__ || (0, _getPrototypeOf2.default)(Nav)).apply(this, arguments));
  }

  (0, _createClass3.default)(Nav, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('header', null, _react2.default.createElement('nav', { className: 'nav card-panel red darken-2' }, _react2.default.createElement('div', null, _react2.default.createElement(_link2.default, { prefetch: true, href: '../' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Home'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'About'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/programs' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Programs'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/team' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Team'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/courses' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Courses'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/events' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Events'))), _react2.default.createElement(_link2.default, { prefetch: true, href: '/blog' }, _react2.default.createElement('a', null, _react2.default.createElement('p', null, 'Blog'))))), _react2.default.createElement('div', { className: 'title' }, _react2.default.createElement('h5', null, this.props.Page)));
    }
  }]);

  return Nav;
}(_react.Component);

exports.default = Nav;
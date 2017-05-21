'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Nav = require('../components/Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Hero = require('../components/Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'UTF-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('title', null, 'About | Strontium University'), _react2.default.createElement('link', { href: '/static/img/favicon/favicon.ico', rel: 'icon' }), _react2.default.createElement('link', { href: 'static/css/reset.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/materialize/css/materialize.min.css', rel: 'stylesheet' }), _react2.default.createElement('link', { href: 'static/build/css/secondary.css', rel: 'stylesheet' })), _react2.default.createElement(_Nav2.default, { Page: 'About Us' }), _react2.default.createElement(_Hero2.default, null), _react2.default.createElement('main', { className: 'fullscreen' }, _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.2.1.min.js' }), _react2.default.createElement('script', { type: 'text/javascript', src: '/static/build/js/global.js' })));
};
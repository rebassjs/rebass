"use strict";

exports.__esModule = true;
var _exportNames = {
  Box: true,
  Flex: true,
  Text: true,
  Heading: true,
  Link: true,
  Button: true,
  Image: true,
  Card: true
};
exports.Card = exports.Image = exports.Button = exports.Link = exports.Heading = exports.Text = exports.Flex = exports.Box = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

Object.keys(_styledSystem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _styledSystem[key];
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};

var Box = (0, _styled["default"])('div')({
  boxSizing: 'border-box'
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout, _styledSystem.typography, _styledSystem.color, _styledSystem.flexbox), themed('Box'));
exports.Box = Box;
var Flex = (0, _styled["default"])(Box)({
  display: 'flex'
}, themed('Flex'));
exports.Flex = Flex;
var Text = (0, _styled["default"])(Box)(themed('Text'));
exports.Text = Text;
var Heading = (0, _styled["default"])(Text)(themed('Heading'));
exports.Heading = Heading;
Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold'
};
var Link = (0, _styled["default"])(Text)(themed('Link'));
exports.Link = Link;
Link.defaultProps = {
  as: 'a',
  color: 'blue'
};
var Button = (0, _styled["default"])(Box)({
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  textDecoration: 'none'
}, (0, _styledSystem.compose)(_styledSystem.border, _styledSystem.buttonStyle), themed('Button'));
exports.Button = Button;
Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 4
};
var Image = (0, _styled["default"])(Box)({
  maxWidth: '100%',
  height: 'auto'
}, _styledSystem.border, themed('Image'));
exports.Image = Image;
Image.defaultProps = {
  as: 'img',
  m: 0
};
var cards = (0, _styledSystem.variant)({
  key: 'cards'
});
var Card = (0, _styled["default"])(Box)((0, _styledSystem.compose)(_styledSystem.border, _styledSystem.shadow, _styledSystem.background, cards), themed('Card'));
exports.Card = Card;
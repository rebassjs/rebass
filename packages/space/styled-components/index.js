"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StyledChildren = void 0;

var _react = _interopRequireDefault(require("react"));

var _styled = _interopRequireDefault(require("@emotion/styled"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var classnames = function classnames() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.join(' ');
};

var getClassName = function getClassName(el) {
  return el.props && el.props.className || '';
};

var StyledChildren = function StyledChildren(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var styledChildren = _react["default"].Children.toArray(children).map(function (child) {
    return _react["default"].cloneElement(child, {
      className: classnames(getClassName(child), className)
    });
  });

  return _react["default"].createElement(_react["default"].Fragment, null, styledChildren);
};

exports.StyledChildren = StyledChildren;
var Space = (0, _styled["default"])(StyledChildren)(_styledSystem.space);
var _default = Space;
exports["default"] = _default;
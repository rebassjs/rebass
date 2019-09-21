"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tiles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("reflexbox/styled-components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};

var widthToColumns = function widthToColumns(width) {
  return Array.isArray(width) ? width.map(widthToColumns) : !!width && "repeat(auto-fit, minmax(".concat(px(width), ", 1fr))");
};

var countToColumns = function countToColumns(n) {
  return Array.isArray(n) ? n.map(countToColumns) : !!n && "repeat(".concat(n, ", 1fr)");
};

var Tiles = (0, _react.forwardRef)(function (_ref, ref) {
  var width = _ref.width,
      columns = _ref.columns,
      _ref$gap = _ref.gap,
      gap = _ref$gap === void 0 ? 3 : _ref$gap,
      props = _objectWithoutProperties(_ref, ["width", "columns", "gap"]);

  var gridTemplateColumns = !!width ? widthToColumns(width) : countToColumns(columns);
  return _react["default"].createElement(_styledComponents.Box, _extends({
    ref: ref,
    tx: "layout",
    variant: "tiles"
  }, props, {
    __css: {
      display: 'grid',
      gridGap: gap,
      gridTemplateColumns: gridTemplateColumns
    }
  }));
});
exports.Tiles = Tiles;
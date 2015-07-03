'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MenuItem = (function (_React$Component) {
  function MenuItem() {
    _classCallCheck(this, MenuItem);

    _get(Object.getPrototypeOf(MenuItem.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(MenuItem, _React$Component);

  _createClass(MenuItem, [{
    key: 'render',
    value: function render() {
      var label = this.props.children || this.props.label;
      var className = (0, _classnames2['default'])('MenuItem btn block', {
        'p0 py1': !this.props.compact && this.props.flush,
        'p0': this.props.compact && this.props.flush
      });
      var style = {};
      if (this.props.compact) {
        style.paddingTop = 4;
        style.paddingBottom = 4;
        style.paddingLeft = this.props.flush ? 0 : 8;
        style.paddingRight = this.props.flush ? 0 : 8;
      }

      return _react2['default'].createElement(
        'a',
        _extends({}, this.props, {
          className: className,
          style: style }),
        label
      );
    }
  }]);

  return MenuItem;
})(_react2['default'].Component);

MenuItem.propTypes = {
  flush: _react2['default'].PropTypes.bool,
  compact: _react2['default'].PropTypes.bool
};

exports['default'] = MenuItem;
module.exports = exports['default'];
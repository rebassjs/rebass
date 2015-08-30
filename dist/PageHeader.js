'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var PageHeader = (function (_React$Component) {
  _inherits(PageHeader, _React$Component);

  function PageHeader() {
    _classCallCheck(this, PageHeader);

    _get(Object.getPrototypeOf(PageHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PageHeader, [{
    key: 'render',
    value: function render() {
      var description = this.props.description ? _react2['default'].createElement(
        'p',
        { className: 'm0' },
        this.props.description
      ) : false;
      return _react2['default'].createElement(
        'header',
        _extends({}, this.props, {
          className: (0, _classnames2['default'])('flex', 'flex-wrap', this.props.center ? 'flex-center' : 'flex-baseline', 'py3', 'mb4', 'border-bottom') }),
        _react2['default'].createElement(
          'div',
          { className: 'flex-auto' },
          _react2['default'].createElement(
            'h1',
            { className: 'm0' },
            this.props.title
          ),
          description
        ),
        this.props.children
      );
    }
  }]);

  return PageHeader;
})(_react2['default'].Component);

exports['default'] = PageHeader;
module.exports = exports['default'];
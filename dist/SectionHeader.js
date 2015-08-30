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

var SectionHeader = (function (_React$Component) {
  _inherits(SectionHeader, _React$Component);

  function SectionHeader() {
    _classCallCheck(this, SectionHeader);

    _get(Object.getPrototypeOf(SectionHeader.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SectionHeader, [{
    key: 'render',
    value: function render() {
      var id = this.props.id || this.props.title || '!';
      return _react2['default'].createElement(
        'header',
        _extends({}, this.props, {
          id: id,
          className: 'flex flex-baseline flex-wrap py2 mb2 border-bottom' }),
        _react2['default'].createElement(
          'h2',
          { className: 'flex-auto m0' },
          _react2['default'].createElement(
            'a',
            { href: '#' + id,
              className: 'color-inherit' },
            this.props.title
          )
        ),
        this.props.children
      );
    }
  }]);

  return SectionHeader;
})(_react2['default'].Component);

exports['default'] = SectionHeader;
module.exports = exports['default'];
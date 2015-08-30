'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var FlexRow = (function (_React$Component) {
  _inherits(FlexRow, _React$Component);

  function FlexRow() {
    _classCallCheck(this, FlexRow);

    _get(Object.getPrototypeOf(FlexRow.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(FlexRow, [{
    key: 'render',
    value: function render() {
      var flex = 'flex';
      var align = 'flex-center';
      var _props = this.props;
      var top = _props.top;
      var bottom = _props.bottom;
      var sm = _props.sm;
      var md = _props.md;
      var lg = _props.lg;

      if (top) {
        align = 'flex-start';
      } else if (bottom) {
        align = 'flex-end';
      }
      if (sm) {
        flex = 'sm-flex';
      } else if (md) {
        flex = 'md-flex';
      } else if (lg) {
        flex = 'lg-flex';
      }
      return _react2['default'].createElement(
        'div',
        {
          className: (0, _classnames2['default'])(flex, align, {
            'flex-wrap': this.props.wrap,
            'mxn2': this.props.pad
          }) },
        this.props.children
      );
    }
  }]);

  return FlexRow;
})(_react2['default'].Component);

FlexRow.propTypes = {
  wrap: _react2['default'].PropTypes.bool,
  sm: _react2['default'].PropTypes.bool,
  md: _react2['default'].PropTypes.bool,
  lg: _react2['default'].PropTypes.bool,
  top: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool,
  center: _react2['default'].PropTypes.bool,
  pad: _react2['default'].PropTypes.bool
};

FlexRow.defaultProps = {
  top: false,
  bottom: false,
  center: true,
  pad: true
};

exports['default'] = FlexRow;
module.exports = exports['default'];
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Arrow = (function (_React$Component) {
  function Arrow() {
    _classCallCheck(this, Arrow);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Arrow, _React$Component);

  _createClass(Arrow, [{
    key: 'render',
    value: function render() {
      styles = {
        arrow: {
          display: 'inline-block',
          width: 0,
          height: 0,
          marginLeft: '.1875em',
          verticalAlign: 'middle',
          borderRight: '.3125em solid transparent',
          borderLeft: '.3125em solid transparent'
        }
      };
      if (!this.props.up) {
        styles.arrow.borderTop = '.4375em solid';
      } else if (this.props.up) {
        styles.arrow.borderBottom = '.4375em solid';
      }

      return _react2['default'].createElement('span', { style: styles.arrow });
    }
  }]);

  return Arrow;
})(_react2['default'].Component);

Arrow.propTypes = {
  up: _react2['default'].PropTypes.bool
};

exports['default'] = Arrow;
module.exports = exports['default'];
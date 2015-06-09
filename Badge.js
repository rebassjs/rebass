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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _colorbass = require('colorbass');

var _colorbass2 = _interopRequireDefault(_colorbass);

var Badge = (function (_React$Component) {
  function Badge() {
    _classCallCheck(this, Badge);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Badge, _React$Component);

  _createClass(Badge, [{
    key: 'render',
    value: function render() {
      classes = (0, _classnames2['default'])('h5', 'bold', (0, _colorbass2['default'])(this.props.color).primary);
      return _react2['default'].createElement(
        'span',
        { className: classes },
        this.props.children
      );
    }
  }]);

  return Badge;
})(_react2['default'].Component);

Badge.propTypes = {
  color: _react2['default'].PropTypes.string
};

//Badge.defaultProps = {
//  color: false
//}

exports['default'] = Badge;
module.exports = exports['default'];
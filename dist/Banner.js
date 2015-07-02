'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Banner = (function (_React$Component) {
  function Banner() {
    _classCallCheck(this, Banner);

    _get(Object.getPrototypeOf(Banner.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Banner, _React$Component);

  _createClass(Banner, [{
    key: 'render',
    value: function render() {
      var styles = {
        container: {
          textAlign: 'center',
          backgroundImage: this.props.bgImage,
          backgroundPostion: this.props.bgPosition,
          backgroundSize: this.props.bgSize
        },
        header: {
          minHeight: '1.5em'
        },
        footer: {
          minHeight: '1.5em'
        }
      };
      if (this.props.left) {
        styles.container.textAlign = 'left';
      } else if (this.props.right) {
        styles.container.textAlign = 'right';
      }

      return _react2['default'].createElement(
        'div',
        { className: ['white', 'bg-' + this.props.bgColor].join(' '),
          style: styles.container },
        _react2['default'].createElement(
          'div',
          {
            className: 'p2',
            style: styles.header },
          this.props.header
        ),
        _react2['default'].createElement(
          'div',
          { className: 'px3 py4' },
          this.props.children
        ),
        _react2['default'].createElement(
          'div',
          {
            className: 'p2',
            style: styles.footer },
          this.props.footer
        )
      );
    }
  }]);

  return Banner;
})(_react2['default'].Component);

Banner.propTypes = {
  left: _react2['default'].PropTypes.bool,
  right: _react2['default'].PropTypes.bool,
  bgColor: _react2['default'].PropTypes.string,
  bgImage: _react2['default'].PropTypes.string,
  bgSize: _react2['default'].PropTypes.string,
  bgPosition: _react2['default'].PropTypes.string
};

Banner.defaultProps = {
  bgColor: 'black',
  bgSize: 'cover',
  bgPosition: 'center'
};

exports['default'] = Banner;
module.exports = exports['default'];
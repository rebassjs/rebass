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

var Media = (function (_React$Component) {
  function Media() {
    _classCallCheck(this, Media);

    _get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Media, _React$Component);

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      var middle = this.props.middle;
      var bottom = this.props.bottom;
      var alignClassName = 'align-top';
      if (this.props.middle) {
        alignClassName = 'align-middle';
      } else if (this.props.bottom) {
        alignClassName = 'align-bottom';
      }
      var images = _react2['default'].Children.map(this.props.image, function (child) {
        var c = _react2['default'].cloneElement(child, {
          style: {
            display: 'block',
            maxWidth: 'none'
          }
        });
        return c;
      });
      return _react2['default'].createElement(
        'div',
        { className: 'overflow-hidden mxn1' },
        _react2['default'].createElement(
          'div',
          { className: ['table-cell', 'px1', alignClassName].join(' ') },
          images
        ),
        _react2['default'].createElement(
          'div',
          { className: ['table-cell', 'px1', 'col-12', alignClassName].join(' ') },
          this.props.children
        )
      );
    }
  }]);

  return Media;
})(_react2['default'].Component);

Media.propTypes = {
  image: _react2['default'].PropTypes.element,
  middle: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool
};

exports['default'] = Media;
module.exports = exports['default'];
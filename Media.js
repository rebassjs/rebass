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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Media = (function (_React$Component) {
  function Media() {
    _classCallCheck(this, Media);

    _get(Object.getPrototypeOf(Media.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(Media, _React$Component);

  _createClass(Media, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'overflow-hidden mb2 mxn1' },
        this.props.children
      );
    }
  }]);

  return Media;
})(_react2['default'].Component);

var MediaImg = (function (_React$Component2) {
  function MediaImg() {
    _classCallCheck(this, MediaImg);

    _get(Object.getPrototypeOf(MediaImg.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(MediaImg, _React$Component2);

  _createClass(MediaImg, [{
    key: 'render',
    value: function render() {
      var children = _react2['default'].Children.map(this.props.children, function (child) {
        var c = _react2['default'].cloneElement(child, { style: { maxWidth: 'none' } });
        return c;
      });
      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])('table-cell', 'px1', {
            'align-middle': this.props.middle,
            'align-bottom': this.props.bottom,
            'align-top': !this.props.middle && !this.props.bottom
          }) },
        children
      );
    }
  }]);

  return MediaImg;
})(_react2['default'].Component);

MediaImg.propTypes = {
  middle: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool
};

var MediaBody = (function (_React$Component3) {
  function MediaBody() {
    _classCallCheck(this, MediaBody);

    _get(Object.getPrototypeOf(MediaBody.prototype), 'constructor', this).apply(this, arguments);
  }

  _inherits(MediaBody, _React$Component3);

  _createClass(MediaBody, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: (0, _classnames2['default'])('table-cell', 'px1', 'col-12', {
            'align-middle': this.props.middle,
            'align-bottom': this.props.bottom,
            'align-top': !this.props.middle && !this.props.bottom
          }) },
        this.props.children
      );
    }
  }]);

  return MediaBody;
})(_react2['default'].Component);

MediaBody.propTypes = {
  middle: _react2['default'].PropTypes.bool,
  bottom: _react2['default'].PropTypes.bool
};

exports['default'] = { Media: Media, MediaImg: MediaImg, MediaBody: MediaBody };
module.exports = exports['default'];
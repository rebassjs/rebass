
var React = require('react');
var classnames = require('classnames');
var colorbass = require('../colorbass');

var Button = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'silver',
      flush: false,
      active: false,
      className: '',
      outline: false,
      transparent: false,
      size: false,
    }
  },

  render: function() {
    var bassClasses = colorbass(this.props.theme);
    var buttonClass =
      classnames(
        this.props.className,
        (!this.props.active && this.props.outline || this.props.transparent) ? bassClasses.secondary : bassClasses.primary,
        'button',
        { 'button-small': this.props.size == 'small' },
        { 'button-big': this.props.size == 'big' },
        { mr1: !this.props.flush },
        { 'is-active': this.props.active },
        { 'button-outline': this.props.outline },
        { 'button-transparent': this.props.transparent });
    return (
      <button {...this.props} className={buttonClass}>
        {this.props.children}
      </button>
    )
  }

});

module.exports = Button;


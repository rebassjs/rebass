
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Button = React.createClass({displayName: "Button",

  getDefaultProps: function() {
    return {
      color: 'silver',
      flush: false,
      active: false,
      outline: false,
      transparent: false,
      size: false,
      justified: false,
    }
  },

  render: function() {
    var bassClasses = colorbass(this.props.color);
    var buttonClass =
      classnames(
        this.props.className,
        (!this.props.active && this.props.outline || this.props.transparent) ? bassClasses.secondary : bassClasses.primary,
        'button',
        { 'button-small': this.props.size == 'small' },
        { 'button-big': this.props.size == 'big' },
        { mr1: !this.props.flush },
        { 'center block': this.props.justified },
        { 'is-active': this.props.active },
        { 'button-outline': this.props.outline },
        { 'button-transparent': this.props.transparent });
    return (
      React.createElement("button", React.__spread({},  this.props, {className: buttonClass}), 
        this.props.children
      )
    )
  }

});

module.exports = Button;


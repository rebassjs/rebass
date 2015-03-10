
var React = require('react');
var classnames = require('classnames');

var MenuItem = React.createClass({displayName: "MenuItem",

  getDefaultProps: function() {
    return {
      label: false,
      inverse: false,
      big: false,
    }
  },

  render: function() {
    var linkClass = 
      classnames(
        'button',
        'block',
        'button-transparent',
        { white: this.props.inverse },
        { py2: this.props.big });
    var label = this.props.label || this.props.children || false;
    return (
      React.createElement("a", React.__spread({},  this.props, {className: linkClass}), 
        label
      )
    )
  }

});

module.exports = MenuItem;



var React = require('react');
var classnames = require('classnames');

var NavItem = React.createClass({displayName: "NavItem",

  getDefaultProps: function() {
    return {
      inverse: false,
      flush: true,
      compact: false,
      justified: false,
      block: false,
    }
  },

  render: function() {
    var linkClass = 
      classnames(
        'center', 'button', 'button-transparent',
        { block: this.props.block },
        { white: this.props.inverse },
        { 'button-narrow': this.props.compact },
        { py2: !this.props.compact },
        { 'flex-auto': this.props.justified },
        { mr1: !this.props.flush });
    return (
      React.createElement("a", React.__spread({},  this.props, {className: linkClass}), 
        this.props.children
      )
    )
  }

});

module.exports = NavItem;


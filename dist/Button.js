
var React = require('react');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      flush: false,
      isActive: false,
      className: '',
    }
  },

  render: function() {
    var buttonClass = this.props.className + ' ';
    buttonClass += 'button-' + this.props.theme;
    buttonClass += this.props.flush ? '' : ' mr1';
    buttonClass += this.props.isActive ? ' is-active' : '';
    return (
      React.createElement("button", React.__spread({},  this.props, {className: buttonClass}), 
        this.props.children
      )
    )
  }

});


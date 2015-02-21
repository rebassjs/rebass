
var React = require('react');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      flush: false,
    }
  },

  render: function() {
    var buttonClass = 'button-' + this.props.theme;
    buttonClass += this.props.flush ? '' : ' mr1';
    return (
      React.createElement("button", React.__spread({},  this.props, {className: buttonClass}), 
        this.props.children
      )
    )
  }

});


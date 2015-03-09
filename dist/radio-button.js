
var React = require('react');
var Button = require('./button');

var RadioButton = React.createClass({displayName: "RadioButton",

  getDefaultProps: function() {
    return {
      onClick: function() {},
    }
  },

  getInitialState: function() {
    return {
      isActive: this.props.isActive,
    }
  },

  handleClick: function(e) {
    var isActive = !this.state.isActive;
    this.setState({ isActive: isActive }, function() {
      this.props.onClick(isActive);
    });
  },

  render: function() {
    return (
      React.createElement(Button, React.__spread({},  this.props, 
        this.state, 
        {onClick: this.handleClick}), 
        this.props.children
      )
    )
  }

});

module.exports = RadioButton;



var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Message = React.createClass({displayName: "Message",

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      color: false
    };
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var classes = {
      container: classnames('bold', 'flex', 'flex-center', 'mb2', 'rounded', colorbass(this.props.color).primary),
      body: classnames('flex-auto', 'p2'),
      dismiss: classnames('h3'),
    };
    var style = {
      display: this.state.visible ? '' : 'none'
    };
    return (
      React.createElement("div", {className: classes.container, style: style}, 
        React.createElement("div", {className: classes.body}, 
          this.props.children
        ), 
        React.createElement("button", {
          onClick: this.dismiss, 
          className: classes.dismiss, 
          style: this.buttonStyle, 
          title: "Dismiss"}, 
            "×"
        )
      )
    )
  }

});

module.exports = Message;


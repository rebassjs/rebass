/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: "exports",


  render: function() {
    return (
      React.createElement("header", {className: "flex flex-center py3 border-bottom"}, 
        React.createElement("div", {className: "flex-auto"}, 
          React.createElement("h1", {className: "m0"}, this.props.name), 
          React.createElement("p", {className: "m0"}, this.props.description)
        )
      )
    )
  }

});


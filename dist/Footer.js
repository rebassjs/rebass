/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: "exports",


  render: function() {
    return (
      React.createElement("footer", {className: "container-fluid"}, 
        React.createElement("p", null, "App footer")
      )
    )
  }

});


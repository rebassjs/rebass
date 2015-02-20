/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({displayName: "exports",

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Header, React.__spread({},  this.props)), 
        React.createElement(Body, React.__spread({},  this.props)), 
        React.createElement(Footer, React.__spread({},  this.props))
      )
    )
  }

});


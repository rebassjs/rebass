/** @jsx React.DOM */

var React = require('react');
var theme = require('./util/theme');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      theme: 'mid-gray'
    };
  },

  render: function() {
    var themeClass = theme(this.props.theme);
    var badgeClass = 'h5 bold inline-block px1 mr1 rounded ' + themeClass;
    return (
      React.createElement("span", {className: badgeClass}, 
        this.props.children
      )
    )
  }

});


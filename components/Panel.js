/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      inverse: false
    }
  },

  render: function() {
    return (
      React.createElement("div", null
      )
    )
  }

});


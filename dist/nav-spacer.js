
var React = require('react');

var NavSpacer = React.createClass({displayName: "NavSpacer",

  render: function() {
    return (
      React.createElement("div", {className: "flex-auto"})
    )
  }

});

module.exports = NavSpacer;



var React = require('react');

var Arrow = React.createClass({displayName: "Arrow",

  getDefaultProps: function() {
    return {
      up: false,
    }
  },

  render: function() {
    var arrowStyle = {
      display: 'inline-block',
      width: 0,
      height: 0,
      marginLeft: '.1875em',
      verticalAlign: 'middle',
      borderRight: '.3125em solid transparent',
      borderLeft: '.3125em solid transparent',
    };
    if (!this.props.up) {
      arrowStyle.borderTop = '.4375em solid';
    } else if (this.props.up) {
      arrowStyle.borderBottom = '.4375em solid';
    }
    return React.createElement("span", {style: arrowStyle})
  }

});

module.exports = Arrow;


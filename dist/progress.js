
var React = require('react');
var classnames = require('classnames');

var Progress = React.createClass({displayName: "Progress",

  getDefaultProps: function() {
    return {
      value: 0,
      color: 'blue',
    }
  },

  render: function() {
    var progressClasses = classnames(this.props.className, 'progress', this.props.color);
    return React.createElement("progress", React.__spread({},  this.props, {className: progressClasses}), this.props.value)
  }

});

module.exports = Progress;


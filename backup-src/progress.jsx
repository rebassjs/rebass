
var React = require('react');
var classnames = require('classnames');

var Progress = React.createClass({

  getDefaultProps: function() {
    return {
      value: 0,
      color: 'blue',
    }
  },

  render: function() {
    var progressClasses = classnames(this.props.className, 'progress', this.props.color);
    return <progress {...this.props} className={progressClasses}>{this.props.value}</progress>
  }

});

module.exports = Progress;


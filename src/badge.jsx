
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Badge = React.createClass({

  getDefaultProps: function() {
    return {
      color: false
    };
  },

  render: function() {
    var badgeClass = classnames('h5 bold inline-block px1 mr1 rounded ', colorbass(this.props.color).primary);
    return (
      <span className={badgeClass}>
        {this.props.children}
      </span>
    )
  }

});

module.exports = Badge;


/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'mid-gray',
      inverse: true
    };
  },

  render: function() {
    var themeClass = 'bg-' + this.props.theme;
    themeClass += this.props.inverse ? ' white' : '';
    var badgeClass = 'h5 bold inline-block px1 mr1 rounded ' + themeClass;
    return (
      <span className={badgeClass}>
        {this.props.children}
      </span>
    )
  }

});


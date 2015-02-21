
var React = require('react');
var ThemeClassMixin = require('./ThemeClassMixin');

module.exports = React.createClass({

  mixins: [ThemeClassMixin],

  getDefaultProps: function() {
    return {
      theme: 'mid-gray'
    };
  },

  render: function() {
    var classes = this.getThemeClasses();
    var badgeClass = 'h5 bold inline-block px1 mr1 rounded ' + classes.main;
    return (
      <span className={badgeClass}>
        {this.props.children}
      </span>
    )
  }

});


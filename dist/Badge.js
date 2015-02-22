
var React = require('react');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      theme: 'mid-gray'
    };
  },

  render: function() {
    var classes = this.getThemeClasses();
    var badgeClass = 'h5 bold inline-block px1 mr1 rounded ' + classes.main;
    return (
      React.createElement("span", {className: badgeClass}, 
        this.props.children
      )
    )
  }

});


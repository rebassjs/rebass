
var React = require('react');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      flush: false,
      isActive: false,
      className: '',
    }
  },

  render: function() {
    var buttonClass = this.props.className + ' button ';
    buttonClass += this.getThemeClasses().main;
    buttonClass += this.props.flush ? '' : ' mr1';
    buttonClass += this.props.isActive ? ' is-active' : '';
    return (
      React.createElement("button", React.__spread({},  this.props, {className: buttonClass}), 
        this.props.children
      )
    )
  }

});


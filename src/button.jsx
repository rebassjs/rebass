
var React = require('react');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({

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
      <button {...this.props} className={buttonClass}>
        {this.props.children}
      </button>
    )
  }

});


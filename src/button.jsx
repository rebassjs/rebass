
var React = require('react');
var classnames = require('classnames');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      theme: 'silver',
      flush: false,
      active: false,
      className: '',
      outline: false,
      transparent: false,
      size: false,
    }
  },

  render: function() {
    var themeClasses = this.getThemeClasses();
    var activeClass = (this.props.outline || this.props.transparent) ? themeClasses.main : 'is-active';
    var buttonClass =
      classnames(
        this.props.className,
        (!this.props.active && this.props.outline || this.props.transparent) ? this.props.theme : themeClasses.main,
        'button',
        { 'button-small': this.props.size == 'small' },
        { 'button-big': this.props.size == 'big' },
        { mr1: !this.props.flush },
        this.props.active ? activeClass : false,
        { 'button-outline': this.props.outline },
        { 'button-transparent': this.props.transparent });
    return (
      <button {...this.props} className={buttonClass}>
        {this.props.children}
      </button>
    )
  }

});



var React = require('react/addons');
var classnames = require('classnames');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      wrap: true,
      justified: false,
      className: '',
    }
  },

  //formatChildren: React.Children.map(children, function(child, i) {
  renderChild: function(child, i) {
    var borderClass =
      classnames(
        { 'rounded-left': (i == 0) },
        { 'rounded-right': (i == this.props.children.length - 1) },
        { 'not-rounded': (i > 0 && i < this.props.children.length - 1) });
    var props = {
      theme: this.props.theme ? this.props.theme : child.props.theme,
      outline: this.props.outline || child.props.outline,
      transparent: this.props.transparent || child.props.transparent,
      justified: this.props.justified,
      flush: true,
      className: classnames(child.props.className, borderClass, 'x-group-item'),
      style: child.props.style || {},
    };
    props.style.marginBottom = 0;
    var newChild = React.addons.cloneWithProps(child, props);
    return newChild;
  },

  render: function() {
    var groupClass = classnames(this.props.className, 'inline-block', 'rounded');
    return (
      React.createElement("div", React.__spread({},  this.props, {className: groupClass}), 
        React.Children.map(this.props.children, this.renderChild)
      )
    )
  }

});



var React = require('react/addons');
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
    var borderClass;
    if (i == 0) {
      borderClass = 'rounded-left';
    } else if (i == (this.props.children.length - 1)) {
      borderClass = 'rounded-right';
    } else {
      borderClass = 'not-rounded';
    }
    var props = {
      theme: this.props.theme ? this.props.theme : child.props.theme,
      justified: this.props.justified,
      flush: true,
      className: child.props.className += ' ' + borderClass + ' x-group-item',
      style: child.props.style || {},
    };
    props.style.marginBottom = 0;
    //if (i > 0) {
    //  props.style.marginLeft = -1;
    //}
    var newChild = React.addons.cloneWithProps(child, props);
    return newChild;
  },

  render: function() {
    var groupClass = this.props.className + ' inline-block rounded';
    return (
      React.createElement("div", React.__spread({},  this.props, {className: groupClass}), 
        React.Children.map(this.props.children, this.renderChild)
      )
    )
  }

});



var React = require('react/addons');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      wrap: true,
      justified: false,
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
      theme: this.props.theme,
      justified: this.props.justified,
      flush: true,
      className: child.props.className += ' ' +borderClass,
      style: child.props.style || {},
    };
    if (i > 0) {
      props.style.marginLeft = -1;
    }
    var newChild = React.addons.cloneWithProps(child, props);
    return newChild;
  },

  render: function() {
    return (
      React.createElement("div", React.__spread({},  this.props, {className: "inline-block rounded"}), 
        React.Children.map(this.props.children, this.renderChild)
      )
    )
  }

});


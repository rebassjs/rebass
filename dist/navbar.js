
var React = require('react/addons');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Navbar = React.createClass({displayName: "Navbar",

  getDefaultProps: function() {
    return {
      color: 'silver',
      compact: false,
      wrap: true,
      justified: false,
    }
  },

  renderChild: function(child) {
    var inverse = this.props.inverse || colorbass(this.props.color).inverse;
    var childProps = {
      big: !this.props.compact,
      justified: this.props.justified,
    };
    var newChild = React.addons.cloneWithProps(child, childProps);
    return newChild;
  },

  render: function() {
    var bassClasses = colorbass(this.props.color);
    var navbarClass =
      classnames('flex', 'flex-center', 'mb2',
        { 'flex-wrap': this.props.wrap },
        bassClasses.primary);
    return (
      React.createElement("div", React.__spread({},  this.props, {className: navbarClass}), 
        React.Children.map(this.props.children, this.renderChild)
      )
    )
  }

});

module.exports = Navbar;


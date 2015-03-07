
var React = require('react');

var classnames = require('classnames');
var bassClasses = require('../bass-classnames');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      theme: 'black',
      center: false,
      right: false,
      backgroundImage: false,
    };
  },

  render: function() {

    var classes = bassClasses(this.props.theme);
    var bannerClass =
      classnames(this.props.className,
        'px3 py4',
        { center: this.props.center },
        { 'right-align': this.props.right },
        classes.primary);
    var style = {
      backgroundImage: this.props.backgroundImage,
    };

    return (
      React.createElement("div", {className: bannerClass, style: style}, 
        this.props.children
      )
    )
  }

});


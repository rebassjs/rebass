
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
      footer: false,
      header: false,
    };
  },

  render: function() {

    var bass = bassClasses(this.props.theme);
    var classes = {
      outer: classnames(this.props.className,
        { center: this.props.center },
        { 'right-align': this.props.right },
        bass.primary),
      inner: classnames('px3 py4'),
    };
    var style = {
      backgroundImage: this.props.backgroundImage,
    };

    return (
      React.createElement("div", {className: classes.outer, style: style}, 
        this.props.header, 
        React.createElement("div", {className: classes.inner}, 
          this.props.children
        ), 
        this.props.footer
      )
    )
  }

});


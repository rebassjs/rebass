
var React = require('react');

var classnames = require('classnames');
var colorbass = require('colorbass');

var Banner = React.createClass({displayName: "Banner",

  getDefaultProps: function() {
    return {
      color: 'black',
      align: 'left',
      backgroundImage: false,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      footer: false,
      header: false,
    };
  },

  render: function() {

    var classes = {
      outer: classnames(this.props.className,
        colorbass(this.props.color).primary),
      inner: classnames('px3 py4'),
    };
    var style = {
      textAlign: this.props.align,
      backgroundImage: this.props.backgroundImage,
      backgroundPosition: this.props.backgroundPosition,
      backgroundSize: this.props.backgroundSize,
    };

    if (typeof this.props.header == 'string') {
      var header = React.createElement("div", {className: "p2"}, this.props.header);
    } else {
      var header = this.props.header;
    }

    if (typeof this.props.footer == 'string') {
      var footer = React.createElement("div", {className: "p2"}, this.props.footer);
    } else {
      var footer = this.props.footer;
    }

    return (
      React.createElement("div", {className: classes.outer, style: style}, 
        header, 
        React.createElement("div", {className: classes.inner}, 
          this.props.children
        ), 
        footer
      )
    )
  }

});

module.exports = Banner;


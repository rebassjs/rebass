
var React = require('react/addons');
var classnames = require('classnames');

var Media = React.createClass({displayName: "Media",

  getDefaultProps: function() {
    return {
      align: 'top',
    }
  },

  render: function() {
    var containerClasses =
      classnames('flex', 'mb2', 'mxn1', 'overflow-hidden',
        { 'flex-center': (this.props.align == 'middle') },
        { 'flex-start': (this.props.align == 'top') },
        { 'flex-end': (this.props.align == 'bottom') });
    return (
      React.createElement("div", {className: containerClasses}, 
        this.props.children
      )
    )
  }

});

Media.Img = React.createClass({displayName: "Img",
  render: function() {
    var imgClasses = classnames('ml1 mr1');
    var img = this.props.children || React.createElement("img", React.__spread({},  this.props))
    return (
      React.createElement("div", {className: imgClasses}, img)
    )
  }
});

Media.Body = React.createClass({displayName: "Body",
  render: function() {
    return React.createElement("div", {className: "flex-auto ml1 mr1"}, this.props.children)
  }
});

module.exports = Media;


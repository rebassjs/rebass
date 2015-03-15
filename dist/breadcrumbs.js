
var React = require('react');
var classnames = require('classnames');

var Breadcrumbs = React.createClass({displayName: "Breadcrumbs",

  getDefaultProps: function() {
    return {
      links: [],
      color: 'blue',
    }
  },

  renderLink: function(link, i) {
    var isLast = (i == this.props.links.length - 1);
    var linkClasses = classnames('button', 'button-small', 'mr1', 'button-link', isLast ? 'black' : this.props.color);
    return (
      React.createElement("span", {className: "inline-block", key: 'breadcrumb-link-'+i}, 
        React.createElement("a", {href: link.href, className: linkClasses}, link.name), 
         isLast ? '' :  React.createElement("span", {className: "mr1"}, "/")
      )
    )
  },

  render: function() {
    var containerClasses = classnames(this.props.className);
    return (
      React.createElement("div", React.__spread({},  this.props, {className: containerClasses}), 
        this.props.links.map(this.renderLink)
      )
    )
  }

});

module.exports = Breadcrumbs;


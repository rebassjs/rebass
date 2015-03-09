
var React = require('react/addons');
var classnames = require('classnames');
var colorbass = require('../colorbass');

var Panel = React.createClass({displayName: "Panel",

  getDefaultProps: function() {
    return {
      header: false,
      footer: false,
    }
  },

  renderHeader: function(header) {
    if (!header) {
      return false;
    }
    var bassClasses = colorbass(this.props.theme);
    var headerClass = 'bold p2 ' + bassClasses.primary;
    return (
      React.createElement("div", {className: headerClass}, 
        header
      )
    )
  },

  renderFooter: function(footer) {
    if (!footer) {
      return false;
    }
    return (
      React.createElement("div", {className: "p2 bg-lighter-gray border-top"}, 
        footer
      )
    )
  },

  filterChildren: function(children) {
    var filtered = [];
    var self = this;
    React.Children.map(children, function(child) {
      if (child.type == 'header') {
        self.props.header = React.addons.cloneWithProps(child);
      } else if (child.type == 'footer') {
        self.props.footer = React.addons.cloneWithProps(child);
      } else {
        filtered.push(child);
      }
    });
    return filtered;
  },

  render: function() {
    var borderColor = 'border-' + this.props.theme;
    var panelClass = 'mb2 overflow-hidden rounded border ' + borderColor;
    var children = this.filterChildren(this.props.children);
    return (
      React.createElement("div", {className: panelClass}, 
        this.renderHeader(this.props.header), 
        React.createElement("div", {className: "p2"}, 
          children
        ), 
        this.renderFooter(this.props.footer)
      )
    )
  }

});

module.exports = Panel;


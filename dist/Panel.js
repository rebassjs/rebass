
var React = require('react/addons');
var ThemeClassMixin = require('./ThemeClassMixin');

module.exports = React.createClass({displayName: "exports",

  mixins: [ThemeClassMixin],

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
    var classes = this.getThemeClasses();
    var headerClass = 'bold p2 ' + classes.main;
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
    var panelClass = 'mb2 rounded border ' + borderColor;
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


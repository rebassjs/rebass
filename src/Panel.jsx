
var React = require('react/addons');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({

  mixins: [ThemeMixin],

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
    var headerClass = 'bold p2 ' + classes.main + (classes.border ? ' border-bottom' : '');
    return (
      <div className={headerClass}>
        {header}
      </div>
    )
  },

  renderFooter: function(footer) {
    if (!footer) {
      return false;
    }
    return (
      <div className="p2 bg-lighter-gray border-top">
        {footer}
      </div>
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
      <div className={panelClass}>
        {this.renderHeader(this.props.header)}
        <div className="p2">
          {children}
        </div>
        {this.renderFooter(this.props.footer)}
      </div>
    )
  }

});


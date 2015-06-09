
var React = require('react/addons');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Panel = React.createClass({

  getDefaultProps: function() {
    return {
      header: false,
      footer: false,
      color: 'silver',
    }
  },

  renderHeader: function(header) {
    if (!header) {
      return false;
    }
    var bassClasses = colorbass(this.props.color);
    var headerClass = 'bold p2 ' + bassClasses.primary;
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
    var footerClass = classnames('p2 bg-darken-1 border-top', 'border-'+this.props.color);
    return (
      <div className={footerClass}>
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
    var borderColor = 'border-' + this.props.color;
    var panelClass = 'mb2 overflow-hidden rounded border ' + borderColor;
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

module.exports = Panel;


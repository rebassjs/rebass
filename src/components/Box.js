
var React = require('react/addons');
var theme = require('./util/theme');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'lighter-gray',
      header: false,
      footer: false
    }
  },

  render: function() {

    var self = this;
    var themeClass = theme(this.props.theme);
    var borderColor = 'border-' + this.props.theme;
    var boxClass = 'mb2 rounded border ' + borderColor;

    React.Children.map(this.props.children, function(child) {
      if (child.props) {
        child.props.theme = self.props.theme;
      }
    });

    return (
      React.DOM.div({ className: boxClass },
        this.props.children
      )
    )

  }

});


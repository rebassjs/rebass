
var React = require('react');
var theme = require('./util/theme');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      header: false,
      footer: false,
    }
  },

  render: function() {
    var headerClass = 'p2 ';
    headerClass += theme(this.props.theme);
    return (
      React.createElement('div', { className: headerClass },
        this.props.children
      )
    )
  }

});


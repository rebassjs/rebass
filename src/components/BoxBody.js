
var React = require('react');

module.exports = React.createClass({

  render: function() {
    var bodyClass = 'p2';
    return (
      React.createElement('div', { className: bodyClass },
        this.props.children
      )
    )
  }

});


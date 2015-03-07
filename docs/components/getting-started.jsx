

var React = require('react');
var LayoutSidebar = require('./layout-sidebar.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <LayoutSidebar {...this.props}>
        <h1>Getting Started</h1>
      </LayoutSidebar>
    )
  }

});


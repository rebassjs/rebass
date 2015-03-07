
var React = require('react');
var Rebass = require('../..');
var Section = require('./section.jsx');
var LayoutSidebar = require('./layout-sidebar.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <LayoutSidebar {...this.props}>
        <h1>Docs</h1>
      </LayoutSidebar>
    )
  }

});


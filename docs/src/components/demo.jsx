
var React = require('react');
var Link = require('react-router').Link;

var LayoutSidebar = require('./layout-sidebar.jsx');
var KitchenSink = require('./kitchen-sink.jsx');
var DocsHeader = require('./docs-header.jsx');

var Demo = React.createClass({

  render: function() {

    return (
      <LayoutSidebar {...this.props} fullWidth>
        <DocsHeader title="Demo"
          color={this.props.color} />
        <KitchenSink {...this.props} />
      </LayoutSidebar>
    )
  }

});

module.exports = Demo;


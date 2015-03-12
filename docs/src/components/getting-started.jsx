
var React = require('react');
var LayoutSidebar = require('./layout-sidebar.jsx');
var md = require('../md.jsx');

module.exports = React.createClass({

  render: function() {

    var markdown = this.props.markdown.GettingStarted;
    var html = { __html: md(markdown).html };

    return (
      <LayoutSidebar {...this.props}>
        <div dangerouslySetInnerHTML={html} />
      </LayoutSidebar>
    )
  }

});


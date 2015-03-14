
var React = require('react');
var Link = require('react-router').Link;

var LayoutSidebar = require('./layout-sidebar.jsx');
var Highlight = require('./highlight.jsx');

module.exports = React.createClass({

  render: function() {

    var requireCode = "var Rebass = require('rebass');\nvar Button = Rebass.Button;\nvar Badge = Rebass.Badge;";
    var jsxCode = '<App>\n  <Button>Button</Button>\n  <Badge>Badge</Badge>\n</App>';

    return (
      <LayoutSidebar {...this.props}>
        <h2>Install</h2>
        <Highlight string="npm install rebass" lang="bash" />
        <h2>Require</h2>
        <Highlight string={requireCode} lang="javascript" />
        <h2>Use</h2>
        <Highlight string={jsxCode} lang="xml" />
        <p>Note: Rebass components require <a href="//basscss.com">Basscss</a> for styling.</p>
        <hr className={'border border-'+this.props.color} />
        <div className="right-align">
          <Link to="/docs/components" className={'h4 button button-big bg-'+this.props.color}>Components</Link>
        </div>
      </LayoutSidebar>
    )
  }

});



var React = require('react');
var Example = require('rebass-example');

var Rebass = require('../../..');
var Button = Rebass.Button;
var RadioButton = Rebass.RadioButton;
var Group = Rebass.Group;
var NavItem = Rebass.NavItem;
var Navbar = Rebass.Navbar;
var NavSpacer = Rebass.NavSpacer;
var MenuItem = Rebass.MenuItem;
var Dropdown = Rebass.Dropdown;
var Modal = Rebass.Modal;
var Flag  = Rebass.Flag;
var Media  = Rebass.Media;
var Badge = Rebass.Badge;
var Message  = Rebass.Message;
var Panel  = Rebass.Panel;
var Banner  = Rebass.Banner;

var Icon = Rebass.Icon;

var LayoutSidebar = require('./layout-sidebar.jsx');
var DocsHeader = require('./docs-header.jsx');
var Section = require('./section.jsx');
var PropsTable = require('./props-table.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      modalIsOpen: false,
    }
  },

  openModal: function() {
    this.setState({ modalIsOpen: true });
  },

  closeModal: function() {
    this.setState({ modalIsOpen: false });
  },

  renderSection: function(section, i) {
    var color = this.props.color;
    var example = false;
    if (section.example) {
      example = (
        <Example color={color} preMaxHeight={256}>
          {section.example}
        </Example>
      )
    }
    var demo = false;
    if (section.Demo) {
      demo = <section.Demo {...this.props} />
    } 
    return (
      <Section heading={section.name}
        key={'example-'+section.name}>
        <p>{section.description}</p>
        {demo}
        {example}
        <PropsTable {...this.props} props={section.props} />
      </Section>
    )
  },

  render: function() {

    var self = this;
    var examples = this.props.examples;

    return (
      <LayoutSidebar {...this.props}>
        <DocsHeader title="Components"
          color={this.props.color} />
        {examples.map(this.renderSection)}
      </LayoutSidebar>
    )
  }

});



var React = require('react');

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
var Section = require('./section.jsx');
var Example = require('rebass-example');

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
    return (
      <Section heading={section.name}
        key={'example-'+section.name}>
        <p>{section.description}</p>
        <Example color={color} preMaxHeight={256}>
          {section.example}
        </Example>
      </Section>
    )
  },

  render: function() {

    var self = this;
    var examples = this.props.examples;

    return (
      <LayoutSidebar {...this.props}>
        <h1>Components</h1>
        {examples.map(this.renderSection)}
      </LayoutSidebar>
    )
  }

});


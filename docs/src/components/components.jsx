
var React = require('react');

var Rebass = require('../../..');
var Button = Rebass.Button;
var RadioButton = Rebass.RadioButton;
var Group = Rebass.Group;
var NavItem = Rebass.NavItem;
var Navbar = Rebass.Navbar;
var NavSpacer = Rebass.NavSpacer;
var Dropdown = Rebass.Dropdown;
var Modal = Rebass.Modal;
var Flag  = Rebass.Flag;
var Media  = Rebass.Media;
var Badge = Rebass.Badge;
var Message  = Rebass.Message;
var Panel  = Rebass.Panel;
var Banner  = Rebass.Banner;

var Icon = Rebass.Icon;

var HslSliders = require('react-hsl-sliders');

var LayoutSidebar = require('./layout-sidebar.jsx');
var Section = require('./section.jsx');
var Example = require('rebass-example');

var IconSection = require('./icon-section.jsx');

var KitchenSink = require('./kitchen-sink.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      theme: 'blue'
    }
  },

  changeTheme: function(theme) {
    this.setState({ theme: theme });
  },

  getSections: function() {
    var theme = this.state.theme;
    return [
      {
        name: 'Button',
        description: 'Themeable button component with solid, outline, and transparent variations',
        example: (
          <div>
            <Button theme={theme}>Button</Button>
            <Button theme={theme} outline={true}>Button</Button>
            <Button theme={theme} transparent={true}>Button</Button>
          </div>
        ),
        props: ['theme', 'flush', 'active', 'className', 'outline', 'transparent']
      },
      {
        name: 'Badge',
        description: 'Used to label states and properties',
        example: <Badge theme={theme}>Badge</Badge>,
      },
      {
        name: 'Group',
        description: 'Groups buttons and inputs together',
        example: (
          <Group>
            <input type="text" className={'field-light border-'+theme} />
            <Button theme={theme} outline={true}>Go</Button>
            <Button theme={theme}>Bacon</Button>
          </Group>
        ),
      },
      {
        name: 'Dropdown',
        description: 'Progressive disclosure for showing lists of actions',
        example: false,
        example: (
          <Dropdown label="Actions" theme={theme}>
            <NavItem href="#!" block={true}>Action</NavItem>
            <NavItem href="#!" block={true}>Action</NavItem>
            <NavItem href="#!" block={true}>Action</NavItem>
          </Dropdown>
        )
      },
      {
        name: 'NavItem',
        description: 'Link button style for navigation',
        example: <NavItem>NavItem</NavItem>
      },
      {
        name: 'Navbar',
        description: 'Visual grouping for navigation links and other components',
        example: (
          <Navbar theme={theme}>
            <NavItem href="#nav-item">Navbar</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavSpacer />
            <Group>
              <input type="text" className="field-dark" placeholder="Search" />
              <Button theme="blue">Go</Button>
            </Group>
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
        ),
      },
      {
        name: 'Icon',
        description: 'Icons from Geomicons',
        example: (
          <div className={'h2 flex flex-center mxn2 ' + theme}>
            <Icon name="bookmark" className="m2" />
            <Icon name="cloud" className="m2" />
            <Icon name="cog" className="m2" />
            <Icon name="heart" className="m2" />
            <Icon name="search" className="m2" />
          </div>
        ),
      },
    ]
  },

  renderSection: function(section, i) {
    var theme = this.state.theme;
    return (
      <Section heading={section.name} key={section.name+'-'+i}>
        <Example theme={theme}>
          {section.example}
        </Example>
        <p>{section.description}</p>
      </Section>
    )
  },

  render: function() {

    var self = this;
    var sections = this.getSections();
    var theme = this.state.theme;

    var handleClick = function(e) {
      self.changeTheme(e.target.value);
    };

    var buttons = [
      { value: 'aqua' },
      { value: 'blue' },
      { value: 'navy' },
      { value: 'teal' },
      { value: 'green' },
      { value: 'olive' },
      { value: 'lime' },
      { value: 'yellow' },
      { value: 'orange' },
      { value: 'red' },
      { value: 'fuchsia' },
      { value: 'purple' },
      { value: 'maroon' },
      { value: 'black' },
      { value: 'gray' },
      { value: 'silver' },
      { value: 'white' },
    ];

    var renderButton = function(button) {
      var isActive = theme == button.value;
      return (
        <Button onClick={handleClick}
          size="small"
          active={isActive}
          transparent={true}
          theme={button.value}
          key={'button-'+button.value}
          value={button.value}>
          {button.value}
        </Button>
      )
    };

    return (
      <LayoutSidebar {...this.props}>
        <h1>Components</h1>
        <div className="p2 border rounded">
          <h3 className="h5 m0">Switch Theme</h3>
          <Group>
            {buttons.map(renderButton)}
          </Group>
        </div>
        {sections.map(this.renderSection)}
      </LayoutSidebar>
    )
  }

});


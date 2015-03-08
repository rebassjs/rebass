
var React = require('react');

var Rebass = require('../../..');
var Button = Rebass.Button;
var Group = Rebass.Group;

var LayoutSidebar = require('./layout-sidebar.jsx');
var Section = require('./section.jsx');
var Example = require('./example.jsx');

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
    return [
      {
        name: 'Button',
        description: 'Themeable button component with solid, outline, and transparent variations',
        jsx: '<div>\n  <Button theme={theme}>Button</Button>\n  <Button theme={theme} outline={true}>Button</Button>\n  <Button theme={theme} transparent={true}>Button</Button>\n</div>',
        props: ['theme', 'flush', 'active', 'className', 'outline', 'transparent']
      },
      {
        name: 'Badge',
        description: 'Used to label states and properties',
        jsx: '<div>\n  <Badge theme={theme}>Badge</Badge>\n</div>',
      }
    ]
  },

  render: function() {

    var self = this;
    var sections = this.getSections();
    var theme = this.state.theme;

    var handleClick = function(e) {
      self.changeTheme(e.target.value);
    };

    var renderSection = function(section, i) {
      //console.log('section', section.name, i);
      return (
        <Section heading={section.name} key={section.name+'-'+i}>
          <Example jsx={section.jsx} theme={theme} />
          <p>{section.description}</p>
        </Section>
      )
    };

    var buttons = [
      { value: 'aqua' },
      { value: 'blue' },
      { value: 'navy' },
      { value: 'teal' },
      { value: 'olive' },
      { value: 'lime' },
      { value: 'yellow' },
      { value: 'orange' },
      { value: 'red' },
      { value: 'fuchsia' },
      { value: 'purple' },
      { value: 'maroon' },
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
        {sections.map(renderSection)}

        <hr className="border-thick border-aqua"/>
        <h2>Kitchen Sink</h2>
        <KitchenSink />
      </LayoutSidebar>
    )
  }

});



var React = require('react');
//var transform = require('react-tools').transform;

//var Rebass = require('../../..');
//var Button = Rebass.Button;

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
    var theme = 'blue';
    return [
      {
        name: 'Button',
        description: 'Themeable button component with solid, outline, and transparent variations',
        example: require('../examples/button.jsx'),
        jsxString: '<div>\n  <Button theme={theme}>Button</Button>\n  <Button theme={theme} outline={true}>Button</Button>\n  <Button theme={theme} transparent={true}>Button</Button>\n</div>',
        props: ['theme', 'flush', 'active', 'className', 'outline', 'transparent']
      }
    ]
  },

  render: function() {

    var sections = this.getSections();

    var renderSection = function(section, i) {
      console.log('section', section.name, i);
      return (
        <Section heading={section.name} key={section.name+'-'+i}>
          <Example example={section.example} jsx={section.jsxString} />
          <p>{section.description}</p>
        </Section>
      )
    };

    return (
      <LayoutSidebar {...this.props}>
        <h1>Components</h1>
        {sections.map(renderSection)}

        <hr className="border-thick border-aqua"/>
        <h2>Kitchen Sink</h2>
        <KitchenSink />
      </LayoutSidebar>
    )
  }

});



var React = require('react');
var Section = require('./Section.jsx');
var Rebass = require('../..');
var Button = Rebass.Button;
var Badge = Rebass.Badge;
var Message = Rebass.Message;
var Media = Rebass.Media;
var Flag = Rebass.Flag
var Panel = Rebass.Panel

var FuzzyInputSection = require('./FuzzyInputSection.jsx');
var HslSlidersSection = require('./HslSlidersSection.jsx');

module.exports = React.createClass({

  render: function() {
    var style = {
      minHeight: '100vh',
    };
    return (
      <div style={style}>

        <Section heading="Button">
          <Button>Button</Button>
          <Button theme="blue">Button</Button>
          <Button theme="red">Button</Button>
          <Button theme="gray">Button</Button>
          <Button theme="blue-outline">Button</Button>
        </Section>

        <Section heading="Badge">
          <Badge>Badge</Badge>
          <Badge theme="red">Badge</Badge>
          <Badge theme="yellow">Badge</Badge>
          <Badge theme="green">Badge</Badge>
          <Badge theme="blue">Badge</Badge>
          <Badge theme="dark-gray">Badge</Badge>
        </Section>

        <Section heading="Message">
          <Message>Message</Message>
          <Message theme="red">Message</Message>
          <Message theme="yellow">Message</Message>
          <Message theme="green">Message</Message>
          <Message theme="blue">Message</Message>
          <Message theme="dark-gray">Message</Message>
        </Section>

        <Section heading="Media Object">
          <Media>
            <img src="//placehold.it/96" />
            <div>Media Object</div>
          </Media>
        </Section>

        <Section heading="Panel">
          <Panel header="Panel Header">
            <div>Panel Body</div>
          </Panel>
          <Panel header="Panel Header" theme="blue">
            <div>Panel Body</div>
          </Panel>
          <Panel header="Panel Header" theme="green">
            <div>Panel Body</div>
          </Panel>
          <Panel header="Panel Header" theme="yellow">
            <div>Panel Body</div>
          </Panel>
          <Panel header="Panel Header" theme="red">
            <div>Panel Body</div>
          </Panel>
        </Section>

        <FuzzyInputSection />

        <HslSlidersSection />

      </div>
    )
  }

});


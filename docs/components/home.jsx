
var React = require('react');
var Section = require('./section.jsx');

var Rebass = require('../..');
var Button = Rebass.Button;
var RadioButton = Rebass.RadioButton;
var Group = Rebass.Group;
var NavItem = Rebass.NavItem;
var Navbar = Rebass.Navbar;
var NavSpacer = Rebass.NavSpacer;
var Dropdown = Rebass.Dropdown;
var Badge = Rebass.Badge;
var Message = Rebass.Message;
var Media = Rebass.Media;
var Flag = Rebass.Flag
var Panel = Rebass.Panel

//var Modal = Rebass.Modal;

var ModalSection = require('./modal-section.jsx');

//  var FuzzyInputSection = require('./fuzzy-input-section.jsx');
var HslSlidersSection = require('./hsl-sliders-section.jsx');
var IconSection = require('./icon-section.jsx');

module.exports = React.createClass({

  render: function() {
    var style = {
      minHeight: '100vh',
    };
    var handleRadioButton = function(val) {
      console.log(val);
    };
    return (
      <div style={style} className="container px2">

        <Section heading="Button">
          <Button>Button</Button>
          <Button theme="gray">Button</Button>
          <Button theme="blue">Button</Button>
          <Button theme="green">Button</Button>
          <Button theme="red">Button</Button>
        </Section>

        <Section heading="Radio Button">
          <RadioButton theme="blue" outline={true} onClick={handleRadioButton}>Radio Button</RadioButton>
          <RadioButton theme="blue" outline={true} isActive={true}>Radio Button</RadioButton>
        </Section>

        <Section heading="Group">
          <Group theme="orange" className="mr1">
            <Button>Button</Button>
            <Button theme="orange">Button</Button>
            <Button theme="orange">Button</Button>
          </Group>
          <Group className="mr1">
            <input type="text" className="field-light" placeholder="Search" />
            <Button>Go</Button>
          </Group>
          <Group theme="blue">
            <Button>Go</Button>
            <Dropdown label="Dropdown" right={true}>
              <NavItem href="#!">Action</NavItem>
              <a href="#!" className="button block button-nav-light">Action</a>
              <a href="#!" className="button block button-nav-light">Action</a>
              <a href="#!" className="button block button-nav-light">Action</a>
            </Dropdown>
          </Group>
        </Section>

        <Section heading="Dropdown">
          <Dropdown label="Dropdown">
            <a href="#!" className="button block button-nav-light">Action</a>
            <a href="#!" className="button block button-nav-light">Action</a>
            <a href="#!" className="button block button-nav-light">Action</a>
          </Dropdown>
          <Dropdown label="Right" theme="blue" right={true}>
            <a href="#!" className="button block button-nav-light">Action</a>
            <a href="#!" className="button block button-nav-light">Action</a>
            <a href="#!" className="button block button-nav-light">Action</a>
          </Dropdown>
        </Section>

        <ModalSection />

        <Section heading="Nav Item">
          <div className="mb2 border-bottom">
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
          </div>
          <div className="mb2 bg-dark-gray">
            <NavItem href="#nav-item" inverse={true}>Nav Item</NavItem>
            <NavItem href="#nav-item" inverse={true}>Nav Item</NavItem>
            <NavItem href="#nav-item" inverse={true}>Nav Item</NavItem>
          </div>
        </Section>

        <Section heading="Navbar">
          <Navbar>
            <NavItem href="#nav-item">Default Navbar</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavSpacer />
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
          <Navbar theme="blue">
            <NavItem href="#nav-item">Blue Navbar</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavSpacer />
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
          <Navbar theme="dark-gray" compact={true}>
            <NavItem href="#nav-item">Compact Navbar</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavSpacer />
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
          <Navbar theme="dark-gray" justified={true}>
            <NavItem href="#nav-item">Justified Navbar</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
          <Navbar theme="dark-gray">
            <NavItem href="#nav-item">Navbar</NavItem>
            <NavItem href="#nav-item">Groups</NavItem>
            <Group theme="gray">
              <Button>Button</Button>
              <Button>Button</Button>
            </Group>
            <NavSpacer />
            <Group>
              <input type="text" className="field-dark" placeholder="Search" />
              <Button theme="blue">Go</Button>
            </Group>
            <NavItem href="#nav-item">Nav Item</NavItem>
          </Navbar>
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

        <Section heading="Flag Object">
          <Flag>
            <img src="//placehold.it/96" />
            <div>Flag Object</div>
          </Flag>
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

        {/* <FuzzyInputSection />
        */}

        <HslSlidersSection />

        <IconSection />

      </div>
    )
  }

});


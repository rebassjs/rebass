
var React = require('react');
var Section = require('./section.jsx');

var Rebass = require('../../..');
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


var ModalSection = require('./modal-section.jsx');

//var FuzzyInputSection = require('./fuzzy-input-section.jsx');
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
      <div style={style} className="">

        <div className="container px2">

          <Section heading="Button">
            <Button>Button</Button>
            <Button color="gray">Button</Button>
            <Button color="blue">Button</Button>
            <Button color="green">Button</Button>
            <Button color="red">Button</Button>
          </Section>

          <Section heading="Radio Button">
            <RadioButton color="blue" outline={true} onClick={handleRadioButton}>Radio Button</RadioButton>
            <RadioButton color="blue" outline={true} isActive={true}>Radio Button</RadioButton>
          </Section>

          <Section heading="Group">
            <Group color="orange" className="mr1">
              <Button>Button</Button>
              <Button color="orange">Button</Button>
              <Button color="orange">Button</Button>
            </Group>
            <Group className="mr1">
              <input type="text" className="field-light" placeholder="Search" />
              <Button>Go</Button>
            </Group>
            <Group color="blue">
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
            <Dropdown label="Right" color="blue" right={true}>
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
            <div className="mb2 bg-black">
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
            <Navbar color="blue">
              <NavItem href="#nav-item">Blue Navbar</NavItem>
              <NavItem href="#nav-item">Nav Item</NavItem>
              <NavSpacer />
              <NavItem href="#nav-item">Nav Item</NavItem>
            </Navbar>
            <Navbar color="black" compact={true}>
              <NavItem href="#nav-item">Compact Navbar</NavItem>
              <NavItem href="#nav-item">Nav Item</NavItem>
              <NavSpacer />
              <NavItem href="#nav-item">Nav Item</NavItem>
            </Navbar>
            <Navbar color="black" justified={true}>
              <NavItem href="#nav-item">Justified Navbar</NavItem>
              <NavItem href="#nav-item">Nav Item</NavItem>
              <NavItem href="#nav-item">Nav Item</NavItem>
            </Navbar>
            <Navbar color="black">
              <NavItem href="#nav-item">Navbar</NavItem>
              <NavItem href="#nav-item">Groups</NavItem>
              <Group color="white" outline={true}>
                <Button>Button</Button>
                <Button>Button</Button>
              </Group>
              <NavSpacer />
              <Group>
                <input type="text" className="field-dark" placeholder="Search" />
                <Button color="blue">Go</Button>
              </Group>
              <NavItem href="#nav-item">Nav Item</NavItem>
            </Navbar>
          </Section>

          <Section heading="Badge">
            <Badge>Badge</Badge>
            <Badge color="red">Badge</Badge>
            <Badge color="yellow">Badge</Badge>
            <Badge color="green">Badge</Badge>
            <Badge color="blue">Badge</Badge>
            <Badge color="black">Badge</Badge>
          </Section>

          <Section heading="Message">
            <Message>Message</Message>
            <Message color="red">Message</Message>
            <Message color="yellow">Message</Message>
            <Message color="green">Message</Message>
            <Message color="blue">Message</Message>
            <Message color="black">Message</Message>
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
            <Panel header="Panel Header" color="blue">
              <div>Panel Body</div>
            </Panel>
            <Panel header="Panel Header" color="green">
              <div>Panel Body</div>
            </Panel>
            <Panel header="Panel Header" color="yellow">
              <div>Panel Body</div>
            </Panel>
            <Panel header="Panel Header" color="red">
              <div>Panel Body</div>
            </Panel>
          </Section>

          {/* <FuzzyInputSection />
          */}

          <HslSlidersSection />

          <IconSection />

        </div>

      </div>
    )
  }

});


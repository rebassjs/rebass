
var React = require('react');

var Rebass = require('../..');
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
var Icon  = Rebass.Icon;


module.exports = function(color) {

  return [
    {
      name: 'Button',
      description: 'Themeable button component with solid, outline, and transparent variations',
      example: (
        <div>
          <Button color={color}>Button</Button>
          <Button color={color} outline={true}>Button</Button>
          <Button color={color} transparent={true}>Button</Button>
        </div>
      ),
      props: ['color', 'flush', 'active', 'className', 'outline', 'transparent']
    },
    {
      name: 'Badge',
      description: 'Used to label states and properties',
      example: <Badge color={color}>Badge</Badge>,
    },
      {
        name: 'Group',
        description: 'Groups buttons and inputs together',
        example: (
          <Group>
            <input type="text" className={'field-light border-'+color} />
            <Button color={color} outline={true}>Go</Button>
            <Button color={color}>Bacon</Button>
          </Group>
        ),
      },
      {
        name: 'MenuItem',
        description: 'Full width, block link for menus',
        example: <MenuItem label="MenuItem" href="#MenuItem" />,
      },
        {
          name: 'Dropdown',
          description: 'Progressive disclosure for showing lists of actions',
          example: (
            <Dropdown label="Actions" color={color}>
              <MenuItem label="Action" href="#dropdown" />
              <MenuItem label="Action" href="#!" />
              <MenuItem label="Action" href="#!" />
            </Dropdown>
          )
        },
        {
          name: 'NavItem',
          description: 'Link button style for navigation',
          example: <NavItem label="NavItem" />
        },
        {
          name: 'Navbar',
          description: 'Visual grouping for navigation links and other components',
          example: (
            <Navbar color={color}>
              <NavItem label="NavItem" href="#nav-item" />
              <NavItem label="NavItem" href="#nav-item" />
              <NavSpacer />
              <Group>
                <input type="text" className="field-dark" placeholder="Search" />
                <Button color="blue">Go</Button>
              </Group>
              <NavItem label="NavItem" href="#nav-item" />
            </Navbar>
          ),
        },
        {
          name: 'Icon',
          description: 'Icons from Geomicons',
          example: (
            <div className={'h2 flex flex-center mxn2 ' + color}>
              <Icon name="bookmark" className="m2" />
              <Icon name="cloud" className="m2" />
              <Icon name="cog" className="m2" />
              <Icon name="heart" className="m2" />
              <Icon name="search" className="m2" />
            </div>
          ),
        },
  ];

};


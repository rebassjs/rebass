
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
var PageHeader  = Rebass.PageHeader;
var Pagination  = Rebass.Pagination;
var Breadcrumbs  = Rebass.Breadcrumbs;
var Progress  = Rebass.Progress;
var Arrow  = Rebass.Arrow;
var Icon  = Rebass.Icon;

module.exports = function(color) {

  return [
    {
      name: 'Panel',
      description: 'Module to visually separate content',
      props: [
        { name: 'header',
          description: 'Header content',
          type: 'string or component',
          defaults: 'false' },
        { name: 'footer',
          description: 'Footer content',
          type: 'string or component',
          defaults: 'false' },
        { name: 'color',
          description: 'Color style',
          type: 'string',
          defaults: 'silver' },
      ],
      example: (
        <Panel color={color} header="Hamburger" footer="Bacon">
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin.</p>
        </Panel>
      )
    },
    {
      name: 'Button',
      description: 'Themeable button component with solid, outline, and transparent variations',
      props: [
        { name: 'color',
          description: '',
          type: 'string',
          defaults: 'blue' },
        { name: 'active',
          description: '',
          type: 'boolean',
          defaults: 'false' },
        { name: 'outline',
          description: 'Outline button style',
          type: 'boolean',
          defaults: 'false' },
        { name: 'transparent',
          description: 'Transparent button style',
          type: 'boolean',
          defaults: 'false' },
        { name: 'size',
          description: 'Big and small size modifier',
          type: 'string',
          defaults: 'false' },
        { name: 'flush',
          description: 'Remove space betweed buttons',
          type: 'boolean',
          defaults: 'false' },
        { name: 'justified',
          description: 'Sets display block and centers text',
          type: 'boolean',
          defaults: 'false' },
      ],
      example: (
        <div>
          <Button color={color}>Button</Button>
          <Button color={color} outline={true}>Button</Button>
          <Button color={color} transparent={true}>Button</Button>
        </div>
      )
    },
    {
      name: 'Badge',
      description: 'Used to label states and properties',
      props: [
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'false' },
      ],
      example: <h1 className="m0">Hamburger <Badge color={color}>Badge</Badge></h1>,
    },
    {
      name: 'Group',
      description: 'Groups buttons and inputs together',
      props: [
        { name: 'wrap',
          description: 'Sets flex wrap',
          type: 'boolean',
          defaults: 'true' },
        { name: 'justified',
          description: 'Sets flex auto and centered text on all children',
          type: 'boolean',
          defaults: 'false' },
        { name: 'outline',
          description: 'Apply outline prop to children',
          type: 'boolean',
          defaults: 'false' },
        { name: 'transparent',
          description: 'Apply transparent prop to children',
          type: 'boolean',
          defaults: 'false' },
      ],
      example: (
        <Group>
          <input type="text" className={'m0 field-light border-'+color} />
          <Button color={color} outline={true}>Go</Button>
          <Button color={color}>Bacon</Button>
        </Group>
      ),
    },
    {
      name: 'Dropdown',
      description: 'Progressive disclosure for showing lists of actions (Note: this uses the Dropdown.Item Subcomponent)',
      props: [
        { name: 'label',
          description: 'Label for dropdown toggle button',
          type: 'string',
          defaults: '\'\'' },
        { name: 'right',
          description: 'Align the menu to the right edge of the toggle',
          type: 'boolean',
          defaults: 'false' },
        { name: 'top',
          description: 'Position menu above the toggle',
          type: 'boolean',
          defaults: 'false' },
        { name: 'flush',
          description: 'Remove space on the right side of the toggle button',
          type: 'boolean',
          defaults: 'false' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'silver' },
      ],
      example: (
        <Dropdown label="Actions" color={color}>
          <Dropdown.Item label="Action" href="#dropdown" />
          <Dropdown.Item label="Action" href="#!" />
          <Dropdown.Item label="Action" href="#!" />
        </Dropdown>
      )
    },
    {
      name: 'Navbar',
      description: 'Visual grouping for navigation links and other components',
      props: [
        { name: 'compact',
          description: 'Small navbar',
          type: 'boolean',
          defaults: 'false' },
        { name: 'justified',
          description: 'Sets flex auto and centers text on all children',
          type: 'boolean',
          defaults: 'false' },
        { name: 'wrap',
          description: 'Sets flex wrap',
          type: 'boolean',
          defaults: 'true' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'silver' },
      ],
      example: (
        <Navbar color={color}>
          <Navbar.Item label="Navbar.Item" href="#Navbar" />
          <Navbar.Item label="Navbar.Item" href="#Navbar" />
          <Navbar.Spacer />
          <Navbar.Toggle>
            More <Arrow />
          </Navbar.Toggle>
          <Navbar.Drawer className="bg-darken-2">
            <Navbar.Item label="Navbar.Item" href="#Navbar" />
            <Navbar.Item label="Navbar.Item" href="#Navbar" />
            <Group className="px2 py1">
              <input type="text" className="field-dark" placeholder="Search" />
              <Button className="white bg-darken-3">Go</Button>
            </Group>
          </Navbar.Drawer>
        </Navbar>
      ),
    },
    {
      name: 'Banner',
      description: 'Hero banner with support for background images',
      props: [
        { name: 'align',
          description: 'Text alignment',
          type: 'string',
          defaults: 'left' },
        { name: 'header',
          description: 'Banner header content',
          type: 'string or component',
          defaults: 'false' },
        { name: 'footer',
          description: 'Banner footer content',
          type: 'string or component',
          defaults: 'false' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'black' },
        { name: 'backgroundImage',
          description: 'Background image style (can be url, linear-gradient, etc)',
          type: 'string',
          defaults: 'false' },
        { name: 'backgroundPosition',
          description: 'Background position style',
          type: 'string',
          defaults: 'center' },
        { name: 'backgroundSize',
          description: 'Background size style',
          type: 'string',
          defaults: 'cover' },
      ],
      example: (
        <Banner color={color}
          align="center"
          backgroundImage="url(https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg)"
          header="Banner header"
          footer="Banner footer">
          <h1 className="h1 h1-responsive m0">Hamburger</h1>
          <p className="h3 bold m0">Pastrami bacon wrapped hot dogs</p>
        </Banner>
      )
    },
    {
      name: 'PageHeader',
      description: 'Header element with visual spacing for page-level hierarchy',
      props: [
        { name: 'title',
          description: 'Page title',
          type: 'string or component',
          defaults: '' },
        { name: 'description',
          description: 'Page description',
          type: 'string',
          defaults: 'false' },
        { name: 'right',
          description: 'Content displayed on the right side',
          type: 'string or component',
          defaults: 'false' },
        { name: 'size',
          description: 'Font size for h1 title (medium, big, or huge)',
          type: 'string',
          defaults: 'medium' },
      ],
      example: (
        <PageHeader title="Hamburger"
          description="Bacon wrapped hot dogs"
          right="Onion Rings" size="big" />
      )
    },
    {
      name: 'Media',
      description: 'Flexbox based media object with alignment props',
      props: [
        { name: 'align',
          description: 'Flexbox vertical alignment (middle, top, bottom)',
          type: 'string',
          defaults: 'top' },
      ],
      example: (
        <div>
          <Media>
            <Media.Img src="//placehold.it/64" />
            <Media.Body>Media Object</Media.Body>
          </Media>
          <Media align="middle">
            <Media.Img><div className={'p3 bg-'+color} /></Media.Img>
            <Media.Body>Media Object</Media.Body>
          </Media>
          <Media align="bottom">
            <Media.Img src="//placehold.it/64" />
            <Media.Body>Media Object</Media.Body>
          </Media>
          <Media align="middle">
            <Media.Body>Media Object</Media.Body>
            <Media.Img src="//placehold.it/64" />
          </Media>
        </div>
      )
    },
    {
      name: 'Pagination',
      description: 'Stateless pagination controls',
      props: [
        { name: 'pages',
          description: 'Array of page objects consisting of number and href',
          type: 'array',
          defaults: '[]' },
        { name: 'currentIndex',
          description: 'Current page in pages array',
          type: 'number',
          defaults: '0' },
        { name: 'onClick',
          description: 'Callback with the page number clicked passed as an argument',
          type: 'function',
          defaults: 'function() {}' },
        { name: 'previous',
          description: 'onClick callback for the previous button',
          type: 'function',
          defaults: 'function() {}' },
        { name: 'next',
          description: 'onClick callback for the next button',
          type: 'function',
          defaults: 'function() {}' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'blue' },
      ],
      example: (
        <Pagination color={color}
          currentIndex={0}
          pages={[{number:1,href:'#Pagination'},{number:2,href:'#Pagination'},{number:3,href:'#Pagination'}]} />
      )
    },
    {
      name: 'Breadcrumbs',
      description: 'Link-based wayfinding for deep hierarchies',
      props: [
        { name: 'links',
          description: 'Array of link objects consisting of name and href',
          type: 'array',
          defaults: '[]' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'blue' },
      ],
      example: (
        <Breadcrumbs color={color}
          links={[{name:'Home',href:'#Breadcrumbs'},{name:'Hamburgers',href:'#Breadcrumbs'},{name:'Bacon Cheeseburger',href:'#Breadcrumbs'}]} />
      )
    },
    {
      name: 'Progress',
      description: 'Styled progress element',
      props: [
        { name: 'value',
          description: 'Progress value between 0 and 1. Min and max can be set to any number',
          type: 'number',
          defaults: '0' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'blue' },
      ],
      example: (
        <Progress color={color}
          value={0.375}/>
      )
    },
    {
      name: 'Modal',
      description: 'Modal overlay for handling discrete interactions',
      props: [
        { name: 'open',
          description: 'When set to open, modal is visible',
          type: 'boolean',
          defaults: 'false' },
        { name: 'onDismiss',
          description: 'onClick callback when either the close button or overlay is clicked',
          type: 'function',
          defaults: 'function() {}' },
        { name: 'header',
          description: 'Header content',
          type: 'string or component',
          defaults: '' },
        { name: 'size',
          description: 'Width of modal (small, medium, big)',
          type: 'string',
          defaults: 'medium' },
        { name: 'fullBleed',
          description: 'Sets the modal to be full screen when open',
          type: 'boolean',
          defaults: 'false' },
        { name: 'flush',
          description: 'Removes padding from modal body',
          type: 'boolean',
          defaults: 'false' },
        { name: 'color',
          description: 'Color theme',
          type: 'string',
          defaults: 'silver' },
      ],
      Demo: React.createClass({
        getInitialState: function() {
          return { open: false }
        },
        open: function() {
          this.setState({ open: true });
        },
        close: function() {
          this.setState({ open: false });
        },
        render: function() {
          return (
            <div>
              <Button color={this.props.color} onClick={this.open} className="mb2">Open Demo Modal</Button>
              <Modal header="Hamburger" open={this.state.open} onDismiss={this.close} color={this.props.color}>
                <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin. Drumstick pork fatback pork chop doner pork belly prosciutto pastrami sausage. Ground round prosciutto shank pastrami corned beef venison tail. Turkey short loin tenderloin jerky porchetta pork loin.</p>
              </Modal>
            </div>
          )
        }
      }),
      example: (
        <Modal header="Hamburger" isOpen={false} onDismiss={false}>
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin. Drumstick pork fatback pork chop doner pork belly prosciutto pastrami sausage. Ground round prosciutto shank pastrami corned beef venison tail. Turkey short loin tenderloin jerky porchetta pork loin.</p>
        </Modal>
      )
    },
    {
      name: 'Arrow',
      description: 'Triangle arrow affordance used in the Dropdown component',
      props: [
        { name: 'up',
          description: 'Displays the arrow pointing upward',
          type: 'boolean',
          default: 'false' }
      ],
      example: (
        <div>
          <Arrow />
          <Arrow up />
        </div>
      )
    },
    {
      name: 'Icon',
      description: 'Icons from Geomicons',
      props: [
        { name: 'name',
          description: 'Camel cased icon id',
          type: 'string',
          default: 'warning' },
        { name: 'width',
          description: 'SVG width attribute',
          type: 'string',
          default: '1em' },
        { name: 'height',
          description: 'SVG height attribute',
          type: 'string',
          default: '1em' },
        { name: 'fill',
          description: 'SVG fill attribute',
          type: 'string',
          default: '1em' },
      ],
      example: (
        <div className={'h2 flex flex-center flex-wrap mxn2 ' + color}>
          <Icon name="bookmark" className="m2" />
          <Icon name="calendar" className="m2" />
          <Icon name="camera" className="m2" />
          <Icon name="chat" className="m2" />
          <Icon name="check" className="m2" />
          <Icon name="chevronDown" className="m2" />
          <Icon name="chevronLeft" className="m2" />
          <Icon name="chevronRight" className="m2" />
          <Icon name="chevronUp" className="m2" />
          <Icon name="clock" className="m2" />
          <Icon name="close" className="m2" />
          <Icon name="cloud" className="m2" />
          <Icon name="cog" className="m2" />
          <Icon name="compose" className="m2" />
          <Icon name="expand" className="m2" />
          <Icon name="external" className="m2" />
          <Icon name="file" className="m2" />
          <Icon name="folder" className="m2" />
          <Icon name="geolocation" className="m2" />
          <Icon name="grid" className="m2" />
          <Icon name="heart" className="m2" />
          <Icon name="home" className="m2" />
          <Icon name="info" className="m2" />
          <Icon name="link" className="m2" />
          <Icon name="list" className="m2" />
          <Icon name="lock" className="m2" />
          <Icon name="mail" className="m2" />
          <Icon name="musicNote" className="m2" />
          <Icon name="next" className="m2" />
          <Icon name="no" className="m2" />
          <Icon name="pause" className="m2" />
          <Icon name="picture" className="m2" />
          <Icon name="pin" className="m2" />
          <Icon name="play" className="m2" />
          <Icon name="previous" className="m2" />
          <Icon name="refresh" className="m2" />
          <Icon name="repost" className="m2" />
          <Icon name="search" className="m2" />
          <Icon name="shoppingCart" className="m2" />
          <Icon name="skull" className="m2" />
          <Icon name="speakerVolume" className="m2" />
          <Icon name="speaker" className="m2" />
          <Icon name="star" className="m2" />
          <Icon name="tag" className="m2" />
          <Icon name="trash" className="m2" />
          <Icon name="triangleDown" className="m2" />
          <Icon name="triangleLeft" className="m2" />
          <Icon name="triangleRight" className="m2" />
          <Icon name="triangleUp" className="m2" />
          <Icon name="user" className="m2" />
          <Icon name="video" className="m2" />
          <Icon name="warning" className="m2" />
        </div>
      ),
    },
  ];

};


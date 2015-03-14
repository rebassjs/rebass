
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
var Pagination  = Rebass.Pagination;
var Breadcrumbs  = Rebass.Breadcrumbs;
var Progress  = Rebass.Progress;
var Icon  = Rebass.Icon;

var ModalExample = React.createClass({
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
    console.log('render ModalExample');
    var children = [];
    React.Children.map(this.props.children, function(child) {
      console.log(child);
    });
    return (
      <div>{this.props.children}</div>
    )
  }
});


module.exports = function(color) {

  return [
    {
      name: 'Panel',
      description: 'Module to visually separate content',
      example: (
        <Panel color={color} header="Hamburger" footer="Bacon">
          <p>Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin.</p>
        </Panel>
      )
    },
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
          <input type="text" className={'m0 field-light border-'+color} />
          <Button color={color} outline={true}>Go</Button>
          <Button color={color}>Bacon</Button>
        </Group>
      ),
    },
    {
      name: 'Dropdown',
      description: 'Progressive disclosure for showing lists of actions (Note: this uses the Dropdown.Item Subcomponent)',
      example: (
        <Dropdown label="Actions" color={color}>
          <Dropdown.Item label="Action" href="#dropdown" />
          <Dropdown.Item label="Action" href="#!" />
          <Dropdown.Item label="Action" href="#!" />
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
      name: 'Banner',
      description: 'Hero banner with support for background images',
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
      name: 'Media',
      description: 'Flexbox based media object with alignment props',
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
      example: (
        <Pagination color={color}
          currentIndex={0}
          pages={[{number:1,href:'#Pagination'},{number:2,href:'#Pagination'},{number:3,href:'#Pagination'}]} />
      )
    },
    {
      name: 'Breadcrumbs',
      description: 'Link-based wayfinding for deep hierarchies',
      example: (
        <Breadcrumbs color={color}
          links={[{name:'Home',href:'#Breadcrumbs'},{name:'Hamburgers',href:'#Breadcrumbs'},{name:'Bacon Cheeseburger',href:'#Breadcrumbs'}]} />
      )
    },
    {
      name: 'Progress',
      description: 'Styled progress element',
      example: (
        <Progress color={color}
          value={0.375}/>
      )
    },
    {
      name: 'Modal',
      description: 'Modal overlay for handling discrete interactions',
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
              <Modal header="Hamburger" isOpen={this.state.open} onDismiss={this.close} color={this.props.color}>
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
      name: 'Icon',
      description: 'Icons from Geomicons',
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


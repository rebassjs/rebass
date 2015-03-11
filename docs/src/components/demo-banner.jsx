
var React = require('react');
var classnames = require('classnames');

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


var DemoBanner = React.createClass({

  render: function() {
    var color = this.props.color;
    var classes = {
      container: classnames('p2', color),
    };
    return (
      <div className={classes.container}>
        <div className="sm-flex flex-center mxn2">
          <div className="sm-col-7 px2">
            <Panel header="Hamburger" color={color}>
              Hamburger
            </Panel>
          </div>
          <div className="sm-col-5 px2 nowrap">
            <div className="mb2">
              <Group justified={true}>
                <Button outline={true} color={color}>Hamburger</Button>
                <Button outline={true} color={color}>Hamburger</Button>
                <Button outline={true} color={color}>Hamburger</Button>
              </Group>
            </div>
            <Group justified={true}>
              <input type="text" className={'flex-auto m0 field-light border-'+color} />
              <Button color={color} outline={true}>Go</Button>
            </Group>
            <div className="flex mxn2">
              <Icon className="h2 m2" name="cloud" />
              <div className="flex-auto" />
              <Icon className="h2 m2" name="cog" />
              <div className="flex-auto" />
              <Icon className="h2 m2" name="heart" />
              <div className="flex-auto" />
              <Icon className="h2 m2" name="search" />
            </div>
          </div>
        </div>
        <div className="sm-flex flex-start mxn2">
          <div className="sm-col-9 px2">
            <Message color={color} outline={true}>Hamburger pickle</Message>
          </div>
          <div className="sm-col-3 px2">
            <Dropdown label="Hamburger"
              color={color}
              open={true}>
              <Dropdown.Item href="#!" label="Hotdog" />
              <Dropdown.Item href="#!" label="Hotdog" />
            </Dropdown>
          </div>
        </div>
      </div>
    )
  }

});

module.exports = DemoBanner;


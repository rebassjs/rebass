
var React = require('react');
var classnames = require('classnames');

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
var Panel = Rebass.Panel
var Modal = Rebass.Modal;
var Icon = Rebass.Icon;
var Breadcrumbs = Rebass.Breadcrumbs;
var Progress = Rebass.Progress;
var Pagination = Rebass.Pagination;
var Banner = Rebass.Banner;


module.exports = React.createClass({

  renderDemo: function(example, i) {
    var demo = false;
    if (example.Demo) {
      demo = <example.Demo {...this.props} />
    } else if (example.example) {
      demo = <div>{example.example}</div>
    }
    var widthClass = false;
    switch (example.name) {
      case 'Banner':
      case 'Navbar':
        widthClass = 'full-width';
        break;
      case 'Panel':
        widthClass = 'sm-col-6';
    }
    return (
      <div key={'demo-'+example.name}
        className={classnames('m2', widthClass)}>
        {demo}
      </div>
    )
  },

  render: function() {
    var color = this.props.color;
    var examples = this.props.examples;
    return (
      <div className="flex flex-center flex-wrap mxn2">
        {examples.map(this.renderDemo)}
      </div>
    )
  }

});


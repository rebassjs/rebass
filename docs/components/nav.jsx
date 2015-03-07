
var React = require('react');
var Link = require('react-router').Link;
var classnames = require('classnames');
var NavItem = require('../..').NavItem;

module.exports = React.createClass({

  renderLink: function(route, i) {
    if (route.path == '/') { return false; }
    return (
      <Link
        key={'link-' + i}
        to={route.name}
        className="button button-narrow button-transparent blue"
        activeStyle={{color:'black'}}>
        {route.name}
      </Link>
    )
  },

  render: function() {
    var className = classnames(this.props.className, 'mxn1');
    return (
      <div {...this.props} className={className}>
        {this.props.routes.map(this.renderLink)}
        <NavItem href={this.props.homepage}
          theme="blue" compact={true}>
          Github
        </NavItem>
      </div>
    )
  }

});


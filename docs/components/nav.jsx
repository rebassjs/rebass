
var React = require('react');
var Link = require('react-router').Link;
var classnames = require('classnames');
var NavItem = require('../..').NavItem;

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      dark: false,
    }
  },

  renderLink: function(route, i) {
    if (route.path == '/') { return false; }
    var linkClass =
      classnames('button',
        'button-narrow',
        'button-transparent');
    return (
      <Link
        key={'link-' + i}
        to={route.name}
        className={linkClass}
        activeClassName="is-active">
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


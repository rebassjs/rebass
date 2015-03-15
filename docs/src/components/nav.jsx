
var React = require('react');
var Link = require('react-router').Link;
var classnames = require('classnames');
var NavItem = require('../../..').NavItem;

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      dark: false,
    }
  },

  renderLink: function(route, i) {
    //if (route.path == '') { return false; }
    return (
      <Link
        key={'link-' + i}
        to={route.name}
        className="button button-small mr1 button-link"
        activeClassName="is-active">
        {route.name}
      </Link>
    )
  },

  render: function() {
    var className = classnames(this.props.className, '');
    return (
      <div {...this.props} className={className}>
        {this.props.routes.map(this.renderLink)}
      </div>
    )
  }

});


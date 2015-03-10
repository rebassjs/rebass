
var React = require('react');
var Link = require('react-router').Link;
//var Nav = require('./nav.jsx');
var Logo = require('./logo.jsx')
var ColorSelect = require('./color-select.jsx')

var Rebass = require('../../..');
var NavItem = Rebass.NavItem;

module.exports = React.createClass({

  renderNavItem: function(route, i) {
    if (route.path == '') { return false; }
    return (
      <Link to={route.name}
        key={'sidebar-nav-item-'+i}
        className={'button block button-transparent '+this.props.color}
        activeClassName="is-active">
        {route.name}
      </Link>
    )
  },

  render: function() {

    return (
      <div className={this.props.color}>
        <div className="flex flex-center" onClick={this.props.toggleSidebar}>
          <Logo className="p2" />
          <div className="flex-auto" />
          <div className="sm-hide">
            <button
              title="Hide navigation"
              onClick={this.props.toggleSidebar}
              className="h3 button py2 button-transparent muted">
              &times;
            </button>
          </div>
        </div>
        <div className="px2">
          <h1 className="h2 caps">
            <Link to="root" className={this.props.color}>{this.props.title}</Link>
          </h1>
          <hr className={'border-'+this.props.color} />
          <div className="mxn2 mb4">
            {this.props.routes.map(this.renderNavItem)}
          </div>
          <div className="">
            <ColorSelect
              {...this.props} />
          </div>
          <div className="flex flex-baseline mxn2 mt4 mb2">
            <a href={this.props.homepage}
              className="button flex-auto button-transparent muted">
              Github
            </a>
            <p className="h5 bold px2 muted">
              Made by <a href="//jxnblk.com">Jxnblk</a>
            </p>
          </div>
        </div>
      </div>
    )
  }

});


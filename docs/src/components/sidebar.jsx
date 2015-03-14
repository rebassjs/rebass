
var React = require('react');
var classnames = require('classnames');
var Link = require('react-router').Link;
var Logo = require('./logo.jsx')
var ColorPicker = require('./color-picker.jsx')

var Rebass = require('../../..');
var NavItem = Rebass.NavItem;

var Router = require('react-router');

module.exports = React.createClass({

  mixins: [Router.State],

  renderNavItem: function(route, i) {
    if (route.path == '') { return false; }
    var examples;
    if (route.path == 'docs/components') {
      examples = this.props.examples;
    } else {
      examples = [];
    }
    return (
      <div key={'sidebar-nav-item'+i}>
        <Link to={route.name}
          className={'h4 button block button-transparent '+this.props.color}
          activeClassName="is-active">
          {route.name}
        </Link>
        {this.isActive('Components') ? this.renderInPageNavItems(route, examples) : false}
      </div>
    )
  },

  renderInPageNavItems: function(route, items) {
    var links = [];
    var color = this.props.color;
    var closeSidebar = this.props.closeSidebar;
    items.map(function(item, i) {
      links.push (
        <a href={'#'+item.name}
          key={'in-page-nav-item-'+item.name}
          onClick={closeSidebar}
          className={'button block button-transparent '+color}>
          {item.name}
        </a>
      )
    });
    return links;
  },

  render: function() {

    var classes = {
      container: classnames('flex flex-column', this.props.color),
    };

    var styles = {
      container: {
        minHeight: '100vh',
      }
    };

    return (
      <div className={classes.container} style={styles.container}>
        <div className="flex flex-center" onClick={this.props.closeSidebar}>
          <Logo className="p2" />
          <div className="flex-auto" />
          <div className="sm-hide">
            <button
              title="Hide navigation"
              onClick={this.props.closeSidebar}
              className="h3 button py2 button-transparent muted">
              &times;
            </button>
          </div>
        </div>
        <div className="flex-auto px2">
          <h1 className="h2 caps">
            <Link to="root" className={this.props.color}>{this.props.title}</Link>
          </h1>
          <hr className={'border-'+this.props.color} />
          <div className="mxn2 mb4">
            {this.props.routes.map(this.renderNavItem)}
          </div>
        </div>
        <div className="px2">
          <ColorPicker {...this.props} />
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


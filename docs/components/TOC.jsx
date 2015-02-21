
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      items: []
    }
  },

  renderNavItem: function(item) {
    var href = '#' + item.name;
    return (
      <a href={href} className="button block button-nav-light">
        {item.title}
      </a>
    )
  },

  render: function() {
    return (
      <nav className="px2 bg-white border rounded">
        <div className="mxn2">
          {this.props.items.map(this.renderNavItem)}
        </div>
      </nav>
    )
  }

});


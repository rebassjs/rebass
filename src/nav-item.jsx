
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      inverse: false,
      flush: true,
    }
  },

  render: function() {
    var linkClass = 'button-nav-' + (this.props.inverse ? 'dark' : 'light');
    linkClass += this.props.flush ? '' : ' mr1';
    return (
      <a {...this.props} className={linkClass}>
        {this.props.children}
      </a>
    )
  }

});


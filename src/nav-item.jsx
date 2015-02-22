
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      inverse: false,
      flush: true,
      compact: false,
      justified: false,
    }
  },

  render: function() {
    var linkClass = 'center button button-nav-'
      + (this.props.inverse ? 'dark' : 'light')
      + (this.props.compact ? ' button-narrow' : ' py2')
      + (this.props.justified ? ' flex-auto' : '');
    linkClass += this.props.flush ? '' : ' mr1';
    return (
      <a {...this.props} className={linkClass}>
        {this.props.children}
      </a>
    )
  }

});


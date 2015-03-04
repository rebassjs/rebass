
var React = require('react');
var classnames = require('classnames');

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
    var linkClass = 
      classnames(
        'center', 'button', 'button-transparent',
        { white: this.props.inverse },
        { 'button-narrow': this.props.compact },
        { py2: !this.props.compact },
        { 'flex-auto': this.props.justified },
        { mr1: !this.props.flush });
    return (
      <a {...this.props} className={linkClass}>
        {this.props.children}
      </a>
    )
  }

});


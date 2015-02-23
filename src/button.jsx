
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      flush: false,
      isActive: false,
      className: '',
    }
  },

  render: function() {
    var buttonClass = this.props.className + ' ';
    buttonClass += 'button-' + this.props.theme;
    buttonClass += this.props.flush ? '' : ' mr1';
    buttonClass += this.props.isActive ? ' is-active' : '';
    return (
      <button {...this.props} className={buttonClass}>
        {this.props.children}
      </button>
    )
  }

});


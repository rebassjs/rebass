
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'light-gray',
      flush: false,
    }
  },

  render: function() {
    var buttonClass = 'button-' + this.props.theme;
    buttonClass += this.props.flush ? '' : ' mr1';
    return (
      <button {...this.props} className={buttonClass}>
        {this.props.children}
      </button>
    )
  }

});


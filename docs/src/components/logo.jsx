
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      className: ''
    }
  },

  render: function() {
    var style = {
      display: 'block',
      width: '2.5em',
      height: '1em'
    };
    return (
      <svg xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 16"
        fill="currentcolor"
        style={style}
        className={this.props.className}>
        <path d="M20 0 L24 8 L40 6 L20 16 L16 8 L0 10 z" />
      </svg>
    )
  }

});


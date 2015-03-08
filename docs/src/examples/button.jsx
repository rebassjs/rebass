
var React = require('react');
var Rebass = require('../../..');
var Button = Rebass.Button;

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'blue'
    }
  },

  render: function() {
    var theme = this.props.theme; 
    return (
      <div>
        <Button theme={theme}>Button</Button>
        <Button theme={theme} outline={true}>Button</Button>
        <Button theme={theme} transparent={true}>Button</Button>
      </div>
    )
  }

});


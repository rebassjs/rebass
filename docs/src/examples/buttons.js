
var React = require('react');
var Rebass = require('../../..');
var Button = Rebass.Button;

  var transform = require('react-tools').transform;
  var jsxString = '<div>\n  <Button theme={theme}>Button</Button>\n  <Button theme={theme} outline={true}>Button</Button>\n  <Button theme={theme} transparent={true}>Button</Button>\n</div>';

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'blue'
    }
  },

  render: function() {
    var theme = this.props.theme; 
    console.log('button transformed');
    console.log(typeof eval(transform(jsxString)) );
    //return transform(jsxString);
    return eval(transform(jsxString))
  }

});


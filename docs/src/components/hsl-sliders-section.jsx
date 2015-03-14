
var React = require('react');
var Section = require('./Section.jsx');
var HslSliders = require('../../..').HslSliders;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      color: '#f51',
    }
  },

  handleColorChange: function(color) {
    this.setState({ color: color });
  },

  render: function() {
    var chipStyle = {
      color: 'white',
      backgroundColor: this.state.color,
    };
    return (
      <Section heading="HSL Sliders">
        <div className="p2 mb2"
          style={chipStyle}>
          {this.state.color}
        </div>
        <HslSliders
          value={this.state.color}
          onChange={this.handleColorChange}
          />
      </Section>
    )
  }

});


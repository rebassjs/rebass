
var React = require('react');
var Color = require('color');
var Section = require('./Section.jsx');
var HslSliders = require('react-hsl-sliders');

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
    try {
      var chipColor = Color(this.state.color).light() ? 'black' : 'white';
    } catch(e) {
      var chipColor = 'white';
    }
    var chipStyle = {
      color: chipColor,
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


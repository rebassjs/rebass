
var React = require('react');
var classnames = require('classnames');

var ColorSelect = React.createClass({

  getDefaultProps: function() {
    return {
      changeColor: function() {},
      colors: [],
      color: 'blue',
      dark: true,
      big: false,
    }
  },

  handleChange: function(e) {
    var value = e.target.value;
    this.props.changeColor(value);
  },

  renderOption: function(value, i) {
    var buttonClass = classnames('flex-auto', 'button', 'not-rounded', 'bg-'+value, { 'is-active': value == this.props.color });
    var buttonStyle = {
      height: 32
    };
    return (
      <button className={buttonClass}
        style={buttonStyle}
        title={value}
        value={value}
        key={'color-swatch-'+value}
        onClick={this.handleChange}>
        <span className="hide">{value}</span>
      </button>
    )
  },

  render: function() {
    return (
      <div>
        <label className="h5 bold block mb1">Color</label>
        <div className="flex flex-wrap">
          {this.props.colors.map(this.renderOption)}
        </div>
      </div>
    )
  }

});

module.exports = ColorSelect;


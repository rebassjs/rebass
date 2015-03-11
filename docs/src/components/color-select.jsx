
var React = require('react');

var ColorSelect = React.createClass({

  getDefaultProps: function() {
    return {
      changeColor: function() {},
      colors: [],
      color: 'blue',
      dark: true,
    }
  },

  handleChange: function(e) {
    var value = e.target.value;
    this.props.changeColor(value);
  },

  renderOption: function(value, i) {
    return (<option value={value} key={'color-option-'+value}>{value}</option>)
  },

  render: function() {
    var selectClass = 'block full-width field-' + (this.props.dark ? 'dark' : 'light');
    return (
      <div>
        <label className="h5 bold block mb1">Color</label>
        <select className={selectClass}
          onChange={this.handleChange}
          value={this.props.color}>
          {this.props.colors.map(this.renderOption)}
        </select>
      </div>
    )
  }

});

module.exports = ColorSelect;


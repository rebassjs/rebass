
var React = require('react');
var countries = require('countries-in-the-world');
var Section = require('./Section.jsx');
var FuzzyInput = require('../..').FuzzyInput;


module.exports = React.createClass({

  getDefaultProps: function() {
    var countriesAll = countries.all;
    var countriesArr = [];
    countriesAll.forEach(function(country) {
      countriesArr.push(country.name.common);
    });
    return {
      countries: countriesArr
    }
  },

  getInitialState: function() {
    return {
      country: '',
    }
  },

  handleCountryChange: function(country) {
    this.setState({ country: country });
  },

  render: function() {
    return (
      <Section heading="Fuzzy Input">
        <label>Country</label>
        <FuzzyInput
          value={this.state.country}
          onChange={this.handleCountryChange}
          options={this.props.countries}
          />
        <div>Value: {this.state.country}</div>
      </Section>
    )
  }

});


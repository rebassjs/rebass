/** @jsx React.DOM */

var React = require('react');
var rebass = require('../..');
var Badge = rebass.Badge;
var Message = rebass.Message;
var Media = rebass.Media;
var Flag = rebass.Flag
var Panel = rebass.Panel
var FuzzyInput = rebass.FuzzyInput;

var countries = require('countries-in-the-world');

module.exports = React.createClass({

  getDefaultProps: function() {
    var countriesAll = countries.all;
    var countriesArr = [];
    countriesAll.forEach(function(country) {
      console.log(country.name);
      countriesArr.push(country.name.common);
    });
    console.log(countriesArr);
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
    var style = {
      minHeight: '100vh',
    };
    return (
      <div className="" style={style}>

        <section className="py3">
          <Badge>Badge</Badge>
          <Badge theme="red">Badge</Badge>
          <Badge theme="yellow">Badge</Badge>
          <Badge theme="green">Badge</Badge>
          <Badge theme="blue">Badge</Badge>
          <Badge theme="dark-gray">Badge</Badge>
        </section>

        <section className="py3">
          <Message>Message</Message>
          <Message theme="red">Message</Message>
          <Message theme="yellow">Message</Message>
          <Message theme="green">Message</Message>
          <Message theme="blue">Message</Message>
          <Message theme="dark-gray">Message</Message>
        </section>

        <section className="py3">
          <Media>
            <img src="//placehold.it/96" />
            <div>Media Object</div>
          </Media>
        </section>

        <section className="py3">
          <Panel header="Panel Header">
            <div>Panel Body</div>
          </Panel>
          <Panel header="Panel Header" theme="blue">
            <div>Panel Body</div>
          </Panel>
        </section>

        <section className="py3">
          <label>Country</label>
          <FuzzyInput
            value={this.state.country}
            onChange={this.handleCountryChange}
            options={this.props.countries}
            />
          <div>{this.state.country}</div>
        </section>

      </div>
    )
  }

});


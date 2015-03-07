
var React = require('react');
var Rebass = require('../..');
var Banner = Rebass.Banner;
var Logo = require('./logo.jsx');
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <Banner theme="black" className="red">
        <h1 className="h1 h1-responsive m0">
          <Logo className="h1 mb2 mt4" />
          <span className="caps">{this.props.title}</span>
          <span className="h5 caps"> v{this.props.version}</span>
        </h1>
        <p className="h3 bold mb4">{this.props.description}</p>
        <Nav {...this.props} dark={true} />
      </Banner>
    )
  }

});


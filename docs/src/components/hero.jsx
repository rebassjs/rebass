
var React = require('react');
var Rebass = require('../../..');
var Banner = Rebass.Banner;
var Logo = require('./logo.jsx');
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    var footer = (
      <div className="flex flex-wrap py2">
        <div className="flex-auto" />
        <Nav {...this.props} dark={true} />
      </div>
    );
    return (
      <Banner theme="black"
        footer={footer}
        className="red">
        <h1 className="h1 h1-responsive m0">
          <Logo className="h1 mb2 mt3" />
          <span className="caps">{this.props.title}</span>
          <span className="h5 caps"> v{this.props.version}</span>
        </h1>
        <p className="h3 bold mb2">{this.props.description}</p>
      </Banner>
    )
  }

});


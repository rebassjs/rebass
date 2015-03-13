
var React = require('react');
var classnames = require('classnames');
var Rebass = require('../../..');
var Banner = Rebass.Banner;
var Logo = require('./logo.jsx');
var Nav = require('./nav.jsx');
var DemoBanner = require('./demo-banner.jsx');

module.exports = React.createClass({

  render: function() {

    var footer = (
      <div className="flex flex-wrap py2">
        <div className="sm-show flex-auto" />
        <Nav {...this.props} dark={true} />
      </div>
    );
    var bannerColor = this.props.dark ? 'black' : 'silver';
    var classes = {
      banner: classnames('relative', 'overflow-hidden', this.props.color),
    };

    return (
      <Banner color={bannerColor}
        footer={footer}
        className={classes.banner}>
        {/*
        <div className="absolute" style={{top:'5%', left:'40%',right:'-20%',opacity:0.1}}>
          <DemoBanner color={this.props.color} />
        </div>
        */}
        <div className="relative">
          <h1 className="h1 h1-responsive m0">
            <Logo className="h1 mb2 mt3" />
            <span className="caps">{this.props.title}</span>
            <span className="h5 caps"> v{this.props.version}</span>
          </h1>
          <p className="h3 bold mb2">{this.props.description}</p>
        </div>
      </Banner>
    )
  }

});


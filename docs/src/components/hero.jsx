
var React = require('react');
var classnames = require('classnames');
var Rebass = require('../../..');
var Banner = Rebass.Banner;
var Logo = require('./logo.jsx');
var Nav = require('./nav.jsx');
var Highlight = require('./highlight.jsx');

module.exports = React.createClass({

  render: function() {

    var footer = (
      <div className="flex flex-center flex-wrap py2">
        <Highlight string="npm install rebass" className="py1 px2 m0" style={{backgroundColor:'transparent'}} />
        <div className="sm-show flex-auto" />
        <Nav {...this.props} dark={true} />
      </div>
    );
    var bannerColor = this.props.dark ? 'black' : 'silver';
    var classes = {
      banner: classnames(this.props.color),
    };

    return (
      <Banner color={bannerColor}
        footer={footer}
        className={classes.banner}>
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


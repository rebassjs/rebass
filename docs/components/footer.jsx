
var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <footer className="container px2">
        <div className="flex flex-wrap flex-center py3 mxn1">
          <h3 className="h4 m0 px1">
            <Link to="Home">
              {this.props.title}
            </Link>
          </h3>
          <div className="h5 bold px1">v{this.props.version}</div>
          <Nav {...this.props} />
          <div className="flex-auto" />
          <p className="h5 px1 m0">
            <span>Made by </span>
            <a href="//jxnblk.com">Jxnblk</a>
          </p>
        </div>
      </footer>
    )
  }

});



var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <footer className="container px2 py3">
        <Nav {...this.props} className="mb1" />
        <div className="flex flex-wrap flex-baseline mxn2">
          <div className="flex flex-baseline px2">
            <h4 className="h5 m0">
              <Link to={this.props.baseUrl}>
                {this.props.title} <span className="h5">v{this.props.version}</span>
              </Link>
            </h4>
          </div>
          <a href={this.props.npm} className="button button-small mr1 button-link">
            NPM
          </a>
          <a href={this.props.homepage} className="button button-small mr1 button-link">
            Github
          </a>
          <div className="flex-auto" />
          <p className="bold h5 px2 m0">
            <span>Made by </span>
            <a href="//jxnblk.com">Jxnblk</a>
          </p>
        </div>
      </footer>
    )
  }

});


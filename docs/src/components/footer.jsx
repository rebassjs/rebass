
var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <footer className="container px2 py3">
        <Nav {...this.props} className="mxn2 mb1" />
        <div className="flex flex-wrap flex-baseline mxn2">
          <div className="flex flex-baseline px2">
            <h3 className="h4 m0">
              <Link to={this.props.baseUrl}>
                {this.props.title}
              </Link>
            </h3>
            <span className="h5 bold">v{this.props.version}</span>
          </div>
          <a href={this.props.npm} className="button button-transparent">
            NPM
          </a>
          <a href={this.props.homepage} className="button button-transparent">
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


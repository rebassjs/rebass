
var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <footer className="px2">
        <div className="flex flex-wrap flex-center py3 mxn2">
          <h3 className="h4 m0 px2">
            <Link to={this.props.baseUrl}>
              {this.props.title}
            </Link>
          </h3>
          <div className="h5 bold px2">v{this.props.version}</div>
          <Nav {...this.props} />
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


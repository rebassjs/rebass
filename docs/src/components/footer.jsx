
var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <footer className="container px2">
        <div className="flex flex-wrap flex-center py3 mxn2">
          <div className="flex flex-baseline px2">
            <h3 className="h4 m0">
              <Link to={this.props.baseUrl}>
                {this.props.title}
              </Link>
            </h3>
            <span className="h5 bold">v{this.props.version}</span>
          </div>
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


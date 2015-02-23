/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({


  render: function() {
    var homeLink = '//jxnblk.com/' + this.props.name;
    return (
      <footer className="flex flex-wrap flex-center py3 mxn1">
        <h3 className="h4 m0 px1">
          <a href={homeLink}>
            {this.props.name}
          </a>
        </h3>
        <div className="h5 bold px1">v{this.props.version}</div>
        <a href={this.props.homepage} className="button">Github</a>
        <div className="flex-auto" />
        <p className="h5 px1 m0">
          <span>Made by </span>
          <a href="//jxnblk.com">Jxnblk</a>
        </p>
      </footer>
    )
  }

});


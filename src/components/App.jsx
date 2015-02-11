/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header');
var Body = require('./Body');
var Footer = require('./Footer');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <Header {...this.props} />
        <Body {...this.props} />
        <Footer {...this.props} />
      </div>
    )
  }

});


/** @jsx React.DOM */

var React = require('react');
var Header = require('./Header.jsx');
var Body = require('./Body.jsx');
var Footer = require('./Footer.jsx');

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


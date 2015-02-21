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
        <div className="sm-flex mxn2">
          <div className="sm-col-8 px2">
            <Body {...this.props} />
          </div>
          <div className="sm-col-4 px2">
          </div>
        </div>
        <Footer {...this.props} />
      </div>
    )
  }

});


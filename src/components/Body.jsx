/** @jsx React.DOM */

var React = require('react');
var Badge = require('./Badge.jsx');
var Message = require('./Message.jsx');
var Media = require('./Media.jsx');

module.exports = React.createClass({

  render: function() {
    var style = {
      minHeight: '100vh'
    };
    return (
      <div style={style}>
        <div className="mb4">
          <h2>Badge</h2>
          <Badge>Badge</Badge>
          <Badge theme="blue">Badge</Badge>
          <Badge theme="green">Badge</Badge>
          <Badge theme="yellow">Badge</Badge>
          <Badge theme="red">Badge</Badge>
          <Badge theme="dark-gray">Badge</Badge>
        </div>
        <div className="mb4">
          <h2>Message</h2>
          <Message theme="blue">This is a flash message</Message>
          <Message theme="green">Success message</Message>
          <Message theme="yellow">Warning message</Message>
          <Message theme="red">Error message</Message>
          <Message theme="dark-gray">Dark message</Message>
        </div>
        <div className="clearfix mb4">
          <h2>Media Object</h2>
          <div className="col col-6">
            <Media>
              <img src="http://placehold.it/96"/>
              <div>
                <p>Media body</p>
              </div>
            </Media>
          </div>
          <div className="col col-6">
            <Media right={true}>
              <img src="http://placehold.it/96"/>
              <div>
                <p>Media right body</p>
              </div>
            </Media>
          </div>
        </div>
      </div>
    )
  }

});


/** @jsx React.DOM */

var React = require('react');
var Badge = require('./Badge');
var Message = require('./Message');
var Media = require('./Media');
var Flag = require('./Flag');

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
          <div className="col col-6">
            <Media>
              <svg viewBox="0 0 32 32" width="96" height="96" className="img">
                <rect width="32" height="32"/>
              </svg>
              <div>
                <p>Media with SVG</p>
              </div>
            </Media>
          </div>
        </div>
        <div className="clearfix mb4">
          <h2>Flag Object</h2>
          <div className="col col-6">
            <Flag>
              <img src="http://placehold.it/96"/>
              <div>Flag body</div>
            </Flag>
          </div>
          <div className="col col-6">
            <Flag right={true}>
              <img src="http://placehold.it/96"/>
              <div>Flag body</div>
            </Flag>
          </div>
        </div>
      </div>
    )
  }

});


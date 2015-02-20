/** @jsx React.DOM */

var React = require('react');
var Badge = require('../components/Badge.jsx');
var Message = require('../components/Message.jsx');
var Media = require('../components/Media.jsx');
var Flag = require('../components/Flag.jsx');
var Panel = require('../components/Panel.jsx');

var Box = require('../components/Box');
var BoxHeader = require('../components/BoxHeader');
//var BoxFooter = require('../components/BoxFooter');
var BoxBody = require('../components/BoxBody');

module.exports = React.createClass({

  render: function() {
    var style = {
      minHeight: '100vh',
      //justifyContent: 'space-between',
    };
    return (
      <div className="" style={style}>
          <h2>Box</h2>
          <Box theme="blue">
            <BoxHeader>Header</BoxHeader>
            <BoxBody>Box</BoxBody>
          </Box>
          <h2>Panel</h2>
          <Panel>
            <h1>Panel Body</h1>
          </Panel>
          <Panel header="Panel Title" theme="blue">
            <h1>Panel Body</h1>
          </Panel>
          <Panel header="Panel Title" footer="Panel footer" theme="red">
            <h1>Panel Body</h1>
          </Panel>
          <Panel theme="green">
            <header>Panel header element</header>
            <h1>Panel Body</h1>
            <footer>Footer element</footer>
          </Panel>
          <h2>Badge</h2>
          <Badge>Badge</Badge>
          <Badge theme="blue">Badge</Badge>
          <Badge theme="green">Badge</Badge>
          <Badge theme="yellow">Badge</Badge>
          <Badge theme="red">Badge</Badge>
          <Badge theme="dark-gray">Badge</Badge>
          <h2>Message</h2>
          <Message theme="blue">This is a flash message</Message>
          <Message theme="green">Success message</Message>
          <Message theme="yellow">Warning message</Message>
          <Message theme="red">Error message</Message>
          <Message theme="dark-gray">Dark message</Message>
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
          <div>
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


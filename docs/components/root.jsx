
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      baseUrl: '',
      stylesheets: [],
      scripts: [],
    }
  },

  render: function() {
    var baseUrl = this.props.baseUrl;
    var scripts = [];
    this.props.scripts.map(function(script) {
      if (!script.match(/^http|^\/\//)) {
        script = baseUrl + script;
      }
      scripts.push(script);
    });
    var stylesheets = [];
    this.props.stylesheets.map(function(stylesheet) {
      if (!stylesheet.match(/^http|^\/\//)) {
        stylesheet = baseUrl + stylesheet;
      }
      stylesheets.push(stylesheet);
    });
    return (
      <Html {...this.props}
        stylesheets={stylesheets}
        scripts={scripts}>
        {/* <Header {...this.props} /> */}
        <RouteHandler {...this.props} />
        {/* <Footer {...this.props} /> */}
      </Html>
    )
  }
});

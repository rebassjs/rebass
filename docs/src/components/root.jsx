
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var colorbass = require('colorbass');

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      baseUrl: '/',
      stylesheets: [],
      scripts: [],
    }
  },

  getInitialState: function() {
    return {
      color: 'blue',
      dark: true,
    }
  },

  isDark: function(color) {
    var dark;
    switch (color) {
      case 'navy':
      case 'black':
      case 'maroon':
        dark = false;
        break;
      default:
        dark = true;
        break;
    }
    return dark;
  },

  changeColor: function(value) {
    var dark = this.isDark(value);
    this.setState({ color: value, dark: dark });
  },

  render: function() {

    var bassClasses = colorbass(this.state.color);
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

    var examples = require('../data-examples.jsx')(this.state.color);

    return (
      <Html {...this.props}
        stylesheets={stylesheets}
        scripts={scripts}>
        <RouteHandler {...this.props}
          {...this.state}
          changeColor={this.changeColor}
          examples={examples}
          bassClasses={bassClasses} />
      </Html>
    )
  }
});

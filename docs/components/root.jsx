
var React = require('react');
var Router = require('react-router-component');
var Locations = Router.Locations;
var Location = Router.Location;
var NotFound = Router.NotFound;

var Html = require('react-html');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Home = require('./home.jsx');
//var About = require('./about.jsx');
//var NotFoundPage = require('./not-found-page.jsx');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      baseUrl: '',
      stylesheets: [],
      scripts: [],
    }
  },

  render: function() {
    //var script = this.props.baseUrl + this.props.script;
    //var path = this.props.baseUrl + this.props.path;
    //var head = (<link rel="stylesheet" href={this.props.baseUrl + '/css/rebass-temp.css'} />);
    var baseUrl = this.props.baseUrl;
    var scripts = [];
    this.props.scripts.map(function(script) {
      scripts.push(baseUrl + script);
    });
    var stylesheets = [];
    this.props.stylesheets.map(function(stylesheet) {
      stylesheets.push(baseUrl + stylesheet);
    });
    return (
      <Html {...this.props}
        stylesheets={stylesheets}
        scripts={scripts}>
        <Header {...this.props} />
        <Locations path={this.props.path}>
          <Location path="/" handler={Home} />
        </Locations>
        <Footer {...this.props} />
      </Html>
    )
  }
});

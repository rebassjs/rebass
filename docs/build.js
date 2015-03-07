// Static site build task

var fs = require('fs');
var path = require('path');
var React = require('react');
var Router = require('react-router');
require('node-jsx').install();

var routes = require('./routes.jsx');
var Root = require('./components/root.jsx');
var data = require('./data');

data.routes.map(function(route) {
  //console.log('build', '/' + route.path);
  Router.run(routes(data), data.baseUrl + route.path, function(Handler, state) {
    var html = React.renderToString(React.createElement(Handler, data));
    var dir = path.join(__dirname, '../' + route.path + '/');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    var filename = dir + 'index.html';
    fs.writeFileSync(filename, html);
    console.log('HTML written to ', filename);
  });
});





var _ = require('lodash');

var data = require('../package.json');

data.title = _.capitalize(data.name);
data.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css',
  '/css/rebass.css',
];
data.scripts = [
  '/docs/js/app.js'
];

data.routes = [
  { path: '/' },
  //{ path: '/about' },
];

module.exports = data;



var _ = require('lodash');
var pkg = require('../package.json');

var data = {};
data.title = _.capitalize(pkg.name);
data.version = pkg.version;
data.description = pkg.description;
data.author = pkg.author;
data.homepage = pkg.homepage;
data.npm = '//npmjs.com/package/' + pkg.name;

var Home = require('./components/home.jsx');
var GettingStarted = require('./components/getting-started.jsx');
var Docs = require('./components/docs.jsx');

data.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css',
  '/docs/css/rebass.css',
];
data.scripts = [
  '/docs/js/app.js'
];

data.baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  data.baseUrl = '/rebass';
} else {
  console.log('development build');
}

data.routes = [
  { path: '/', name: 'Home', handler: Home },
  { path: '/getting-started', name: 'Getting Started', handler: GettingStarted },
  { path: '/docs', name: 'Docs', handler: Docs },
];

module.exports = data;


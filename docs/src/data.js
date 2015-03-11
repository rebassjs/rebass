
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var pkg = require('../../package.json');

var data = {};
data.title = _.capitalize(pkg.name);
data.version = pkg.version;
data.description = pkg.description;
data.author = pkg.author;
data.homepage = pkg.homepage;
data.npm = '//npmjs.com/package/' + pkg.name;

var Home = require('./components/home.jsx');
var Docs = require('./components/docs.jsx');
var GettingStarted = require('./components/getting-started.jsx');
var Components = require('./components/components.jsx');

data.stylesheets = [
  'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css',
  'docs/css/rebass.css',
  'docs/css/docs.css',
];
data.scripts = [
  'docs/js/app.min.js'
];

data.baseUrl = '/';
if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  data.baseUrl = '/rebass/';
} else if (process.env.NODE_ENV === 'github') {
  console.log('github build');
  data.baseUrl = '/rebass/';
} else {
  console.log('development build');
  data.baseUrl = '/rebass/';
}

data.markdown = {
  GettingStarted: fs.readFileSync(path.join(__dirname, '../getting-started/README.md'), 'utf8'),
  //Components: fs.readFileSync(path.join(__dirname, '../components/README.md'), 'utf8'),
};

data.colors = [
  'aqua', 'blue', 'navy', 'teal',
  'green', 'olive', 'lime', 'yellow',
  'orange', 'red', 'fuchsia', 'purple', 'maroon',
  'black', 'gray', 'silver', 'white',
];

data.routes = [
  {
    path: '',
    name: 'Home',
    handler: Home
  },
  {
    path: 'docs/getting-started',
    name: 'Getting Started',
    handler: GettingStarted,
  },
  {
    path: 'docs/components',
    name: 'Components',
    handler: Components,
  },
];

data.redirects = [
  {
    from: '/docs',
    to: '/docs/getting-started',
  },
  {
    from: '/docs/',
    to: '/docs/getting-started',
  }
];

module.exports = data;


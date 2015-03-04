
var _ = require('lodash');

var data = require('../package.json');

data.title = _.capitalize(data.name);
data.stylesheet = 'http://d2v52k3cl9vedd.cloudfront.net/bassdock/1.0.3/bassdock.min.css';
data.script = '/docs/js/app.js';

if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  data.baseUrl = '/rebass';
} else {
  console.log('development build');
  data.baseUrl = '';
}


data.routes = [
  { path: '/' },
  //{ path: '/about' },
];

module.exports = data;


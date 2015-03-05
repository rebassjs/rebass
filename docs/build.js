// Static site build task

var path = require('path');
var staticReact = require('static-react');
var Root = require('./components/root.jsx');
var data = require('./data');

if (process.env.NODE_ENV === 'production') {
  console.log('production build');
  data.baseUrl = '/rebass';
} else {
  console.log('development build');
  data.baseUrl = '';
}


staticReact({
  dir: path.join(__dirname, '..'),
  Root: Root,
  props: data
});


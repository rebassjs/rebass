// Static site build task

var path = require('path');
var staticReact = require('static-react');
var Root = require('./components/root.jsx');
var data = require('./data');

staticReact({
  dir: path.join(__dirname, '..'),
  Root: Root,
  props: data
});


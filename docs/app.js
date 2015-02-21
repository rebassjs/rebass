// App

var React = require('react');
var data = require('./data');

var Index = React.createFactory(require('./components/Index.jsx'));

React.render(
  Index(data),
  document.getElementById('app')
);



// App

var React = require('react');
var data = require('./data');

var App = React.createFactory(require('./components/App.jsx'));

React.render(
  App(data),
  document.getElementById('app')
);



// App

var React = require('react');
var Root = React.createFactory(require('./components/root.jsx'));
 
React.render(Root(window.INITIAL_PROPS), document);


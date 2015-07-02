
var React = require('react')
var Root = require('./components/Root.jsx')

if (typeof document !== 'undefined') {
  var props = JSON.parse(document.querySelector('#initial-props').innerHTML)
  React.render(React.createElement(Root, props), document)
}

module.exports = function render (locals, callback) {
  var html = React.renderToString(React.createElement(Root, locals))
  callback(null, '<!DOCTYPE html>' + html)
}


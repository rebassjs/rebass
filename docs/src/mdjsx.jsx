
var React = require('react');
var marked = require('marked');
var highlight = require('highlight.js');

var Htmltojsx = require('htmltojsx');

var converter = new Htmltojsx({
  createClass: false,
});

var renderer = new marked.Renderer();

module.exports = function(markdown) {

  renderer.code = function(code, lang) {
    if (lang && lang.match(/^jsx/)) {
      var data = {
        rendered: code,
        code: highlight.highlight('html', code).value
      };
      var syntax = highlight.highlightAuto(code, [lang]).value;
      result = (<div> {code} <pre>{syntax}</pre> </div>);
      //result = '<div>' + code
      //  '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>' +
      //  '</div>;
    } else {
      var syntax = highlight.highlightAuto(code, [lang]).value;
      result = (<pre>{syntax}</pre>);
    }
    return result;
  };

  //var html = marked(markdown, { renderer: renderer });
  var html = marked(markdown, { });

  var jsx = converter.convert(html);

  return jsx;

  //console.log('mdjsx', html);

  //return React.createClass({
  //  render: function() {
  //    return <div>{html}</div>
  //  }
  //});

};


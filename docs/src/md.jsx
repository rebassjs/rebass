
global.React = require('react');
var marked = require('marked');
var highlight = require('highlight.js');

var md2react = require('md2react');

var renderer = new marked.Renderer();

module.exports = function(markdown) {

  var examples = [];
  var index = 0;

  renderer.code = function(code, lang) {
    if (lang && lang.match(/^jsx/)) {
      var data = {
        rendered: code,
        code: highlight.highlight('html', code).value
      };
      examples.push({ index: index, src: code });
      index++;
      result = '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>';
    } else {
      result = '<pre>' + highlight.highlightAuto(code, [lang]).value + '</pre>';
    }
    return result;
  };


  //var jsx = reactdown('# herro');
  var jsx = md2react(markdown);
  //console.log(jsx);
  var html = marked(markdown, { renderer: renderer });

  return { html: html, jsx: jsx, examples: examples };

};


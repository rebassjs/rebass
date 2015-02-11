/** @jsx React.DOM */

var React = require('react');
var Badge = require('./Badge');
var Message = require('./Message');
var Media = require('./Media');
var Flag = require('./Flag');

module.exports = React.createClass({displayName: "exports",

  render: function() {
    var style = {
      minHeight: '100vh'
    };
    return (
      React.createElement("div", {style: style}, 
        React.createElement("div", {className: "mb4"}, 
          React.createElement("h2", null, "Badge"), 
          React.createElement(Badge, null, "Badge"), 
          React.createElement(Badge, {theme: "blue"}, "Badge"), 
          React.createElement(Badge, {theme: "green"}, "Badge"), 
          React.createElement(Badge, {theme: "yellow"}, "Badge"), 
          React.createElement(Badge, {theme: "red"}, "Badge"), 
          React.createElement(Badge, {theme: "dark-gray"}, "Badge")
        ), 
        React.createElement("div", {className: "mb4"}, 
          React.createElement("h2", null, "Message"), 
          React.createElement(Message, {theme: "blue"}, "This is a flash message"), 
          React.createElement(Message, {theme: "green"}, "Success message"), 
          React.createElement(Message, {theme: "yellow"}, "Warning message"), 
          React.createElement(Message, {theme: "red"}, "Error message"), 
          React.createElement(Message, {theme: "dark-gray"}, "Dark message")
        ), 
        React.createElement("div", {className: "clearfix mb4"}, 
          React.createElement("h2", null, "Media Object"), 
          React.createElement("div", {className: "col col-6"}, 
            React.createElement(Media, null, 
              React.createElement("img", {src: "http://placehold.it/96"}), 
              React.createElement("div", null, 
                React.createElement("p", null, "Media body")
              )
            )
          ), 
          React.createElement("div", {className: "col col-6"}, 
            React.createElement(Media, {right: true}, 
              React.createElement("img", {src: "http://placehold.it/96"}), 
              React.createElement("div", null, 
                React.createElement("p", null, "Media right body")
              )
            )
          ), 
          React.createElement("div", {className: "col col-6"}, 
            React.createElement(Media, null, 
              React.createElement("svg", {viewBox: "0 0 32 32", width: "96", height: "96", className: "img"}, 
                React.createElement("rect", {width: "32", height: "32"})
              ), 
              React.createElement("div", null, 
                React.createElement("p", null, "Media with SVG")
              )
            )
          )
        ), 
        React.createElement("div", {className: "clearfix mb4"}, 
          React.createElement("h2", null, "Flag Object"), 
          React.createElement("div", {className: "col col-6"}, 
            React.createElement(Flag, null, 
              React.createElement("img", {src: "http://placehold.it/96"}), 
              React.createElement("div", null, "Flag body")
            )
          ), 
          React.createElement("div", {className: "col col-6"}, 
            React.createElement(Flag, {right: true}, 
              React.createElement("img", {src: "http://placehold.it/96"}), 
              React.createElement("div", null, "Flag body")
            )
          )
        )
      )
    )
  }

});


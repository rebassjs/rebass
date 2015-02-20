/** @jsx React.DOM */

var React = require('react');
var Badge = require('./Badge.jsx');
var Message = require('./Message.jsx');
var Media = require('./Media.jsx');
var Flag = require('./Flag.jsx');
var Panel = require('./Panel.jsx');

var Box = require('./Box');
var BoxHeader = require('./BoxHeader');
//var BoxFooter = require('./BoxFooter');
var BoxBody = require('./BoxBody');

module.exports = React.createClass({displayName: "exports",

  panelFooter: function() {
      return (
        React.createElement("div", null, 
          React.createElement("button", {className: "button-blue"}, "Button")
        )
      )
  },

  render: function() {
    var style = {
      minHeight: '100vh',
      justifyContent: 'space-between',
    };
    var panelFooter = this.panelFooter();
    return (
      React.createElement("div", {className: "", style: style}, 
          React.createElement("h2", null, "Box"), 
          React.createElement(Box, {theme: "blue"}, 
            React.createElement(BoxHeader, null, "Header"), 
            React.createElement(BoxBody, null, "Box")
          ), 
          React.createElement("h2", null, "Panel"), 
          React.createElement(Panel, null, 
            React.createElement("h1", null, "Panel Body")
          ), 
          React.createElement(Panel, {header: "Panel Title", theme: "blue"}, 
            React.createElement("h1", null, "Panel Body")
          ), 
          React.createElement(Panel, {header: "Panel Title", footer: "Panel footer", theme: "red"}, 
            React.createElement("h1", null, "Panel Body")
          ), 
          React.createElement(Panel, {theme: "green"}, 
            React.createElement("header", null, "Panel header element"), 
            React.createElement("h1", null, "Panel Body"), 
            React.createElement("footer", null, "Footer element")
          ), 
          React.createElement("h2", null, "Badge"), 
          React.createElement(Badge, null, "Badge"), 
          React.createElement(Badge, {theme: "blue"}, "Badge"), 
          React.createElement(Badge, {theme: "green"}, "Badge"), 
          React.createElement(Badge, {theme: "yellow"}, "Badge"), 
          React.createElement(Badge, {theme: "red"}, "Badge"), 
          React.createElement(Badge, {theme: "dark-gray"}, "Badge"), 
          React.createElement("h2", null, "Message"), 
          React.createElement(Message, {theme: "blue"}, "This is a flash message"), 
          React.createElement(Message, {theme: "green"}, "Success message"), 
          React.createElement(Message, {theme: "yellow"}, "Warning message"), 
          React.createElement(Message, {theme: "red"}, "Error message"), 
          React.createElement(Message, {theme: "dark-gray"}, "Dark message"), 
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
          ), 
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
  }

});


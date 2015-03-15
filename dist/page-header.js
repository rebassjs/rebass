
var React = require('react');
var classnames = require('classnames');

var PageHeader = React.createClass({displayName: "PageHeader",

  getDefaultProps: function() {
    return {
      title: '',
      description: false,
      right: false,
      size: 'medium',
    }
  },

  render: function() {
    var title = (typeof this.props.title == 'string') ?
      React.createElement("h1", {className: classnames('m0', {'h0 h0-responsive': this.props.size == 'big'}, {'h00 h00-responsive': this.props.size == 'huge'})}, 
        this.props.title
      ) :
      this.props.title;
    var description = this.props.description ?
      React.createElement("p", {className: "m0"}, this.props.description) :
      false;
    return (
      React.createElement("header", {className: classnames(this.props.className, 'py3 mb3 border-bottom')}, 
        React.createElement("div", {className: "sm-flex flex-center flex-wrap mxn2"}, 
          React.createElement("div", {className: "flex-auto px2"}, 
            title, 
            description
          ), 
          React.createElement("div", {className: "flex-none px2"}, 
            this.props.right
          )
        )
      )
    )
  }

});

module.exports = PageHeader;


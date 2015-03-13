
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');
var Icon = require('react-geomicons');

var Pagination = React.createClass({displayName: "Pagination",

  getDefaultProps: function() {
    return {
      currentIndex: 0,
      onClick: function(){},
      previous: function(){},
      next: function(){},
      pages: [],
      color: 'blue',
    }
  },

  renderPageLink: function(link, i) {
    var linkClass = classnames('center', 'button', 'button-transparent', { 'is-active': this.props.currentIndex == i });
    var handleClick = function(e) {
      this.props.onClick(i);
    };
    return React.createElement("a", {href: link.href, key: 'pagination-link-'+i, className: linkClass, title: 'Go to page ' + link.number}, link.number)
  },

  render: function() {

    var colors = colorbass(this.props.color);

    var classes ={
      container: classnames(this.props.className, 'flex', colors.secondary),
      previous: classnames('nowrap', 'flex-none', 'button', 'button-transparent', 'rounded-left'),
      next: classnames('no wrap', 'flex-none', 'button', 'button-transparent', 'rounded-right'),
    };

    var styles = {
      icon: {
        position: 'relative',
        top: '.125em',
      }
    };

    return (
      React.createElement("div", React.__spread({},  this.props, {className: classes.container}), 
        React.createElement("button", {onClick: this.props.previous, className: classes.previous}, 
          React.createElement(Icon, {name: "chevronLeft", style: styles.icon}), " Previous"
        ), 
        React.createElement("div", {className: "flex-auto"}), 
        this.props.pages.map(this.renderPageLink), 
        React.createElement("div", {className: "flex-auto"}), 
        React.createElement("button", {onClick: this.props.next, className: classes.next}, 
          "Next ", React.createElement(Icon, {name: "chevronRight", style: styles.icon})
        )
      )
    )
  }

});

module.exports = Pagination;


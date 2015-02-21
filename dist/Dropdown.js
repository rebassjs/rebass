
var React = require('react');

module.exports = React.createClass({displayName: "exports",

  getDefaultProps: function() {
    return {
      label: '',
      theme: 'light-gray',
      flush: false,
      top: false,
      right: false,
      classes: {
        container: 'inline-block',
        inner: '',
        button: '',
        menu: 'bg-white border rounded ',
      }
    }
  },

  getInitialState: function() {
    return {
      isOpen: false,
    }
  },

  toggle: function(e) {
    if (e) { e.preventDefault() }
    var isOpen = !this.state.isOpen;
    this.setState({ isOpen: isOpen });
  },

  close: function(e) {
    this.setState({ isOpen: false });
  },

  render: function() {

    var styles = {
      container: {},
      inner: {
        position: 'relative',
        zIndex: this.state.isOpen ? 1 : '',
      },
      button: {},
      menu: {
        display: this.state.isOpen ? '' : 'none',
        position: 'absolute',
        left: this.props.right ? 'auto' : 0,
        right: this.props.right ? 0 : 'auto',
        minWidth: '12rem',
      },
      overlay: {
        display: this.state.isOpen ? '' : 'none',
        position: 'fixed',
        zIndex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        //  backgroundColor: 'tomato', opacity: .5
      }
    };
    var classes = this.props.classes;
    classes.button = ' button-' + this.props.theme;
    classes.container += this.props.flush ? '' : ' mr1';

    return (
      React.createElement("div", React.__spread({},  this.props, {className: classes.container}), 
        React.createElement("div", {style: styles.overlay, 
          onClick: this.close}), 
        React.createElement("div", {className: classes.inner, style: styles.inner}, 
          React.createElement("button", {className: classes.button, 
            onClick: this.toggle}, 
            this.props.label
          ), 
          React.createElement("div", {className: classes.menu, style: styles.menu, onClick: this.close}, 
            this.props.children
          )
        )
      )
    )

  }

});


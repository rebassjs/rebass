
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');
var Button = require('./button');

var Dropdown = React.createClass({

  getDefaultProps: function() {
    return {
      label: '',
      color: 'silver',
      flush: false,
      top: false,
      right: false,
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
        borderRadius: 'inherit',
      },
      button: {
        borderRadius: 'inherit',
      },
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
      }
    };
    var classes = {
      container: classnames(this.props.className,
        'inline-block', 'rounded',
        {'mr1': !this.props.flush }),
      inner: '',
      menu: 'mt1 bg-white border rounded ',
    };

    return (
      <div {...this.props} className={classes.container}>
        <a href="#!"
          style={styles.overlay}
          onClick={this.close} />
        <div className={classes.inner} style={styles.inner}>
          <Button color={this.props.color}
            flush={true}
            style={styles.button}
            onClick={this.toggle}>
            {this.props.label} <span className="caret" />
          </Button>
          <div className={classes.menu} style={styles.menu} onClick={this.close}>
            {this.props.children}
          </div>
        </div>
      </div>
    )

  }

});

Dropdown.Item = React.createClass({

  render: function() {
    var label = this.props.label || this.props.children;
    return (
      <a {...this.props} className="button block button-transparent">
        {label}
      </a>
    )
  }

});

module.exports = Dropdown;


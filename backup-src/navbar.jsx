
var React = require('react/addons');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Navbar = React.createClass({

  getDefaultProps: function() {
    return {
      color: 'silver',
      compact: false,
      wrap: true,
      justified: false,
    }
  },

  getInitialState: function() {
    return {
      open: false
    }
  },

  expand: function() {
    this.setState({ open: true });
  },

  collapse: function() {
    this.setState({ open: false });
  },

  renderChild: function(child) {
    var childProps = {
      inverse: colorbass(this.props.color).inverse,
      compact: this.props.compact,
      justified: this.props.justified,
      open: this.state.open,
      expand: this.expand,
      collapse: this.collapse,
    };
    var newChild = React.addons.cloneWithProps(child, childProps);
    return newChild;
  },

  render: function() {
    var bassClasses = colorbass(this.props.color);
    var navbarClass =
      classnames('flex', 'flex-center', 'mb2',
        { 'flex-wrap': this.props.wrap },
        bassClasses.primary);
    return (
      <div {...this.props} className={navbarClass}>
        {React.Children.map(this.props.children, this.renderChild)}
      </div>
    )
  }

});


Navbar.Item = React.createClass({

  getDefaultProps: function() {
    return {
      label: false,
      flush: true,
      compact: false,
      justified: false,
      inverse: false,
    }
  },

  render: function() {
    var linkClass = 
      classnames(
        'button', 'button-transparent',
        { white: this.props.inverse },
        { py2: !this.props.compact },
        { 'center flex-auto': this.props.justified },
        { mr1: !this.props.flush });
    var label = this.props.label || this.props.children || false;
    return (
      <a {...this.props} className={linkClass}>
        {label} 
      </a>
    )
  }

});


Navbar.Toggle = React.createClass({
  getDefaultProps: function() {
    return {
      open: false,
      expand: function() {},
      collapse: function() {},
    }
  },
  toggle: function() {
    var open = !this.props.open;
    if (open) { this.props.expand() }
    else if (!open) { this.props.collapse() }
  },
  render: function() {
    return <Navbar.Item {...this.props} onClick={this.toggle} />
  }
});


Navbar.Drawer = React.createClass({
  getDefaultProps: function() {
    return {
      open: false
    }
  },
  render: function() {
    var containerStyles = {
      maxHeight: this.props.open ? '100vh' : 0,
      transition: 'max-height .3s ease-in-out',
    };
    var containerClasses = classnames(this.props.className, 'full-width', 'md-flex', 'flex-center', 'overflow-auto');
    return (
      <div className={containerClasses} style={containerStyles}>
        {this.props.children}
      </div>
    )
  }
});


Navbar.Spacer = React.createClass({
  render: function() {
    return <div className="flex-auto" />
  }
});


module.exports = Navbar;


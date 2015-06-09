
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');

var Message = React.createClass({

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      color: false,
      outline: false,
    };
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var bassClasses = colorbass(this.props.color);
    var classes = {
      container: classnames('bold', 'flex', 'flex-center', 'mb2', 'rounded',
        this.props.outline ?  (this.props.color + ' border border-' + this.props.color) : bassClasses.primary),
      body: classnames('flex-auto', 'p2'),
      dismiss: classnames('h3 py2 button-transparent muted'),
    };
    var style = {
      display: this.state.visible ? '' : 'none'
    };
    return (
      <div className={classes.container} style={style}>
        <div className={classes.body}>
          {this.props.children}
        </div>
        <button
          onClick={this.dismiss}
          className={classes.dismiss}
          style={this.buttonStyle}
          title="Dismiss">
            &times;
        </button>
      </div>
    )
  }

});

module.exports = Message;



var React = require('react');
var classnames = require('classnames');
var colorbass = require('../colorbass');

var Message = React.createClass({

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      theme: false
    };
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var classes = {
      container: classnames('bold', 'flex', 'flex-center', 'mb2', 'rounded', colorbass(this.props.theme).primary),
      body: classnames('flex-auto', 'p2'),
      dismiss: classnames('h3'),
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


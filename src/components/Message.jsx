/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      visible: true
    }
  },

  getDefaultProps: function() {
    return {
      theme: 'mid-gray',
      inverse: false
    };
  },

  isInverse: function() {
    var theme = this.props.theme || null;
    switch (theme) {
      case 'yellow':
        return false;
      default: 
        return true;
    }
  },

  dismiss: function() {
    this.setState({ visible: false });
  },

  render: function() {
    var theme = 'bg-' + this.props.theme;
    theme += this.isInverse() ? ' white' : '';
    var messageClass = 'bold flex flex-center mb2 rounded ' + theme;
    var style = {
      display: this.state.visible ? '' : 'none'
    };
    return (
      <div className={messageClass} style={style}>
        <div className="flex-auto p2">
          {this.props.children}
        </div>
        <a href="#!"
          onClick={this.dismiss}
          className="h3 button white"
          title="Dismiss">
            &times;
        </a>
      </div>
    )
  }

});


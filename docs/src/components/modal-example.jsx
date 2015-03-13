
var React = require('react');
var Rebass = require('../../..');
var Button = Rebass.Button;
var Modal = Rebass.Modal;

var ModalExample = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false,
    }
  },

  open: function() {
    this.setState({ isOpen: true });
  },

  close: function() {
    this.setState({ isOpen: false });
  },

  render: function() {
    return (
      <div>
      </div>
    )
  }

});


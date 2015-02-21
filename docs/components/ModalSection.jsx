
var React = require('react');
var Section = require('./Section.jsx');
var Rebass = require('../..');
var Button = Rebass.Button;
var Modal = Rebass.Modal;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false,
    }
  },

  open: function() {
    this.setState({ isOpen: true });
  },

  close: function() {
    console.log('close modal');
    this.setState({ isOpen: false });
  },

  render: function() {
    return (
      <Section heading="Modal">
        <Button theme="blue" onClick={this.open}>Open Modal</Button>
        <Modal header="Modal header" isOpen={this.state.isOpen} onDismiss={this.close}>
          <h1>Modal body</h1>
        </Modal>
      </Section>
    )
  }

});


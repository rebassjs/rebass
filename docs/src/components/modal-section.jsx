
var React = require('react');
var Section = require('./Section.jsx');
var Rebass = require('../../..');
var Button = Rebass.Button;
var Modal = Rebass.Modal;

module.exports = React.createClass({

  getInitialState: function() {
    return {
      isOpen: false,
      size: 'medium',
      fullBleed: false,
    }
  },

  open: function() {
    this.setState({ isOpen: true });
  },

  openRegularModal: function() {
    this.setState({ isOpen: true, size: 'medium', fullBleed: false });
  },

  openBigModal: function() {
    this.setState({ isOpen: true, size: 'big', fullBleed: false });
  },

  openSmallModal: function() {
    this.setState({ isOpen: true, size: 'small', fullBleed: false });
  },

  openFullModal: function() {
    this.setState({ isOpen: true, size: 'medium', fullBleed: true });
  },

  close: function() {
    console.log('close modal');
    this.setState({ isOpen: false });
  },

  render: function() {
    return (
      <Section heading="Modal">
        <Button color="blue" onClick={this.openRegularModal}>Open Modal</Button>
        <Button color="blue" onClick={this.openBigModal}>Open Big Modal</Button>
        <Button color="blue" onClick={this.openSmallModal}>Open Small Modal</Button>
        <Button color="blue" onClick={this.openFullModal}>Open Full-Bleed Modal</Button>
        <Modal header="Modal header"
          size={this.state.size}
          fullBleed={this.state.fullBleed}
          isOpen={this.state.isOpen}
          onDismiss={this.close}>
          <h1>Modal body</h1>
          <p className="h3">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin. Drumstick pork fatback pork chop doner pork belly prosciutto pastrami sausage. Ground round prosciutto shank pastrami corned beef venison tail. Turkey short loin tenderloin jerky porchetta pork loin.</p>
          <p>Landjaeger jerky ham sausage corned beef kevin drumstick ham hock shank meatball. Jowl brisket meatloaf capicola corned beef tri-tip drumstick strip steak t-bone flank. Biltong landjaeger pastrami cow tenderloin pork chop chuck turkey leberkas ribeye capicola hamburger jowl brisket. Bresaola boudin leberkas capicola salami, ribeye filet mignon tail kevin.</p>
          <p>Rump flank ribeye tri-tip prosciutto t-bone pork loin doner, fatback boudin kielbasa sausage shank. Pork loin ground round shank chicken kevin tail pancetta turkey pig swine sausage cow drumstick leberkas pork chop. Shoulder rump t-bone, ball tip ground round porchetta chicken capicola boudin. Leberkas frankfurter pastrami kielbasa ribeye flank ham hock spare ribs ground round capicola pork short loin tongue shank porchetta. Kielbasa pork loin porchetta tongue tenderloin pork chop sausage meatball shankle flank.</p>
        </Modal>
      </Section>
    )
  }

});


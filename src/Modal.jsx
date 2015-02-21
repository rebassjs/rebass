
var React = require('react');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      isOpen: false,
      flush: false,
      header: '',
      theme: 'light-gray',
      onDismiss: function() {}
    }
  },

  //getInitialState: function() {
  //  return {
  //    isOpen: this.props.isOpen,
  //  }
  //},

  //close: function(e) {
  //  this.setState({ isOpen: false }, this.props.onDismiss(e));
  //},


  render: function() {

    var isOpen = this.props.isOpen;
    var header = this.props.header;
    var styles = {
      container: {
        display: isOpen ? '' : 'none',
      },
      modal: {
        width: 512,
          //minWidth: '16rem',
        maxWidth: '100%',
        margin: 'auto',
        boxShadow: '0 4px 4px rgba(0,0,0,.1)',
      },
    };
    var classes = {
      body: this.props.flush ? '' : 'p2',
    };

    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 z4 flex flex-center p2 overflow-auto bg-darken-4"
        style={styles.container}>
        <div className="absolute top-0 right-0 bottom-0 left-0"
          onClick={this.props.onDismiss}/>
        <div className="relative dark-gray bg-white rounded" style={styles.modal}>
          <div className="flex flex-center border-bottom">
            <div className="bold p2 flex-auto">{header}</div>
            <button className="h3 button-nav-light dark-gray"
              onClick={this.props.onDismiss}
              title="Dismiss modal overlay">
              &times;
            </button>
          </div>
          <div className={classes.body}>
            {this.props.children}
          </div>
        </div>
      </div>
    )

  }

});


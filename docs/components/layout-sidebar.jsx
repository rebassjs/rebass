
var React = require('react');
var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Sidebar = require('./sidebar.jsx');

module.exports = React.createClass({

  render: function() {
    var styles = {
      content: {
        minHeight: '100vh',
        maxWidth: '48rem',
      },
    };
    return (
      <div className="sm-flex">
        <div className="sm-col-4 md-col-3 lg-col-2 px2 white bg-black">
          <Sidebar {...this.props} />
        </div>
        <div className="sm-col-8 mx-auto px2 flex flex-column" style={styles.content}>
          <div className="flex-auto bg-silver">
            <h1>Sidebar Layout</h1>
            {this.props.children}
          </div>
          <div className="mxn1">
            <Footer {...this.props} />
          </div>
        </div>
      </div>
    )
  }

});


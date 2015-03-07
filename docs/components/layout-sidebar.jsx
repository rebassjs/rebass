
var React = require('react');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Sidebar = require('./sidebar.jsx');

module.exports = React.createClass({

  render: function() {

    var styles = {
      sidebar: {
        width: '16rem',
      },
      content: {
        minHeight: '100vh',
        maxWidth: '48rem',
      },
    };

    return (
      <div className="sm-flex">
        <div className="px2 white bg-black" style={styles.sidebar}>
          <Sidebar {...this.props} />
        </div>
        <div className="flex-auto mx-auto px2 flex flex-column" style={styles.content}>
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


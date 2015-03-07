
var React = require('react');

var Header = require('./header.jsx');
var Footer = require('./footer.jsx');
var Sidebar = require('./sidebar.jsx');
var Logo = require('./logo.jsx');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      sidebarIsOpen: false,
    }
  },

  toggleSidebar: function() {
    open = !this.state.sidebarIsOpen;
    this.setState({ sidebarIsOpen: open });
  },

  render: function() {

    var styles = {
      sidebar: {
        marginLeft: this.state.sidebarIsOpen ? 0 : false,
      },
      sidebarToggle: {
        //display: this.state.sidebarIsOpen ? 'none' : false,
      },
      content: {
        minHeight: '100vh',
        //maxWidth: '48rem',
      },
      contentBody: {
        maxWidth: '48rem',
      }
    };

    return (
      <div className="LayoutSidebar flex">
        <div className="LayoutSidebar-sidebar flex-none white bg-black" style={styles.sidebar}>
          <Sidebar {...this.props} toggleSidebar={this.toggleSidebar} />
        </div>
        <div className="LayoutSidebar-content flex-auto flex flex-column" style={styles.content}>
          <div className="flex-auto">
            <div className="flex flex-center sm-hide aqua bg-black" style={styles.sidebarToggle}>
              <button onClick={this.toggleSidebar}
                className="flex flex-center button py2 button-transparent">
                <Logo className="mr2" />
                <div>Menu</div>
              </button>
            </div>
            <div className="px2 mx-auto" style={styles.contentBody}>
              {this.props.children}
            </div>
          </div>
          <div className="px1">
            <Footer {...this.props} />
          </div>
        </div>
      </div>
    )
  }

});


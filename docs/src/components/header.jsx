
var React = require('react');
var Link = require('react-router').Link;
var Nav = require('./nav.jsx');

module.exports = React.createClass({


  render: function() {
    return (
      <header className="container px2">
        <div className="flex flex-center flex-wrap py3 border-bottom">
          <div className="flex-auto">
            <Link to={this.props.baseUrl} className="black">
              <h1 className="m0">{this.props.title}</h1>
            </Link>
            <p className="m0">{this.props.description}</p>
          </div>
          <Nav {...this.props} />
        </div>
      </header>
    )
  }

});


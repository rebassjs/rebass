/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({


  render: function() {
    return (
      <header className="flex flex-center py3 border-bottom">
        <div className="flex-auto">
          <h1 className="m0">{this.props.name}</h1>
          <p className="m0">{this.props.description}</p>
        </div>
      </header>
    )
  }

});



var React = require('react');
var classnames = require('classnames');

var DocsHeader = React.createClass({

  render: function() {

    return (
      <header {...this.props}
        className={
          classnames('py2',
             'mb3',
             'border-bottom',
             'border-'+this.props.color)
          }>
        <h1 className="h0 h0-responsive caps m0">{this.props.title}</h1>
      </header>
    )
  }

});

module.exports = DocsHeader;


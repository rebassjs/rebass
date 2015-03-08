
var React = require('react');
var transform = require('react-tools').transform;
var highlight = require('highlight.js');
var classnames = require('classnames')

var Rebass = require('../../..');
var Button = Rebass.Button;
var Badge = Rebass.Badge;


module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      theme: 'blue',
      jsx: '',
    }
  },

  highlight: function(jsx) {
    var code = {
      __html: highlight.highlight('xml', jsx).value
    };
    return <pre className="m0 bg-darken-1" dangerouslySetInnerHTML={code}/>
  },

  renderString: function(jsx) {
    var theme = this.props.theme;
    return eval(transform(jsx));
  },

  render: function() {
    var classes = {
      container: classnames('mb2 border rounded', 'border-' + this.props.theme),
    };
    return (
      <div className={classes.container}>
        <div className="p2">
          {this.renderString(this.props.jsx)}
        </div>
        <div className="">
          {this.highlight(this.props.jsx)}
        </div>
      </div>
    )
  }

});



var React = require('react');
//var transform = require('react-tools').transform;
var highlight = require('highlight.js');

  // For default props
  var Rebass = require('../../..');
  var Button = Rebass.Button;

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      example: Button,
      jsx: <Button>Button</Button>,
    }
  },

  highlight: function(jsx) {
    console.log('example highlight', jsx);
    var code = {
      __html: highlight.highlight('xml', jsx).value
    };
    return <pre className="m0 bg-darken-1" dangerouslySetInnerHTML={code}/>
  },

  render: function() {
    return (
      <div className="mb2 border border-aqua rounded">
        <div className="p2">
          <this.props.example />
        </div>
        <div className="">
          {this.highlight(this.props.jsx)}
        </div>
      </div>
    )
  }

});


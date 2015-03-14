
var React = require('react');
var highlight = require('highlight.js');

var Highlight = React.createClass({

  getDefaultProps: function() {
    return {
      lang: null,
      string: ''
    }
  },

  render: function() {
    var code = highlight.highlightAuto(this.props.string, [this.props.lang]).value;
    return <pre {...this.props} dangerouslySetInnerHTML={{ __html: code }} />
  }

});

module.exports = Highlight;


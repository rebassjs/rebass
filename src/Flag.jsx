
var React = require('react/addons');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      right: false
    }
  },

  render: function() {
    var img, body;
    var right = this.props.right;
    React.Children.map(this.props.children, function(child) {
      var type = child.type;
      var className = child.props.className;
      if (type == 'img' || type == 'picture' || type == 'svg' || className == 'img') {
        img = React.addons.cloneWithProps(child, {
          className: right ? 'ml1 flex-last' : 'mr1'
        });
      } else {
        body = React.addons.cloneWithProps(child, {
          className: 'flex-auto'
        }); 
      }
    });
    return (
      <div className="flex flex-center mb2">
        {img}
        {body}
      </div>
    )
  }

});


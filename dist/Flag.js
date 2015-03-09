
var React = require('react/addons');

var Flag = React.createClass({displayName: "Flag",

  getDefaultProps: function() {
    return {
      right: false
    }
  },

  statics: {
    //Img: FlagImg,
    //Body: FlagBody,
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
      React.createElement("div", {className: "flex flex-center mb2"}, 
        img, 
        body
      )
    )
  }

});

module.exports = Flag;


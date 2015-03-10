
var React = require('react');

var classnames = require('classnames');
var colorbass = require('colorbass');

var Banner = React.createClass({

  getDefaultProps: function() {
    return {
      color: 'black',
      center: false,
      right: false,
      backgroundImage: false,
      footer: false,
      header: false,
    };
  },

  render: function() {

    var classes = {
      outer: classnames(this.props.className,
        { center: this.props.center },
        { 'right-align': this.props.right },
        colorbass(this.props.color).primary),
      inner: classnames('px3 py4'),
    };
    var style = {
      backgroundImage: this.props.backgroundImage,
    };

    return (
      <div className={classes.outer} style={style}>
        {this.props.header}
        <div className={classes.inner}>
          {this.props.children}
        </div>
        {this.props.footer}
      </div>
    )
  }

});

module.exports = Banner;


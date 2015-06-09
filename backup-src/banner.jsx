
var React = require('react');

var classnames = require('classnames');
var colorbass = require('colorbass');

var Banner = React.createClass({

  getDefaultProps: function() {
    return {
      color: 'black',
      align: 'left',
      backgroundImage: false,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      footer: false,
      header: false,
    };
  },

  render: function() {

    var classes = {
      outer: classnames(this.props.className,
        colorbass(this.props.color).primary),
      inner: classnames('px3 py4'),
    };
    var style = {
      textAlign: this.props.align,
      backgroundImage: this.props.backgroundImage,
      backgroundPosition: this.props.backgroundPosition,
      backgroundSize: this.props.backgroundSize,
    };

    if (typeof this.props.header == 'string') {
      var header = <div className="p2">{this.props.header}</div>;
    } else {
      var header = this.props.header;
    }

    if (typeof this.props.footer == 'string') {
      var footer = <div className="p2">{this.props.footer}</div>;
    } else {
      var footer = this.props.footer;
    }

    return (
      <div className={classes.outer} style={style}>
        {header}
        <div className={classes.inner}>
          {this.props.children}
        </div>
        {footer}
      </div>
    )
  }

});

module.exports = Banner;


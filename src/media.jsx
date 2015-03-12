
var React = require('react/addons');
var classnames = require('classnames');

var Media = React.createClass({

  getDefaultProps: function() {
    return {
      right: false,
      align: 'top',
    }
  },

  render: function() {
    var containerClasses =
      classnames('flex', 'mb2', 'mxn1', 'overflow-hidden',
        { 'flex-center': (this.props.align == 'middle') },
        { 'flex-start': (this.props.align == 'top') },
        { 'flex-end': (this.props.align == 'bottom') });
    return (
      <div className={containerClasses}>
        {this.props.children}
      </div>
    )
  }

});

Media.Img = React.createClass({
  render: function() {
    var imgClasses = classnames('ml1 mr1');
    var img = this.props.children || <img {...this.props} />
    return (
      <div className={imgClasses}>{img}</div>
    )
  }
});

Media.Body = React.createClass({
  render: function() {
    return <div className="flex-auto ml1 mr1">{this.props.children}</div>
  }
});

module.exports = Media;


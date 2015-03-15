
var React = require('react');
var classnames = require('classnames');

var PageHeader = React.createClass({

  getDefaultProps: function() {
    return {
      title: '',
      description: false,
      right: false,
      size: 'medium',
    }
  },

  render: function() {
    var title = (typeof this.props.title == 'string') ?
      <h1 className={classnames('m0', {'h0 h0-responsive': this.props.size == 'big'}, {'h00 h00-responsive': this.props.size == 'huge'})}>
        {this.props.title}
      </h1> :
      this.props.title;
    var description = this.props.description ?
      <p className="m0">{this.props.description}</p> :
      false;
    return (
      <header className={classnames(this.props.className, 'py3 mb3 border-bottom')}>
        <div className="sm-flex flex-center flex-wrap mxn2">
          <div className="flex-auto px2">
            {title}
            {description}
          </div>
          <div className="flex-none px2">
            {this.props.right}
          </div>
        </div>
      </header>
    )
  }

});

module.exports = PageHeader;


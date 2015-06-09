
var React = require('react');
var classnames = require('classnames');

var Breadcrumbs = React.createClass({

  getDefaultProps: function() {
    return {
      links: [],
      color: 'blue',
    }
  },

  renderLink: function(link, i) {
    var isLast = (i == this.props.links.length - 1);
    var linkClasses = classnames('button', 'button-small', 'mr1', 'button-link', isLast ? 'black' : this.props.color);
    return (
      <span className="inline-block" key={'breadcrumb-link-'+i}>
        <a href={link.href} className={linkClasses}>{link.name}</a>
        { isLast ? '' :  <span className="mr1">/</span> }
      </span>
    )
  },

  render: function() {
    var containerClasses = classnames(this.props.className);
    return (
      <div {...this.props} className={containerClasses}>
        {this.props.links.map(this.renderLink)}
      </div>
    )
  }

});

module.exports = Breadcrumbs;


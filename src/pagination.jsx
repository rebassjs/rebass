
var React = require('react');
var classnames = require('classnames');
var colorbass = require('colorbass');
var Icon = require('react-geomicons');

var Pagination = React.createClass({

  getDefaultProps: function() {
    return {
      currentIndex: 0,
      onClick: function(){},
      previous: function(){},
      next: function(){},
      pages: [],
      color: 'blue',
    }
  },

  renderPageLink: function(link, i) {
    var linkClass = classnames('center', 'button', 'button-transparent', { 'is-active': this.props.currentIndex == i });
    var handleClick = function(e) {
      this.props.onClick(i);
    };
    return <a href={link.href} key={'pagination-link-'+i} className={linkClass} title={'Go to page ' + link.number}>{link.number}</a>
  },

  render: function() {

    var colors = colorbass(this.props.color);

    var classes ={
      container: classnames(this.props.className, 'flex', colors.secondary),
      previous: classnames('button', 'button-transparent', 'rounded-left'),
      next: classnames('button', 'button-transparent', 'rounded-right'),
    };

    var styles = {
      icon: {
        position: 'relative',
        top: '.125em',
      }
    };

    return (
      <div {...this.props} className={classes.container}>
        <button onClick={this.props.previous} className={classes.previous}>
          <Icon name="chevronLeft" style={styles.icon} /> Previous
        </button>
        <div className="flex-auto" />
        {this.props.pages.map(this.renderPageLink)}
        <div className="flex-auto" />
        <button onClick={this.props.next} className={classes.next}>
          Next <Icon name="chevronRight" style={styles.icon} />
        </button>
      </div>
    )
  }

});

module.exports = Pagination;


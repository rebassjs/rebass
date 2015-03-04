
var React = require('react/addons');
var classnames = require('classnames');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      inverse: false,
      theme: 'silver',
      compact: false,
      wrap: true,
      justified: false,
    }
  },

  renderChild: function(child) {
    var inverse = this.props.inverse || this.isInverse();
    var childProps = {
      inverse: inverse,
      compact: this.props.compact,
      justified: this.props.justified,
    };
    var newChild = React.addons.cloneWithProps(child, childProps);
    return newChild;
  },

  render: function() {
    var themeClasses = this.getThemeClasses();
    var navbarClass =
      classnames(
        'flex', 'flex-center', 'mb2',
        { 'flex-wrap': this.props.wrap },
        themeClasses.main);
    return (
      <div {...this.props} className={navbarClass}>
        {React.Children.map(this.props.children, this.renderChild)}
      </div>
    )
  }

});


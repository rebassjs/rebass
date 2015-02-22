
var React = require('react/addons');
var ThemeMixin = require('./theme-mixin');

module.exports = React.createClass({

  mixins: [ThemeMixin],

  getDefaultProps: function() {
    return {
      inverse: false,
      theme: 'lighter-gray',
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
    var classes = this.getThemeClasses();
    var navbarClass = 'flex flex-center ' + (this.props.wrap ? 'flex-wrap ' : '') + 'mb2 ' + classes.main;
    return (
      <div {...this.props} className={navbarClass}>
        {React.Children.map(this.props.children, this.renderChild)}
      </div>
    )
  }

});


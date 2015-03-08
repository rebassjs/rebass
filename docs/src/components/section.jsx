
var React = require('react');
var kebabCase = require('lodash.kebabcase');

module.exports = React.createClass({

  getDefaultProps: function() {
    return {
      heading: '',
    }
  },

  render: function() {
    var name = kebabCase(this.props.heading);
    var sectionLink = '#' + name;
    return (
      <section ref={name}
        data-title={this.props.heading}
        id={name}
        className="py3">
        <h2 className="mt0">
          <a href={sectionLink}>
            {this.props.heading}
          </a>
        </h2>
        {this.props.children}
      </section>
    )
  }

});


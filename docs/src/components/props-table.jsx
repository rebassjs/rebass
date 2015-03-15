
var React = require('react');
var classnames = require('classnames');

var PropsTable = React.createClass({

  getDefaultProps: function() {
    return {
      props: [],
      color: 'blue',
    }
  },

  renderRow: function(prop) {
    return (
      <tr key={'prop-row-'+prop.name}>
        <td><code>{prop.name}</code></td>
        <td>{prop.type}</td>
        <td><code>{prop.defaults}</code></td>
        <td>{prop.description}</td>
      </tr>
    )
  },

  render: function() {
    return (
      <div className="overflow-auto rounded bg-darken-1">
        <table {...this.props} className={classnames(this.props.className, 'table-light')}>
          <thead>
            <tr>
              <th className="bold col-2">Props</th>
              <th className="col-2">Type</th>
              <th className="col-2">Default</th>
              <th className="col-6">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.props.map(this.renderRow)}
          </tbody>
        </table>
      </div>
    )
  }

});

module.exports = PropsTable;


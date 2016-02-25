
import React from 'react'

const PropsTable = ({ props, ...other }) => {
  const sx = {
    root: {
      maxWidth: '100%',
      overflowX: 'scroll'
    },
    table: {
      borderCollapse: 'separate',
      borderSpacing: 0,
      maxWidth: '100%',
      width: '100%'
    },
    th: {
      textAlign: 'left',
      padding: '4px 0',
      verticalAlign: 'bottom',
      borderBottom: '2px solid #ddd'
    },
    td: {
      padding: '4px 0',
      borderBottom: '1px solid #ddd'
    }
  }

  if (!props) {
    return <div />
  }

  return (
    <div style={sx.root}>
      <table style={sx.table}>
        <thead>
          <tr>
            <th style={sx.th}>Prop</th>
            <th style={sx.th}>Type</th>
            <th style={sx.th}>Description</th>
          </tr>
        </thead>
        <tbody>
          {props && Object.keys(props).map(key => {
            const prop = props[key]
            return (
              <tr key={key}>
                <td style={sx.td}>{key} {prop.required && '*'}</td>
                <td style={sx.td}>{prop.type.name}</td>
                <td style={sx.td}>{prop.description}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

PropsTable.propTypes = {
  props: React.PropTypes.object
}

export default PropsTable


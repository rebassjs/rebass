
import React from 'react'

const PropsTable = ({ props, ...other }) => {
  const sx = {
    root: {
      maxWidth: '100%',
      overflowX: 'scroll'
    },
    table: {
      fontSize: 14,
      lineHeight: 1.125,
      minWidth: 512,
      borderCollapse: 'separate',
      borderSpacing: 0,
      maxWidth: '100%',
      width: '100%'
    },
    th: {
      textAlign: 'left',
      padding: '8px 8px 8px 0',
      verticalAlign: 'bottom',
      borderBottom: '2px solid rgba(0, 0, 0, .125)'
    },
    td: {
      padding: '8px 8px 8px 0',
      borderBottom: '1px solid rgba(0, 0, 0, .125)'
    },
    mono: {
      fontFamily: '"Roboto Mono", monospace'
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
            let type = prop.type && prop.type.name
            if (!type) {
              return false
            }
            if (type === 'enum' && prop.type.value && Array.isArray(prop.type.value)) {
              type = `oneOf([${prop.type.value.map(v => v.value).join(', ')}])`
            } else if (type === 'union' && prop.type.value && Array.isArray(prop.type.value)) {
              type = `oneOfType([${
                prop.type.value.map(v => {
                  if (v.name === 'enum' && v.value && Array.isArray(v.value)) {
                    return 'oneOf([' + v.value.map(a => a.value).join(', ') + '])'
                  } else {
                    return v.name
                  }
                }).join(', ')
              }])`
            }
            return (
              <tr key={key}>
                <td style={{ ...sx.td, ...sx.mono }}
                  title={prop.required && 'Required'}>
                  {key}{prop.required && '*'}
                  {prop.defaultValue && ` (${prop.defaultValue.value})`}
                </td>
                <td style={{ ...sx.td, ...sx.mono }}>{type}</td>
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


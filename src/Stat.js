
import React from 'react'
import theme from './theme'
import margins from './util/margins'

/**
 * Styled number display for statistics
 */

const Stat = ({ value, label, unit, topLabel, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Stat : {}
  const { fontSizes, bold, scale } = config

  const sx = {
    root: {
      display: 'inline-block',
      ...margins(props, scale),
      ...customStyle,
      ...style
    },
    value: {
      fontSize: fontSizes[0],
      letterSpace: '-.125em',
      fontWeight: bold,
      lineHeight: 1,
      marginTop: topLabel ? scale[1] / 2 : null,
      marginBottom: topLabel ? null : scale[1] / 2
    },
    unit: {
      fontSize: fontSizes[3]
    },
    label: {
      fontSize: fontSizes[6],
      fontWeight: bold,
      lineHeight: 1
    }
  }

  return (
    <div {...props}
      className='Stat'
      style={sx.root}>
      {topLabel && <div style={sx.label}>{label}</div>}
      <div style={sx.value}>
        {value}
        {unit && <span style={sx.unit}>{unit}</span>}
      </div>
      {!topLabel && <div style={sx.label}>{label}</div>}
    </div>
  )
}

Stat.propTypes = {
  /** Value for stat shown in large font size */
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Optional unit for displaying next to value */
  unit: React.PropTypes.string,
  /** Label for stat */
  label: React.PropTypes.string,
  /** Displays label above value */
  topLabel: React.PropTypes.bool
}

Stat.contextTypes = {
  rebass: React.PropTypes.object
}

export default Stat



import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Styled number display for statistics
 */

const Stat = ({
  value,
  label,
  unit,
  topLabel,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold, scale } = theme

  const cx = classnames('Stat', className)

  const sx = {
    root: {
      display: 'inline-block',
      ...style
    },
    value: {
      fontSize: fontSizes[0],
      letterSpace: '-.125em',
      fontWeight: bold,
      lineHeight: 1,
      marginTop: topLabel ? scale[1] / 2 : null,
      marginBottom: topLabel ? null : scale[1] / 2,
      ...subComponentStyles.value
    },
    unit: {
      fontSize: fontSizes[3],
      ...subComponentStyles.unit
    },
    label: {
      fontSize: fontSizes[6],
      fontWeight: bold,
      lineHeight: 1,
      ...subComponentStyles.label
    }
  }

  return (
    <div
      {...props}
      className={cx}
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

Stat._name = 'Stat'

export default withRebass(Stat)




import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Badge = ({
  type,
  pill,
  circle,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const customStyle = rebass ? rebass.Badge : {}
  const { fontSizes, bold, scale, colors, borderRadius } = config
  const backgroundColor = colors[type]

  return (
    <div
      {...props}
      className='Badge'
      style={{
        fontSize: fontSizes[6],
        fontWeight: bold,
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: circle ? scale[2] : null,
        height: scale[2],
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: circle ? 0 : scale[1],
        paddingRight: circle ? 0 : scale[1],
        overflow: 'hidden',
        color: colors.white,
        borderRadius: (circle || pill) ? 99999 : borderRadius,
        backgroundColor,
        ...customStyle,
        ...style
      }} />
  )
}

Badge.propTypes = {
  /** Sets color based on type of badge */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error',
  ]),
  /** Sets pill style border radii */
  pill: React.PropTypes.bool,
  /** Sets width and border radius for circular badges */
  circle: React.PropTypes.bool
}

Badge.defaultProps = {
  type: 'default'
}

Badge.contextTypes = {
  rebass: React.PropTypes.object
}

export default Badge


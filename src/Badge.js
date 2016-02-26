

import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Badge = ({
  type,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const badgeStyle = rebass ? rebass.Badge : {}
  const { fontSizes, bold, scale, colors, borderRadius } = config
  const backgroundColor = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Badge'
      style={{
        fontSize: fontSizes[6],
        fontWeight: bold,
        display: 'inline-block',
        verticalAlign: 'center',
        paddingLeft: scale[1],
        paddingRight: scale[1],
        color: colors.white,
        borderRadius,
        backgroundColor,
        ...badgeStyle,
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
}

Badge.defaultProps = {
  type: 'default'
}

Badge.contextTypes = {
  rebass: React.PropTypes.object
}

export default Badge


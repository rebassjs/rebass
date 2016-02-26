

import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Badge = ({
  type,
  color,
  backgroundColor,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const badgeConfig = { ...theme.Badge, ...(rebass ? rebass.Badge : {}) }
  const bg = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Badge'
      style={{
        fontSize: config.fontSizes[5],
        fontWeight: 'bold',
        display: 'inline-block',
        verticalAlign: 'center',
        paddingLeft: config.scale[1],
        paddingRight: config.scale[1],
        color: color || badgeConfig.color,
        backgroundColor: backgroundColor || bg,
        borderRadius: config.borderRadius,
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
  /** Text color */
  color: React.PropTypes.string,
  /** Background color - overrides the badge type color */
  backgroundColor: React.PropTypes.string,
}

Badge.defaultProps = {
  type: 'default'
}

Badge.contextTypes = {
  rebass: React.PropTypes.object
}

export default Badge




import React from 'react'
import theme from './theme'

/** Component for displaying flash and error messages */

const Badge = ({
  type,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const badgeStyle = {
    ...theme.Badge,
    ...(rebass ? rebass.Badge : {}),
    ...style
  }
  const backgroundColor = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Badge'
      style={{
        display: 'inline-block',
        verticalAlign: 'center',
        paddingLeft: config.scale[1],
        paddingRight: config.scale[1],
        backgroundColor,
        ...badgeStyle
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


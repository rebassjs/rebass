
import React from 'react'
import Base from './Base'
import config from './config'

/** Component for displaying small status indicators */

const Badge = ({ ...props }, { rebass }) => {
  const { fontSizes, bold, scale, colors } = { ...config, ...rebass }

  const sx = {
    fontSize: fontSizes[6],
    fontWeight: bold,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: props.circle ? scale[2] : null,
    height: scale[2],
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: props.circle ? 0 : scale[1],
    paddingRight: props.circle ? 0 : scale[1],
    overflow: 'hidden',
    color: colors.white,
    backgroundColor: colors.default
  }

  return (
    <Base
      {...props}
      className='Badge'
      inverted
      baseStyle={sx} />
  )
}

Badge.propTypes = {
  /** Sets color based on theme */
  theme: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ]),
  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Sets pill style border radii */
  pill: React.PropTypes.bool,
  /** Sets width and border radius for circular badges */
  circle: React.PropTypes.bool
}

Badge.defaultProps = {
  theme: 'default',
  rounded: true
}

Badge.contextTypes = {
  rebass: React.PropTypes.object
}

export default Badge


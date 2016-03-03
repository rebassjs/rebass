

import React from 'react'
import Base from './Base'
import addContext from './util/add-context'
import theme from './theme'

/** Component for displaying small status indicators */

const Badge = ({
  type,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass}
  const { fontSizes, bold, scale, colors } = config
  const backgroundColor = colors[type]

  const sx = {
    fontSize: fontSizes[6],
    fontWeight: bold,
    boxSizing: 'border-box',
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
    backgroundColor
  }

  return (
    <Base
      {...props}
      className='Badge'
      baseStyle={sx} />
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
  type: 'default',
  rounded: true
}

export default addContext(Badge)



import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/** Component for displaying small status indicators */

const Badge = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const {
    fontSizes,
    bold,
    scale,
    colors,
    borderRadius
  } = theme

  const cx = classnames('Badge', className)

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
    backgroundColor: colors.default,
    borderRadius,
    ...style
  }

  return (
    <div
      {...props}
      inverted
      className={cx}
      style={sx} />
  )
}

export default withRebass(Badge)


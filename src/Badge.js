
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import baseline from './util/baseline'

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
    baselineShift,
    scale,
    colors,
    borderRadius
  } = theme

  const cx = classnames('Badge', className)

  const pad = baseline(baselineShift)(scale[1])
  const xpad = props.circle ? 0 : scale[1]

  const sx = {
    fontSize: fontSizes[6],
    fontWeight: bold,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlignment: 'baseline',
    width: props.circle ? scale[2] : null,
    height: scale[2],
    ...pad,
    paddingLeft: xpad,
    paddingRight: xpad,
    overflow: 'hidden',
    borderRadius,
    color: colors.white,
    backgroundColor: colors.default,
    ...style.fill,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Badge._name = 'Badge'

export default withRebass(Badge)


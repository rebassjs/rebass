
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const Bar = ({
  value = 0,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, bold, colors } = theme
  const cx = classnames('Bar', className)

  const {
    backgroundColor = style.fill.backgroundColor || colors.muted,
    ...rootStyle
  } = style

  const p = `${value * 100}%`
  const backgroundImage = `linear-gradient(90deg, ${backgroundColor} ${p}%, transparent ${p})`

  const sx = {
    fontWeight: bold,
    padding: scale[1],
    backgroundSize: '100% 100%',
    backgroundImage,
    ...rootStyle
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Bar._name = 'Bar'

export default withRebass(Bar)


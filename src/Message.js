
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/** Component for displaying flash and error messages */

const Message = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { bold, scale, colors, borderRadius } = theme

  const cx = classnames('Message', className)

  const sx = {
    fontWeight: bold,
    display: 'flex',
    alignItems: 'center',
    padding: scale[2],
    marginBottom: scale[2],
    borderRadius,
    color: colors.white,
    backgroundColor: colors.primary,
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

Message._name = 'Message'

export default withRebass(Message)


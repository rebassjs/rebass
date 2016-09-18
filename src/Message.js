
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
    backgroundColor: colors.default,
    color: colors.white,
    borderRadius,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Message.defaultProps = {
  inverted: true
}

export default withRebass(Message)


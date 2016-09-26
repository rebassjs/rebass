
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/** Component for displaying flash and error messages */

const Message = ({
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { bold, scale, colors, borderRadius } = theme

  const cx = classnames('Message', className)

  const colorStyles = getColorTheme(colors)(colorTheme, true)

  const sx = {
    fontWeight: bold,
    display: 'flex',
    alignItems: 'center',
    padding: scale[2],
    marginBottom: scale[2],
    borderRadius,
    ...colorStyles,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

export default withRebass(Message)


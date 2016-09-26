
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors } = theme

  const cx = classnames('Toolbar', className)

  const colorStyles = getColorTheme(colors)(colorTheme, true)

  const sx = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 48,
    paddingLeft: scale[1],
    paddingRight: scale[1],
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

export default withRebass(Toolbar)


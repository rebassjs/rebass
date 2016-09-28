
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Menu component for navigation links and actions
 */

const Menu = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderColor, borderRadius } = theme

  const cx = classnames('Menu', className)

  const sx = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 128,
    marginBottom: scale[2],
    overflow: 'hidden',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    color: colors.black,
    backgroundColor: colors.white,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Menu._name = 'Menu'

export default withRebass(Menu)


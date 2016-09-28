
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Toolbar component that vertically centers children with display flex
 */

const Toolbar = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors } = theme

  const cx = classnames('Toolbar', className)

  const sx = {
    display: 'flex',
    alignItems: 'center',
    minHeight: 48,
    paddingLeft: scale[1],
    paddingRight: scale[1],
    color: colors.white,
    backgroundColor: colors.black,
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

Toolbar._name = 'Toolbar'

export default withRebass(Toolbar)


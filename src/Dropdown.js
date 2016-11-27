
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Position relative container for positioning DropdownMenu component
 */

const Dropdown = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Dropdown', className)

  const sx = {
    position: 'relative',
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Dropdown._name = 'Dropdown'

export default withRebass(Dropdown)


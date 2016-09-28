
import React from 'react'
import withRebass from './withRebass'
import classnames from 'classnames'

/**
 * Box component for adding box shadows
 */

const BoxShadow = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { boxShadow, borderRadius } = theme

  const cx = classnames('BoxShadow', className)

  const sx = {
    boxShadow,
    borderRadius,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx}
    />
  )
}

BoxShadow._name = 'BoxShadow'

export default withRebass(BoxShadow)


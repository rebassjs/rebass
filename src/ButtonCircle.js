
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Button from './Button'

/**
 * Deprecated in favor of Button `circle` prop
 */

const ButtonCircle = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('ButtonCircle', className)

  return (
    <Button
      {...props}
      circle
      className={cx}
      style={style} />
  )
}

ButtonCircle._name = 'ButtonCircle'

export default withRebass(ButtonCircle)



import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Unstyled display block link
 */

const LinkBlock = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('LinkBlock', className)

  const sx = {
    display: 'block',
    textDecoration: 'none',
    color: 'inherit',
    ...style
  }

  return (
    <a
      {...props}
      className={cx}
      style={sx} />
  )
}

LinkBlock._name = 'LinkBlock'

export default withRebass(LinkBlock)


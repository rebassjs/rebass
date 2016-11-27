
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const Circle = ({
  size = 32,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Circle', className)

  const sx = {
    display: 'inline-block',
    width: size,
    height: size,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: size + 'px',
    overflow: 'hidden',
    border: '1px solid',
    borderRadius: 99999,
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

Circle._name = 'Circle'

export default withRebass(Circle)


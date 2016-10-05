
// Fixed aspect ratio component

import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const AspectRatio = ({
  ratio = 4 / 3,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('AspectRatio', className)

  const sx = {
    width: '100%',
    height: 0,
    paddingBottom: `${ratio * 100}%`,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

AspectRatio._name = 'AspectRatio'

export default withRebass(AspectRatio)


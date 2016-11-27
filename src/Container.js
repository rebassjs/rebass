
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Div with max-width and margin auto for centering content
 */

const Container = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('Container', className)

  const sx = {
    maxWidth: 1024,
    paddingLeft: scale[2],
    paddingRight: scale[2],
    margin: 'auto',
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Container._name = 'Container'

export default withRebass(Container)


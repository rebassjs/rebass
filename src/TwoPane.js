
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const TwoPane = ({
  left,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {

  const cx = classnames('TwoPane', className)

  const sx = {
    root: {
      minHeight: '100vh',
      ...style
    },
    left: {
      width: 256,
      overflowY: 'auto',
    },
    right: {},
  }

  return (
    <div style={sx.root}>
      <div style={sx.left}>
        {left}
      </div>
      <div style={sx.right}>
        {children}
      </div>
    </div>
  )
}

TwoPane._name = 'TwoPane'

export default TwoPane


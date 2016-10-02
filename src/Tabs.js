
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const Tabs = ({
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { borderColor } = theme

  const cx = classnames('Tabs', className)

  const sx = {
    display: 'flex',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: borderColor,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx}>
      {children}
    </div>
  )
}

Tabs._name = 'Tabs'

export default withRebass(Tabs)


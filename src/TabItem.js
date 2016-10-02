
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

const TabItem = ({
  is = 'a',
  active,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, fontSizes, bold, colors } = theme
  const Comp = is

  const cx = classnames('TabItem', className)

  const sx = {
    fontWeight: bold,
    fontSize: fontSizes[5],
    paddingTop: scale[1],
    paddingBottom: scale[1],
    marginRight: scale[2],
    textDecoration: 'none',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',
    cursor: 'pointer',
    ...(active ? {
      color: colors.primary,
      borderBottomColor: colors.primary
    } : {}),
    ...style
  }

  return (
    <Comp
      {...props}
      className={cx}
      style={sx} />
  )
}

TabItem._name = 'TabItem'

export default withRebass(TabItem)



import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { bold, scale, colors, borderRadius } = theme

  const cx = classnames('PanelHeader', className)

  const sx = {
    display: 'flex',
    alignItems: 'center',
    fontWeight: bold,
    marginTop: -scale[2] - 1,
    marginRight: -scale[2] - 1,
    marginLeft: -scale[2] - 1,
    marginBottom: scale[2],
    padding: scale[2],
    borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

export default withRebass(PanelHeader)


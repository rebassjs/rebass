
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { bold, scale, colors, borderRadius } = theme

  const cx = classnames('PanelHeader', className)

  const colorStyles = getColorTheme(colors)(colorTheme, true)

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
    ...colorStyles,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

PanelHeader.defaultProps = {
  colorTheme: 'default'
}

export default withRebass(PanelHeader)


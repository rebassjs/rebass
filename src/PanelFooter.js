
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

const PanelFooter = ({
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderRadius, fontSizes } = theme

  const cx = classnames('PanelFooter', className)

  const colorStyles = getColorTheme(colors)(colorTheme)

  const sx = {
    fontSize: fontSizes[6],
    display: 'flex',
    alignItems: 'center',
    marginTop: scale[2],
    marginRight: -scale[2],
    marginBottom: -scale[2],
    marginLeft: -scale[2],
    padding: scale[2],
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
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

PanelFooter.defaultProps = {
  colorTheme: 'default'
}

export default withRebass(PanelFooter)


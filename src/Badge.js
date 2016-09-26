
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import getColorTheme from './util/get-color-theme'

/** Component for displaying small status indicators */

const Badge = ({
  colorTheme,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const {
    fontSizes,
    bold,
    scale,
    colors,
    borderRadius
  } = theme

  const cx = classnames('Badge', className)

  const colorStyles = getColorTheme(colors)(colorTheme, true)

  const sx = {
    fontSize: fontSizes[6],
    fontWeight: bold,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlignment: 'baseline',
    width: props.circle ? scale[2] : null,
    height: scale[2],
    paddingTop: scale[1],
    paddingBottom: scale[1],
    paddingLeft: props.circle ? 0 : scale[1],
    paddingRight: props.circle ? 0 : scale[1],
    overflow: 'hidden',
    ...colorStyles,
    borderRadius,
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

export default withRebass(Badge)


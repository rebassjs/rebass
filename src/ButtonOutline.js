
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Button from './Button'
import getColorTheme from './util/get-color-theme'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  // to do: active (filled) style
  active,
  colorTheme = 'primary',
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { colors, borderRadius } = theme
  const cx = classnames('ButtonOutline', className)
  const {
    color,
    backgroundColor,
    borderColor
  } = getColorTheme(colors)(colorTheme, active)

  const sx = {
    color,
    backgroundColor: backgroundColor || 'transparent',
    boxShadow: `inset 0 0 0 1px ${borderColor || color}`,
    borderRadius,
    ...style
  }

  return (
    <Button
      {...props}
      className={cx}
      style={sx} />
  )
}

ButtonOutline.propTypes = {
  /** Pass an href prop to make the ButtonOutline an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Creates a larger button */
  big: React.PropTypes.bool
}

export default withRebass(ButtonOutline)


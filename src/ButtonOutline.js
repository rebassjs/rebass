
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  // to do: active (filled) style
  active,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { colors, borderRadius } = theme
  const cx = classnames('ButtonOutline', className)

  const sx = {
    color: colors.primary,
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 1px',
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


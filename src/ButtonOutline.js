
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  active,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { colors, borderRadius } = theme
  const cx = classnames('ButtonOutline', className)

  const {
    backgroundColor = colors.primary
  } = style.fill

  const sx = {
    backgroundColor: backgroundColor || 'transparent',
    boxShadow: `inset 0 0 0 1px ${backgroundColor}`,
    borderRadius,
    ...(active ? style.fill : {
      color: backgroundColor,
      backgroundColor: 'transparent'
    }),
    ...style
  }

  return (
    <Button
      {...props}
      circle={theme.circle}
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

ButtonOutline._name = 'ButtonOutline'

export default withRebass(ButtonOutline)


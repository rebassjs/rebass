
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
  big,
  size,
  baseRef,
  style,
  className,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold, scale, colors, borderRadius } = theme

  const Comp = href ? 'a' : 'button'

  const minHeight = size || scale[3]
  const width = theme.circle ? minHeight : null
  const padx = theme.circle ? 0 : scale[2]
  const pady = big ? scale[2] : scale[1]

  const cx = classnames('Button', className)

  const fillStyles = style.fill

  const sx = {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: `${scale[2]}px`,
    minHeight,
    width,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: pady,
    paddingBottom: pady,
    paddingLeft: padx,
    paddingRight: padx,
    cursor: 'pointer',
    border: 0,
    borderRadius,
    color: colors.white,
    backgroundColor: colors.primary,
    ...fillStyles,
    ...style
  }

  return (
    <Comp
      {...props}
      ref={baseRef}
      href={href}
      className={cx}
      style={sx} />
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Creates a larger button by adding padding */
  big: React.PropTypes.bool,
  /** Sets height of button in pixels */
  size: React.PropTypes.number,
  /** Creates a circle shaped button */
  circle: React.PropTypes.bool,
  /** Adds a ref to the button element */
  baseRef: React.PropTypes.func
}

Button._name = 'Button'

export default withRebass(Button)


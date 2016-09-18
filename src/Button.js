
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
  big,
  style,
  className,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, bold, scale, colors, borderRadius } = theme

  const Comp = href ? 'a' : 'button'

  const minHeight = scale[3]

  const cx = classnames('Button', className)

  const sx = {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: `${scale[2]}px`,
    minHeight,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: big ? scale[2] : scale[1],
    paddingBottom: big ? scale[2] : scale[1],
    paddingLeft: scale[2],
    paddingRight: scale[2],
    cursor: 'pointer',
    color: colors.white,
    backgroundColor: colors.primary,
    border: 0,
    borderRadius,
    ...style
  }

  return (
    <Comp
      {...props}
      href={href}
      className={cx}
      style={sx} />
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Creates a larger button */
  big: React.PropTypes.bool
}

Button.defaultProps = {
  inverted: true
}

export default withRebass(Button)


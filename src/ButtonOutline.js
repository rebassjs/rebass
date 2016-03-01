
import React from 'react'
import theme from './theme'
import radii from './util/radii'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  href,
  big,
  color,
  children,
  style,
  className,
  ...props
}, { rebass }) => {

  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.ButtonOutline : {}
  const { fontSizes, bold, scale, colors, borderRadius } = config

  const Component = href ? 'a' : 'button'

  color = colors[color] || color || colors.primary

  const sx = {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    fontWeight: bold,
    lineHeight: `${scale[2]}px`,
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    padding: big ? scale[2] : `${scale[1]}px ${scale[2]}px`,
    cursor: 'pointer',
    border: 0,
    color,
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 1px',
    ...customStyle,
    ...radii(props, borderRadius),
    ...style
  }

  return (
    <Component {...props}
      href={href}
      className='ButtonOutline'
      style={sx}>
      {children}
    </Component>
  )
}

ButtonOutline.propTypes = {
  /** Pass an href prop to make the ButtonOutline an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Text color */
  color: React.PropTypes.string,
  /** Controls the border radius for creating button groups */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Creates a pill style button */
  pill: React.PropTypes.bool,
  /** Creates a larger button */
  big: React.PropTypes.bool
}

ButtonOutline.defaultProps = {
  rounded: true
}

ButtonOutline.contextTypes = {
  rebass: React.PropTypes.object
}

export default ButtonOutline


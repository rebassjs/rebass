
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
  big,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { fontSizes, bold, scale } = config

  const Component = href ? 'a' : 'button'

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
    border: 0
  }

  return (
    <Base
      {...props}
      tagName={Component}
      className='Button'
      href={href}
      baseStyle={sx}/>
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Button color - can either be a key from the theme colors object or any color value */
  color: React.PropTypes.string,
  /** Background color - can either be a key from the theme colors object or any color value */
  backgroundColor: React.PropTypes.string,
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

Button.defaultProps = {
  color: 'white',
  backgroundColor: 'primary',
  rounded: true
}

Button.contextTypes = {
  rebass: React.PropTypes.object
}

export default Button


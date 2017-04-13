
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
  big,
  baseStyle,
  _className,
  ...props
}, { rebass }) => {
  const { fontSizes, bold, scale } = { ...config, ...rebass }

  const Component = href ? 'a' : 'button'

  // scale[3] also used in form elements
  const minHeight = scale[3]

  const sx = {
    ...baseStyle,
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
    border: 0
  }

  return (
    <Base
      {...props}
      tagName={Component}
      className={_className || 'Button'}
      href={href}
      baseStyle={sx} />
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button an <a> tag instead of a <button> */
  href: PropTypes.string,
  /** Button color - can either be a key from the config colors object or any color value */
  color: PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: PropTypes.string,
  /** Controls the border radius for creating button groups */
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ]),
  /** Creates a pill style button */
  pill: PropTypes.bool,
  /** Creates a larger button */
  big: PropTypes.bool,
  /** Sets color from config */
  theme: PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Button.defaultProps = {
  color: 'white',
  backgroundColor: 'primary',
  inverted: true,
  rounded: true
}

Button.contextTypes = {
  rebass: PropTypes.object
}

export default Button


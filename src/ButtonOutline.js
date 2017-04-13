
import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button'

/**
 * A general purpose outline style button element with customizable colors
 */

const ButtonOutline = ({
  style,
  ...props
}, { rebass }) => {
  const sx = {
    backgroundColor: 'transparent',
    ...style
  }

  return (
    <Button
      {...props}
      _className='ButtonOutline'
      baseStyle={{
        boxShadow: 'inset 0 0 0 1px'
      }}
      style={sx} />
  )
}

ButtonOutline.propTypes = {
  /** Pass an href prop to make the ButtonOutline an <a> tag instead of a <button> */
  href: PropTypes.string,
  /** Text color */
  color: PropTypes.string,
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
  big: PropTypes.bool
}

ButtonOutline.defaultProps = {
  color: 'primary',
  inverted: false,
  rounded: true
}

ButtonOutline.contextTypes = {
  rebass: PropTypes.object
}

export default ButtonOutline


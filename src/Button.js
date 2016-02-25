
import React from 'react'
import config from './config'

/** A general purpose button element with customizable colors */

const Button = ({
  big,
  left,
  middle,
  right,
  color,
  bg,
  children,
  style,
  className,
  ...props
}) => {

  const { scale, colors, button, borderRadius } = config

  let radius = borderRadius
  if (middle) {
    radius = 0
  } else if (left) {
    radius = `${borderRadius}px 0 0 ${borderRadius}px`
  } else if (right) {
    radius = `0 ${borderRadius}px ${borderRadius}px 0`
  }

  return (
    <button {...props}
      className='Button'
      style={{
        ...style,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'bold',
        display: 'inline-block',
        margin: 0,
        padding: big ? scale[2] : scale[1],
        border: 0,
        borderRadius: radius,
        // color: 'white',
        // backgroundColor: color || button.bg
      }}>
      {children}
    </button>
  )
}

Button.propTypes = {
  /** Button color */
  color: React.PropTypes.string,
  /** Button background color */
  bg: React.PropTypes.string,
  /** For button groups when button is on the left */
  left: React.PropTypes.bool,
  /** For button groups when button is in the middle */
  middle: React.PropTypes.bool,
  /** For button groups when button is on the right */
  right: React.PropTypes.bool,
  /** Creates a larger button */
  big: React.PropTypes.bool,
}

export default Button


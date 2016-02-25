
import React from 'react'
import theme from './theme'

/** A general purpose button element with customizable colors */

const Button = ({
  big,
  left,
  middle,
  right,
  color,
  backgroundColor,
  children,
  style,
  className,
  ...props
}, context) => {

  const buttonConfig = Object.assign({}, theme.button, context.rebass.Button)
  const config = Object.assign({}, theme, context.rebass)
  const { scale, colors, borderRadius } = config

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
        cursor: 'pointer',
        border: 0,
        borderRadius: radius,
        color: color || buttonConfig.color,
        backgroundColor: backgroundColor || buttonConfig.backgroundColor
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

Button.contextTypes = {
  rebass: React.PropTypes.object
}

export default Button



import React from 'react'
import theme from './theme'

/**
 * A general purpose button element with customizable colors
 */

const Button = ({
  href,
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
}, { rebass }) => {

  const config = { ...theme, ...rebass }
  const buttonConfig = { ...theme.Button, ...rebass.Button }
  const { scale, colors, borderRadius } = config

  const Component = href ? 'a' : 'button'

  let radius = borderRadius
  if (middle) {
    radius = 0
  } else if (left) {
    radius = `${borderRadius}px 0 0 ${borderRadius}px`
  } else if (right) {
    radius = `0 ${borderRadius}px ${borderRadius}px 0`
  }

  return (
    <Component {...props}
      className='Button'
      style={{
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
        backgroundColor: backgroundColor || buttonConfig.backgroundColor,
        ...style,
      }}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  /** Pass an href prop to make the Button and <a> tag instead of a Button*/
  href: React.PropTypes.string,
  /** Button color */
  color: React.PropTypes.string,
  /** Button background color */
  backgroundColor: React.PropTypes.string,
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



import React from 'react'
import config from './config'

/*
 * A general purpose button element with customizable colors
 */

const Button = ({ children, color, left, middle, right, big, ...props }) => (
  <button {...props}
    className={
      [
        'bold inline-block m0 border-none',
        big ? 'h4 p2' : 'h5 p1',
        !left && !middle && !right && 'rounded',
        left ? 'rounded-left' : null,
        middle ? 'not-rounded' : null,
        right ? 'rounded-right' : null,
      ].join(' ')
    }
    style={{
      color: 'white',
      backgroundColor: color || config.buttonColor
    }}>
    {children}
  </button>
)

Button.propTypes = {
  /**
   * Button background color
   */
  color: React.PropTypes.string,
  /**
   * For button groups when button is on the left
   */
  left: React.PropTypes.bool,
  /**
   * For button groups when button is in the middle
   */
  middle: React.PropTypes.bool,
  /**
   * For button groups when button is on the right
   */
  right: React.PropTypes.bool,
  /**
   * Creates a larger button
   */
  big: React.PropTypes.bool,
}

export default Button



import React from 'react'
import Button from './Button'
import theme from './theme'

/**
 * A circular button suited for use with icons
 */

const ButtonCircle = ({
  size,
  children,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors } = config

  const sx = {
    root: {
      fontSize: 'inherit',
      boxSizing: 'border-box',
      width: size || scale[3],
      height: size || scale[3],
      padding: 0,
      borderRadius: 99999,
      ...style
    },
    inner: {
      display: 'flex',
      width: size || scale[3],
      height: size || scale[3],
      alignItems: 'center',
      justifyContent: 'center'
    }
  }

  return (
    <Button
      {...props}
      cx='ButtonCircle'
      style={sx.root}>
      <div style={sx.inner}>
        {children}
      </div>
    </Button>
  )
}

ButtonCircle.propTypes = {
  /** Pass an href prop to make the ButtonCircle an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Text color - can either be a key from the theme colors object or any color value */
  color: React.PropTypes.string,
  /** Background color - can either be a key from the theme colors object or any color value */
  backgroundColor: React.PropTypes.string,
  /** Sets width and height of button */
  size: React.PropTypes.number
}

ButtonCircle.contextTypes = {
  rebass: React.PropTypes.object
}

export default ButtonCircle



import React from 'react'
import theme from './theme'

/**
 * A circular button suited for use with icons
 */

const ButtonCircle = ({
  href,
  size,
  color,
  backgroundColor,
  children,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.ButtonCircle : {}
  const { scale, colors } = config
  const Component = href ? 'a' : 'button'

  color  = colors[color] || color || colors.white
  backgroundColor  = colors[backgroundColor] || backgroundColor || colors.primary

  const sx = {
    root: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: `${scale[2]}px`,
      textDecoration: 'none',
      boxSizing: 'border-box',
      display: 'inline-block',
      width: size || scale[3],
      height: size || scale[3],
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      color,
      backgroundColor,
      border: 0,
      borderRadius: 99999,
      ...customStyle,
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
    <Component
      {...props}
      className='ButtonCircle'
      style={sx.root}>
      <div style={sx.inner}>
        {children}
      </div>
    </Component>
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


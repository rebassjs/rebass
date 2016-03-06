
import React from 'react'
import Button from './Button'
import config from './config'

/**
 * A circular button suited for use with icons
 */

const ButtonCircle = ({
  size,
  children,
  style,
  ...props
}, { rebass }) => {
  const { scale } = { ...config, ...rebass }

  const sx = {
    root: {
      fontSize: 'inherit',
      width: size || scale[3],
      height: size || scale[3],
      padding: 0,
      borderRadius: 99999,
      ...style
    },
    inner: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center'
    }
  }

  return (
    <Button
      {...props}
      _className='ButtonCircle'
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
  /** Text color - can either be a key from the config colors object or any color value */
  color: React.PropTypes.string,
  /** Background color - can either be a key from the config colors object or any color value */
  backgroundColor: React.PropTypes.string,
  /** Sets width and height of button */
  size: React.PropTypes.number
}

ButtonCircle.contextTypes = {
  rebass: React.PropTypes.object
}

export default ButtonCircle


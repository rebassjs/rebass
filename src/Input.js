
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Input element with label
 */

const Input = ({ label, name, type, hideLabel, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Input : {}
  const { scale, borderRadius, borderColor } = config

  const { margin, ...otherStyle } = { ...customStyle, ...style }

  const sx = {
    root: {
      margin
    },
    input: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: scale[3],
      paddingLeft: scale[1],
      paddingRight: scale[1],
      marginBottom: scale[2],
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, .25)',
      borderRadius,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor,
      ...otherStyle
    }
  }

  return (
    <div className='Input'
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type={type}
        name={name}
        style={sx.input} />
    </div>
  )
}

Input.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Form element type */
  type: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Input.defaultProps = {
  type: 'text'
}

Input.contextTypes = {
  rebass: React.PropTypes.object
}

export default Input


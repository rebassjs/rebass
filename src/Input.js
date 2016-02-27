
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Input element with label
 */

const Input = ({ label, name, type, hideLabel, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, borderColor } = config

  return (
    <div className='Input' style={style}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type={type}
        name={name}
        style={{
          fontFamily: 'inherit',
          fontSize: 'inherit',
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          height: 32,
          paddingLeft: 8,
          paddingRight: 8,
          marginBottom: scale[2],
          borderRadius: 2,
          borderWidth: 1,
          borderColor,
          borderStyle: 'solid'
        }} />
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


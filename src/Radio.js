
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Radio input with label
 */

const Radio = ({ label, name, style, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Radio : {}
  const { scale } = config

  const sx = {
    root: {
      ...customStyle,
      ...style
    },
    label: {
      display: 'flex',
      alignItems: 'baseline',
      cursor: 'pointer'
    },
    input: {
      marginRight: scale[1]
    }
  }

  return (
    <div className='Radio'
      style={sx.root}>
      <Label htmlFor={name}
        style={sx.label}>
        <input
          {...props}
          name={name}
          type='radio'
          style={sx.input} />
        {label}
      </Label>
    </div>
  )
}

Radio.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

Radio.contextTypes = {
  rebass: React.PropTypes.object
}

export default Radio


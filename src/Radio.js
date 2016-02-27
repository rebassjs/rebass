
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Radio input with label
 */

const Radio = ({ label, name, style, children, ...props }, { rebass }) => {
  const radioConfig = { ...theme.Radio, ...(rebass ? rebass.Radio : {}) }
  return (
    <div className='Radio' style={style}>
      <Label htmlFor={name}
        style={{
          display: 'flex',
          alignItems: 'baseline'
        }}>
        <input
          {...props}
          name={name}
          type='radio'
          style={{
            marginRight: 8
          }} />
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


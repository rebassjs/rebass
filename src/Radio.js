
import React from 'react'
import Label from './Label'

/**
 * Radio input with label
 */

const Radio = ({ label, name, style, children, ...props }) => (
  <div className='Radio'>
    <Label htmlFor={name}
      style={{
        display: 'flex',
        alignItems: 'baseline'
      }}>
      <input
        {...props}
        type='radio'
        style={{
          ...style,
          marginRight: 8
        }} />
      {label}
    </Label>
  </div>
)

Radio.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

export default Radio


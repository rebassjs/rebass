
import React from 'react'
import Label from './Label'

/**
 * Input element with label
 */

const Input = ({ label, name, type, children, style, ...props }) => (
  <div className='Input'>
    <Label htmlFor={name} children={label} />
    <input
      {...props}
      type={type}
      name={name}
      style={{
        ...style,
        fontFamily: 'inherit',
        fontSize: 'inherit',
        boxSizing: 'border-box',
        display: 'block',
        width: '100%',
        height: 32,
        padding: 8,
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid'
      }} />
  </div>
)

Input.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Form element type */
  type: React.PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input



import React from 'react'
import Label from './Label'

/**
 * Select form control with label
 */

const Select = ({ label, name, options, children, style, ...props }) => (
  <div className='Select'>
    <Label htmlFor={name} children={label} />
    <select
      {...props}
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
        backgroundColor: 'transparent',
        backgroundImage: 'none',
        borderRadius: 2,
        borderWidth: 1,
        borderStyle: 'solid'
      }}>
      {options.map((option, i) => (
        <option key={i} {...option} />
      ))}
    </select>
  </div>
)

Select.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Options for select */
  options: React.PropTypes.array.isRequired
}

Select.defaultProps = {
  options: []
}

export default Select


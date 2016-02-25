
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Select form control with label
 */

const Select = ({ label, name, options, children, style, ...props }, context) => {
  const config = Object.assign({}, theme, context.rebass)

  return (
    <div className='Select' style={style}>
      <Label htmlFor={name} children={label} />
      <select
        {...props}
        name={name}
        style={{
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
          borderStyle: 'solid',
          borderColor: config.borderColor
        }}>
        {options.map((option, i) => (
          <option key={i} {...option} />
        ))}
      </select>
    </div>
  )
}

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

Select.contextTypes = {
  rebass: React.PropTypes.object
}

export default Select


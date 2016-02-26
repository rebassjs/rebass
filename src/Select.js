
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Select form control with label
 */

const Select = ({ label, name, options, hideLabel, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const selectConfig = { ...theme.Select, ...(rebass ? rebass.Select : {}) }
  const { borderColor } = config

  return (
    <div className='Select' style={style}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
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
          borderColor
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
  options: React.PropTypes.array.isRequired,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Select.defaultProps = {
  options: []
}

Select.contextTypes = {
  rebass: React.PropTypes.object
}

export default Select


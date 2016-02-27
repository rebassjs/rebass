
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Select form control with label
 */

const Select = ({ label, name, options, hideLabel, children, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Select : {}
  const { scale, borderColor } = config

  const { margin, ...otherStyle } = { ...customStyle, ...style }

  const sx = {
    root: {
      margin
    },
    select: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: 32,
      padding: 8,
      marginBottom: scale[2],
      color: 'inherit',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor,
      ...otherStyle
    }
  }

  return (
    <div className='Select'
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <select
        {...props}
        name={name}
        style={sx.select}>
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


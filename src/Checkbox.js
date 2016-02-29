
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Checkbox input with label
 */

const Checkbox = ({ label, name, style, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Checkbox : {}
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
    <div className='Checkbox' style={sx.root}>
      <Label
        style={sx.label}>
        <input
          {...props}
          type='checkbox'
          style={sx.input} />
        {label}
      </Label>
    </div>
  )
}

Checkbox.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

export default Checkbox


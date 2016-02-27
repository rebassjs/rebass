
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Textarea form element with label
 */

const Textarea = ({ label, name, style, hideLabel, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const textareaStyle = { ...theme.Textarea, ...(rebass ? rebass.Textarea : {}) }
  const { scale, borderColor } = config

  return (
    <div className='Textarea' style={style}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <textarea
        {...props}
        name={name}
        style={{
          fontFamily: 'inherit',
          fontSize: 'inherit',
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          padding: 8,
          marginBottom: scale[2],
          borderRadius: 2,
          borderWidth: 1,
          borderStyles: 'solid',
          borderColor,
          ...textareaStyle
        }} />
    </div>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Textarea.contextTypes = {
  rebass: React.PropTypes.object
}

export default Textarea


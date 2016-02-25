
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Textarea form element with label
 */

const Textarea = ({ label, name, style, children, ...props }, context) => {
  const config = Object.assign({}, theme, context.rebass)
  return (
    <div className='Textarea'>
      <Label htmlFor={name} children={label} />
      <textarea
        {...props}
        name={name}
        style={{
          ...style,
          fontFamily: 'inherit',
          fontSize: 'inherit',
          boxSizing: 'border-box',
          display: 'block',
          width: '100%',
          padding: 8,
          borderRadius: 2,
          borderWidth: 1,
          borderStyles: 'solid',
          borderColor: config.borderColor
        }} />
    </div>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
}

Textarea.contextTypes = {
  rebass: React.PropTypes.object
}

export default Textarea


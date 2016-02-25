
import React from 'react'
import Label from './Label'

/**
 * Textarea form element with label
 */

const Textarea = ({ label, name, style, children, ...props }) => (
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
        borderStyles: 'solid'
      }} />
  </div>
)

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
}

export default Textarea


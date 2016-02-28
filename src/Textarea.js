
import React from 'react'
import Label from './Label'
import theme from './theme'

/**
 * Textarea form element with label
 */

const Textarea = ({
  label,
  name,
  style,
  hideLabel,
  m0,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Textarea : {}
  const { scale, borderColor } = config

  const { margin, ...otherStyle } = { ...customStyle, ...style }

  const sx = {
    root: {
      margin
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      padding: 8,
      marginBottom: m0 ? 0 : scale[2],
      borderRadius: 2,
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor,
      ...otherStyle
    }
  }

  return (
    <div className='Textarea'
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <textarea
        {...props}
        name={name}
        style={sx.textarea} />
    </div>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Removes default margin */
  m0: React.PropTypes.bool
}

Textarea.contextTypes = {
  rebass: React.PropTypes.object
}

export default Textarea


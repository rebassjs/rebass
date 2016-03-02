
import React from 'react'
import classnames from 'classnames'
import Label from './Label'
import Text from './Text'
import theme from './theme'
import margins from './util/margins'

/**
 * Textarea form element with label
 */

const Textarea = ({
  label,
  name,
  style,
  message,
  hideLabel,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Textarea : {}
  const { scale, colors, borderColor } = config

  const otherStyle = { ...customStyle, ...style }

  const invalid = props['aria-invalid'] || props.invalid

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...margins(props, scale)
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      margin: 0,
      padding: 8,
      borderRadius: 2,
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor,
      ...otherStyle
    }
  }

  const cx = classnames('Textarea', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly,
  })

  return (
    <div className={cx}
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <textarea
        {...props}
        name={name}
        style={sx.textarea} />
      {message && <Text small children={message} />}
    </div>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a helper or error message below the textarea */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Textarea.contextTypes = {
  rebass: React.PropTypes.object
}

export default Textarea


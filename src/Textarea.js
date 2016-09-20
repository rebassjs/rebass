
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'

/**
 * Textarea form element with label
 */

const Textarea = ({
  label,
  name,
  message,
  hideLabel,
  baseRef,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderColor, borderRadius } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const cx = classnames('Textarea', className, {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...style
    },
    label: {
      ...subComponentStyles.label
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      padding: scale[1],
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor,
      borderRadius,
      ...subComponentStyles.textarea
    },
    message: {
      ...subComponentStyles.message
    }
  }

  return (
    <div
      className={cx}
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        style={sx.label}
        children={label} />
      <textarea
        {...props}
        ref={baseRef}
        name={name}
        style={sx.textarea} />
      {message && (
        <Text
          small
          style={sx.message}
          children={message} />
      )}
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
  hideLabel: React.PropTypes.bool,
  /** Adds a ref to the textarea element */
  baseRef: React.PropTypes.func
}

export default withRebass(Textarea)


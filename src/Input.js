
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'

/**
 * Input element with label with support for aria-invalid, disabled, and readOnly HTML attributes
 */

const Input = ({
  label,
  name,
  type,
  message,
  hideLabel,
  children,
  autoOff,
  baseRef,
  ref,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors, borderColor } = theme

  const invalid = props.invalid || props['aria-invalid']

  const cx = classnames('Input', className, {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  const {
    borderRadius = theme.borderRadius,
    ...rootStyle
  } = style

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...rootStyle
    },
    label: {
      ...subComponentStyles.label
    },
    input: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: scale[3],
      margin: 0,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, .25)',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor,
      borderRadius,
      ...subComponentStyles.input
    },
    text: {
      ...subComponentStyles.text
    }
  }

  const autoProps = autoOff ? {
    autoComplete: 'off',
    autoCorrect: 'off',
    autoCapitalize: 'off',
    spellCheck: 'off'
  } : {}

  return (
    <div
      className={cx}
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        style={sx.label}
        children={label} />
      <input
        {...props}
        {...autoProps}
        ref={baseRef}
        type={type}
        name={name}
        style={sx.input} />
      {message && (
        <Text
          small
          style={sx.text}
          children={message} />
      )}
    </div>
  )
}

Input.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Form element type */
  type: React.PropTypes.string,
  /** Adds a helper or error message below the input */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Disables autocomplete, autocorrect, autocapitalize, and spellcheck props */
  autoOff: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Input.defaultProps = {
  type: 'text'
}

export default withRebass(Input)


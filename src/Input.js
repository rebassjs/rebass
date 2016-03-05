
import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import Text from './Text'
import config from './config'

/**
 * Input element with label with support for aria-invalid, disabled, and readOnly HTML attributes
 */

const Input = ({
  label,
  name,
  type,
  message,
  hideLabel,
  rounded,
  children,
  ...props
}, { rebass }) => {
  const { scale, colors, borderRadius, borderColor } = { ...config, ...rebass }

  const radii = {
    top: `${borderRadius}px ${borderRadius}px 0 0`,
    right: `0 ${borderRadius}px ${borderRadius}px 0`,
    bottom: `0 0 ${borderRadius}px ${borderRadius}px`,
    left: `${borderRadius}px 0 0 ${borderRadius}px`,
  }

  const invalid = props.invalid || props['aria-invalid']

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null
    },
    input: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: scale[3],
      paddingLeft: scale[1],
      paddingRight: scale[1],
      margin: 0,
      color: 'inherit',
      backgroundColor: 'rgba(255, 255, 255, .25)',
      borderRadius: rounded ? (radii[rounded] || borderRadius) : 0,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor
    }
  }

  const cx = classnames('Input', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly
  })

  return (
    <Base
      {...props}
      className={cx}
      baseStyle={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <input
        {...props}
        type={type}
        name={name}
        style={sx.input} />
      {message && <Text small children={message} />}
    </Base>
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
  /** Controls the border radius for creating grouped elements */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Input.defaultProps = {
  type: 'text',
  rounded: true
}

Input.contextTypes = {
  rebass: React.PropTypes.object
}

export default Input



import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Label from './Label'

/**
 * Styled custom radio input with label
 */

const Radio = ({
  label,
  name,
  checked,
  children,
  stacked,
  baseRef,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, colors } = theme

  const invalid = props['aria-invalid'] || props.invalid

  const cx = classnames('Radio', className, {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  const {
    backgroundColor,
    ...rootStyle
  } = style

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      flexDirection: stacked ? 'column' : null,
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer',
      ...rootStyle
    },
    input: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0,
      ...subComponentStyles.input
    },
    dot: {
      boxSizing: 'border-box',
      width: scale[2],
      height: scale[2],
      marginRight: stacked ? null : scale[1],
      marginBottom: stacked ? scale[1] : null,
      backgroundColor: checked ? colors.white : 'currentcolor',
      borderWidth: 5,
      borderStyle: checked ? 'solid' : null,
      borderColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      opacity: checked ? null : 1 / 4,
      transition: 'border .1s ease-out',
      color: backgroundColor || style.fill.backgroundColor,
      ...subComponentStyles.dot
    }
  }

  return (
    <Label
      className={cx}
      style={sx.root}>
      <input
        {...props}
        ref={baseRef}
        name={name}
        checked={checked}
        type='radio'
        style={sx.input} />
      <div
        className='Radio_dot'
        style={sx.dot} />
      {label}
    </Label>
  )
}

Radio.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Place label centered under the radio */
  stacked: React.PropTypes.bool,
  /** Adds a ref to the input element */
  baseRef: React.PropTypes.func
}

Radio._name = 'Radio'

export default withRebass(Radio)


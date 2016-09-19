
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
  inverted,
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

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer',
      ...style
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
      marginRight: scale[1],
      backgroundColor: checked ? colors.white : 'currentcolor',
      borderWidth: 5,
      borderStyle: checked ? 'solid' : null,
      borderColor: checked ? 'currentcolor' : null,
      borderRadius: 99999,
      opacity: checked ? null : 1 / 4,
      transition: 'border .1s ease-out',
      ...subComponentStyles.dot
    }
  }

  return (
    <Label
      className={cx}
      style={sx.root}>
      <input
        {...props}
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
  name: React.PropTypes.string.isRequired
}

export default withRebass(Radio)


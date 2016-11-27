
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Label from './Label'
import Text from './Text'
import Arrow from './Arrow'

/**
 * Select form control with label
 */

const Select = ({
  label,
  name,
  options,
  message,
  hideLabel,
  horizontal,
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

  const cx = classnames('Select', className, {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  const {
    color,
    backgroundColor,
    ...rootStyle
  } = style

  const sx = {
    root: {
      display: horizontal ? 'flex' : null,
      alignItems: horizontal ? 'baseline' : null,
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...rootStyle
    },
    select: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      paddingLeft: scale[1],
      paddingRight: scale[3],
      height: scale[3],
      color: color || 'inherit',
      backgroundColor: backgroundColor || 'transparent',
      backgroundImage: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor,
      borderRadius,
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      ...style.fill,
      ...subComponentStyles.select
    },
    label: {
      paddingRight: horizontal ? scale[1] : null,
      minWidth: horizontal ? 96 : null,
      ...subComponentStyles.label
    },
    wrapper: {
      position: 'relative',
      flex: horizontal ? '1 1 auto' : null,
      ...subComponentStyles.wrapper
    },
    arrow: {
      position: 'absolute',
      right: 0,
      top: 0,
      margin: scale[3] / 2,
      transform: 'translate(50%, -50%)',
      ...subComponentStyles.arrow
    },
    message: {
      paddingLeft: horizontal ? scale[1] : null,
      ...subComponentStyles.label
    }
  }

  const selectOptions = options.map((opt, i) => {
    return typeof opt === 'object'
      ? <option key={i} {...opt} />
      : <option key={i} children={opt} />
  })

  return (
    <div
      className={cx}
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        style={sx.label}
        children={label} />
      <div style={sx.wrapper}>
        <select
          {...props}
          ref={baseRef}
          name={name}
          style={sx.select}>
          {selectOptions}
        </select>
        <Arrow style={sx.arrow} />
      </div>
      {message && (
        <Text
          small
          style={sx.message}
          children={message} />
      )}
    </div>
  )
}

Select.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Options for select */
  options: React.PropTypes.array.isRequired,
  /** Adds a helper or error message below the select */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool,
  /** Displays label to the left */
  horizontal: React.PropTypes.bool,
  /** Adds a ref to the select element */
  baseRef: React.PropTypes.func
}

Select.defaultProps = {
  options: []
}

Select._name = 'Select'

export default withRebass(Select)


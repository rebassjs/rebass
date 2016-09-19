
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

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...style
    },
    select: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      paddingLeft: scale[1],
      paddingRight: scale[1],
      height: scale[3],
      color: 'inherit',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: invalid ? colors.error : borderColor,
      borderRadius,
      MozAppearance: 'none',
      WebkitAppearance: 'none',
      ...subComponentStyles.select
    },
    label: {
      ...subComponentStyles.label
    },
    wrapper: {
      position: 'relative',
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
      ...subComponentStyles.label
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
      <div style={sx.wrapper}>
        <select
          {...props}
          name={name}
          style={sx.select}>
          {options.map((option, i) => (
            <option key={i} {...option} />
          ))}
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
  hideLabel: React.PropTypes.bool
}

Select.defaultProps = {
  options: []
}

export default withRebass(Select)


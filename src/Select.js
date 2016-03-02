
import React from 'react'
import classnames from 'classnames'
import Label from './Label'
import Text from './Text'
import theme from './theme'
import margins from './util/margins'

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
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Select : {}
  const { scale, colors, borderColor } = config

  const otherStyle = { ...customStyle, ...style }

  const invalid = props['aria-invalid'] || props.invalid

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null,
      ...margins(props, scale)
    },
    select: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      height: 32,
      paddingLeft: 8,
      paddingRight: 8,
      margin: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      borderRadius: 2,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor,
      ...otherStyle
    }
  }

  const cx = classnames('Select', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly
  })

  return (
    <div className={cx}
      style={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <select
        {...props}
        name={name}
        style={sx.select}>
        {options.map((option, i) => (
          <option key={i} {...option} />
        ))}
      </select>
      {message && <Text small children={message} />}
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

Select.contextTypes = {
  rebass: React.PropTypes.object
}

export default Select



import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import theme from './theme'

/**
 * Checkbox input with label
 */

const Checkbox = ({
  label,
  name,
  children,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors } = config

  const invalid = props['aria-invalid'] || props.invalid

  const sx = {
    root: {
      color: invalid ? colors.error : null
    },
    label: {
      display: 'flex',
      alignItems: 'baseline',
      cursor: 'pointer'
    },
    input: {
      marginRight: scale[1]
    }
  }

  const cx = classnames('Checkbox', {
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
        style={sx.label}>
        <input
          {...props}
          name={name}
          type='checkbox'
          style={sx.input} />
        {label}
      </Label>
    </Base>
  )
}

Checkbox.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

export default Checkbox


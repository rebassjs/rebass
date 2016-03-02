
import React from 'react'
import classnames from 'classnames'
import Label from './Label'
import theme from './theme'

/**
 * Radio input with label
 */

const Radio = ({ label, name, style, children, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Radio : {}
  const { scale, colors } = config

  const invalid = props['aria-invalid'] || props.invalid

  const sx = {
    root: {
      color: invalid ? colors.error : null,
      ...customStyle,
      ...style
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

  const cx = classnames('Radio', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly
  })

  return (
    <div className={cx}
      style={sx.root}>
      <Label htmlFor={name}
        style={sx.label}>
        <input
          {...props}
          name={name}
          type='radio'
          style={sx.input} />
        {label}
      </Label>
    </div>
  )
}

Radio.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

Radio.contextTypes = {
  rebass: React.PropTypes.object
}

export default Radio


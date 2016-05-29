
import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import Text from './Text'
import Arrow from './Arrow'
import config from './config'

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
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  ...props
}, { rebass }) => {
  const { scale, colors, borderColor } = { ...config, ...rebass }

  const invalid = props['aria-invalid'] || props.invalid

  const rootProps = {
    style,
    m,
    mt,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py
  }

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null
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
      MozAppearance: 'none',
      WebkitAppearance: 'none'
    },
    wrapper: {
      position: 'relative'
    },
    arrow: {
      position: 'absolute',
      right: 0,
      top: 0,
      margin: scale[3] / 2,
      transform: 'translate(50%, -50%)'
    }
  }

  const cx = classnames('Select', {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  return (
    <Base
      {...rootProps}
      className={cx}
      baseStyle={sx.root}>
      <Label
        htmlFor={name}
        hide={hideLabel}
        children={label} />
      <div style={sx.wrapper}>
        <Base
          {...props}
          tagName='select'
          name={name}
          baseStyle={sx.select}>
          {options.map((option, i) => (
            <option key={i} {...option} />
          ))}
        </Base>
        <Arrow style={sx.arrow} />
      </div>
      {message && <Text small children={message} />}
    </Base>
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
  options: [],
  rounded: true
}

Select.contextTypes = {
  rebass: React.PropTypes.object
}

export default Select



import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import config from './config'

/**
 * Styled custom radio input with label
 */

const Radio = ({
  label,
  name,
  checked,
  children,
  backgroundColor,
  theme,
  circle,
  inverted,
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
  const { scale, colors } = { ...config, ...rebass }

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

  const dotProps = {
    backgroundColor,
    theme,
    circle,
    inverted
  }

  const sx = {
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: scale[1],
      color: invalid ? colors.error : null,
      cursor: 'pointer'
    },
    input: {
      position: 'absolute',
      zIndex: -1,
      opacity: 0
    },
    dot: {
      width: scale[2],
      height: scale[2],
      marginRight: scale[1],
      backgroundColor: checked ? colors.white : 'currentcolor',
      borderWidth: 5,
      borderStyle: checked ? 'solid' : null,
      borderColor: checked ? 'currentcolor' : null,
      opacity: checked ? null : 1 / 4,
      transition: 'border .1s ease-out'
    }
  }

  const cx = classnames('Radio', {
    'isInvalid': invalid,
    'isDisabled': props.disabled,
    'isReadonly': props.readOnly
  })

  return (
    <Base
      {...rootProps}
      tagName={Label}
      className={cx}
      baseStyle={sx.root}>
      <input
        {...props}
        name={name}
        checked={checked}
        type='radio'
        style={sx.input} />
      <Base
        {...dotProps}
        className='Radio_dot'
        baseStyle={sx.dot} />
      {label}
    </Base>
  )
}

Radio.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired
}

Radio.defaultProps = {
  circle: true
}

Radio.contextTypes = {
  rebass: React.PropTypes.object
}

export default Radio



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
  ...props
}, { rebass }) => {
  const { scale, colors } = { ...config, ...rebass }

  const invalid = props['aria-invalid'] || props.invalid

  const {
    backgroundColor,
    theme,
    circle,
    inverted,
    ...rootProps
  } = props

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
      opacity: 0,
    },
    dot: {
      width: scale[2],
      height: scale[2],
      backgroundColor: checked ? colors.white : 'currentcolor',
      borderWidth: 5,
      borderStyle: checked ? 'solid' : null,
      borderColor: checked ? 'currentcolor' : null,
      opacity: checked ? null : 1/4,
      transition: 'border .1s ease-out'
    }
  }

  const cx = classnames('Radio', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly
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
        {...props}
        className='Radio-dot'
        m={0}
        ml={0}
        mr={1}
        my={0}
        p={0}
        px={0}
        py={0}
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


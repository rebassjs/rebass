
import React from 'react'
import classnames from 'classnames'
import Base from './Base'
import Label from './Label'
import Text from './Text'
import config from './config'

/**
 * Textarea form element with label
 */

const Textarea = ({
  label,
  name,
  message,
  hideLabel,
  children,
  ...props
}, { rebass }) => {
  const { scale, colors, borderColor } = { ...config, ...rebass }

  const invalid = props['aria-invalid'] || props.invalid

  const {
    rounded,
    backgroundColor,
    theme,
    inverted,
    ...rootProps
  } = props

  const sx = {
    root: {
      marginBottom: scale[2],
      color: invalid ? colors.error : null
    },
    textarea: {
      fontFamily: 'inherit',
      fontSize: 'inherit',
      boxSizing: 'border-box',
      display: 'block',
      width: '100%',
      borderWidth: 1,
      borderStyles: 'solid',
      borderColor
    }
  }

  const cx = classnames('Textarea', {
    'is-invalid': invalid,
    'is-disabled': props.disabled,
    'is-readonly': props.readOnly
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
      <Base
        {...props}
        tagName='textarea'
        name={name}
        rounded={rounded}
        backgroundColor={backgroundColor}
        theme={theme}
        inverted={inverted}
        m={0}
        mx={0}
        my={0}
        p={1}
        baseStyle={sx.textarea} />
      {message && <Text small children={message} />}
    </Base>
  )
}

Textarea.propTypes = {
  /** Label for form element */
  label: React.PropTypes.string.isRequired,
  /** Name attribute for form element */
  name: React.PropTypes.string.isRequired,
  /** Adds a helper or error message below the textarea */
  message: React.PropTypes.string,
  /** Hides the form element label */
  hideLabel: React.PropTypes.bool
}

Textarea.defaultProps = {
  rounded: true
}

Textarea.contextTypes = {
  rebass: React.PropTypes.object
}

export default Textarea


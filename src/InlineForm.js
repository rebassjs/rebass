
import React from 'react'
import Input from './Input'
import ButtonOutline from './ButtonOutline'
import Base from './Base'

/**
 * Inline grouped form for search or other simple forms
 */

const InlineForm = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  buttonLabel,
  onClick,
  ...props
}, { rebass }) => {
  const sx = {
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    input: {
      flex: '1 1 auto'
    },
    button: {
      marginLeft: -1
    }
  }

  return (
    <Base {...props}
      tagName='form'
      className='InlineForm'
      baseStyle={sx.root}>
      <Input
        name={name}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        style={sx.input}
        mb={0}
        hideLabel
        rounded='left' />
      <ButtonOutline
        type='submit'
        children={buttonLabel}
        onClick={onClick}
        style={sx.button}
        rounded='right' />
    </Base>
  )
}

InlineForm.contextTypes = {
  rebass: React.PropTypes.object
}

InlineForm.propTypes = {
  /** Input label */
  label: React.PropTypes.string.isRequired,
  /** Input name */
  name: React.PropTypes.string.isRequired,
  /** Input value */
  value: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /** Input placeholder */
  placeholder: React.PropTypes.string,
  /** onChange handler for input */
  onChange: React.PropTypes.func,
  /** Text for button */
  buttonLabel: React.PropTypes.string,
  /** onClick handler for button */
  onClick: React.PropTypes.func
}

InlineForm.defaultProps = {
  buttonLabel: 'Go',
  onClick: () => {},
  onChange: () => {}
}

export default InlineForm


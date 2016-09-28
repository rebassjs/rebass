
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Input from './Input'
import ButtonOutline from './ButtonOutline'

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
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('InlineForm', className)

  const sx = {
    root: {
      display: 'flex',
      alignItems: 'center',
      ...style
    },
    input: {
      flex: '1 1 auto',
      ...subComponentStyles.Input
    },
    button: {
      marginLeft: -1,
      ...subComponentStyles.Button,
      ...subComponentStyles.ButtonOutline
    }
  }

  return (
    <form
      {...props}
      className={cx}
      style={sx.root}>
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
    </form>
  )
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

InlineForm._name = 'InlineForm'

export default withRebass(InlineForm)


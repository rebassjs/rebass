
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Heading from './Heading'
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'

const SignInForm = ({
  heading = 'Sign In',
  username = '',
  password = '',
  remember = false,
  onChange = () => {},
  errors = {},
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const {} = theme

  const cx = classnames('SignInForm', className)

  const sx = {
    root: {
      ...style
    }
  }

  // Or Create an Account...

  return (
    <form
      {...props}
      style={sx.root}>
      {heading && <Heading mb={2} children={heading} />}
      <Input
        name='username'
        label='Username'
        value={username}
        onChange={onChange}
        message={errors.username}
      />
      <Input
        type='password'
        name='password'
        label='Password'
        value={password}
        onChange={onChange}
        message={errors.password}
      />
      <Checkbox
        name='remember'
        label='Remember me on this device'
        mb={2}
        checked={remember}
        onClick={onChange}
      />
      <Button children='Sign In' />
      <a href='#'>Forgot password?</a>
    </form>
  )
}

SignInForm._name = 'SignInForm'

export default withRebass(SignInForm)


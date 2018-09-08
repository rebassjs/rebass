
# @rebass/form

Semi-controlled React form component with render props,
inspired by [Formik][]

```sh
npm i @rebass/form
```

```jsx
import React from 'react'
import Form from '@rebass/form'

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) errors.email = 'Email address is required'

  if (!password) errors.password = 'Password is required'

  return errors
}

class SignUpForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = values => {
    this.setState(values)
  }

  handleSubmit = (values, formState) => {
    // do something...
  }

  render () {
    return (
      <Form
        values={this.state}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        validate={validate}
        render={({
          values,
          touched,
          errors,
          onBlur,
          onChange,
          onSubmit
        }) => (
          <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='text'
              value={values.email}
              onBlur={onBlur}
              onChange={onChange}
            />
            <label htmlFor='password'>Email</label>
            <input
              id='password'
              name='password'
              type='password'
              value={values.password}
              onBlur={onBlur}
              onChange={onChange}
            />
            <button>Sign Up</button>
          </form>
        )}
      />
    )
  }
}
```

## Motivations

For *most* use-cases, I'd recommend using [Formik][], which has a richer API and more options than this component will ever have.
For situations where a Formik-like API is helpful, and when you want to hoist some of the form state up to a higher level in your application, this might be worth considering.

MIT License

[Formik]: https://github.com/jaredpalmer/formik


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

MIT License

[Formik]: https://github.com/jaredpalmer/formik

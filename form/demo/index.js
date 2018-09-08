import React from 'react'
import {
  Dropbar,
  Label,
  Input,
  Menu,
  Item
} from 'dropbar'
import Form from '../src'

class State extends React.Component {
  state = this.props.initialState
  update = fn => this.setState(fn)
  render () {
    const { render } = this.props
    return render({
      ...this.state,
      update: this.update
    })
  }
}

const locations = [
  'NYC',
  'SF',
  'London',
  'LA',
  'Boston',
]

export default () =>
  <div>
    <h2>@rebass/form</h2>
    <State
      initialState={{
        one: {
          name: '',
          email: '',
          location: '',
          remember: false,
          type: 'a',
          items: [
            { name: '' },
          ]
        },
        two: {
          password: '',
          confirmPassword: '',
        }
      }}
      render={state => (
        <div>
          <Form
            values={state.one}
            onChange={values => {
              state.update({ one: values })
            }}
            render={({
              values: {
                name,
                email,
                location,
                remember,
                type,
                items
              },
              onChange,
              onBlur,
              onSubmit,
              setFieldValue
            }) => (
              <form onSubmit={onSubmit}>
                <div>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label>Location</label>
                  <input
                    type='text'
                    name='location'
                    value={location}
                    onChange={e => {
                      setFieldValue('location', e.target.value)
                    }}
                  />
                  <Dropbar
                    inputValue={location}
                    onInputValueChange={value => {
                      setFieldValue('location', value)
                    }}
                    onChange={item => {
                      setFieldValue('location', item)
                    }}>
                    <Label>Location (Dropbar)</Label>
                    <Input />
                    <Menu>
                      {locations.map(location => (
                        <Item key={location} item={location}>
                          {location}
                        </Item>
                      ))}
                    </Menu>
                  </Dropbar>
                </div>
                <div>
                  <button
                    type='button'
                    onClick={e => {
                      setFieldValue('end', '')
                      setFieldValue('start', 'beep')
                    }}>
                    Beep
                  </button>
                  <button
                    type='button'
                    onClick={e => {
                      setFieldValue('end', 'boop')
                    }}>
                    Boop
                  </button>
                  <button
                    type='button'
                    onClick={e => {
                      setFieldValue('start', '')
                      setFieldValue('end', '')
                    }}>
                    Clear
                  </button>
                </div>
                <div>
                  <label>
                    <input
                      type='checkbox'
                      name='remember'
                      checked={remember}
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type='radio'
                      name='type'
                      value='a'
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    A
                  </label>
                  <label>
                    <input
                      type='radio'
                      name='type'
                      value='b'
                      onChange={onChange}
                      onBlur={onBlur}
                    />
                    B
                  </label>
                </div>
                {items.map((item, i) => (
                  <fieldset key={i}>
                    <div>
                      <label>Item.Name</label>
                      <input
                        type='text'
                        name={`items[${i}].name`}
                        value={item.name}
                        onChange={onChange}
                        onBlur={onBlur}
                      />
                    </div>
                  </fieldset>
                ))}
                <button
                  type='button'
                  onClick={e => {
                    state.update(state => ({
                      one: {
                        ...state.one,
                        items: [
                          ...state.one.items,
                          { name: '' }
                        ]
                      }
                    }))
                  }}>
                  Add Item
                </button>
                <hr />
                <button>Submit</button>
              </form>
            )}
          />
          <hr />
          <Form
            values={state.two}
            validate={values => {
              const errors = {}
              if (values.password && values.confirmPassword) {
                if (values.password !== values.confirmPassword) {
                  errors.confirmPassword = 'Passwords do not match'
                }
              }
              return errors
            }}
            onChange={values => {
              state.update({ two: values })
            }}
            render={({
              values: { password, confirmPassword },
              onChange,
              onBlur,
              onSubmit,
              touched,
              errors
            }) => (
              <form onSubmit={onSubmit}>
                <div>
                  <label>Password</label>
                  <input
                    type='text'
                    name='password'
                    value={password}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                </div>
                <div>
                  <label>Confirm Password</label>
                  <input
                    type='text'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={onChange}
                    onBlur={onBlur}
                  />
                  {touched.confirmPassword && errors.confirmPassword && (
                    <pre>{errors.confirmPassword}</pre>
                  )}
                </div>
                <button>Submit</button>
              </form>
            )}
          />
          <hr />
          <pre children={JSON.stringify(state, null, 2)} />
        </div>
      )}
    />
  </div>

import React from 'react'
import { create } from 'react-test-renderer'
import Form, {
  ControlledForm,
  UncontrolledForm
} from '../src'

const Render = () => <div />

describe('Form', () => {
  test('renders', () => {
    const render = jest.fn(() => false)
    const json = create(<Form render={render} />).toJSON()
    expect(json).toBe(null)
    expect(render).toHaveBeenCalledTimes(1)
  })

  test('renders with render props', () => {
    let props
    const render = jest.fn((p) => {
      props = p
      return false
    })
    const json = create(<Form render={render} />).toJSON()
    expect(props.values).toEqual({})
    expect(props.touched).toEqual({})
    expect(props.errors).toEqual({})
    expect(typeof props.onBlur).toBe('function')
    expect(typeof props.onChange).toBe('function')
    expect(typeof props.onSubmit).toBe('function')
    expect(typeof props.setFieldValue).toBe('function')
  })

  test('renders with render props', () => {
    let props
    const render = jest.fn((p) => {
      props = p
      return false
    })
    const json = create(<Form render={render} />).toJSON()
    expect(props.values).toEqual({})
    expect(props.touched).toEqual({})
    expect(props.errors).toEqual({})
    expect(typeof props.onBlur).toBe('function')
    expect(typeof props.onChange).toBe('function')
    expect(typeof props.onSubmit).toBe('function')
    expect(typeof props.setFieldValue).toBe('function')
  })

  describe('onBlur', () => {
    test('onBlur sets touched value', () => {
      const form = create(<Form render={props => <Render {...props} />} />).root
      const render = form.findByType(Render)
      render.props.onBlur({
        target: {
          name: 'hello'
        }
      })
      expect(render.props.values).toEqual({})
      expect(render.props.touched).toEqual({
        hello: true
      })
    })

    test('onBlur validates', () => {
      const validate = jest.fn()
      const form = create(
        <Form
          validate={validate}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onBlur({
        target: {
          name: 'hello'
        }
      })
      expect(validate).toHaveBeenCalled()
      expect(validate).toHaveBeenCalledWith({})
    })

    test('onBlur does not validate when validateOnBlur is false', () => {
      const validate = jest.fn()
      const form = create(
        <Form
          validate={validate}
          validateOnBlur={false}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onBlur({
        target: {
          name: 'hello'
        }
      })
      expect(validate).not.toHaveBeenCalled()
    })
  })

  describe('onChange', () => {
    test('onChange calls props.onChange', () => {
      const onChange = jest.fn()
      const form = create(
        <Form
          onChange={onChange}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onChange({
        target: {
          name: 'hello',
          value: 'hi'
        }
      })
      expect(onChange).toHaveBeenCalled()
      expect(onChange).toHaveBeenCalledWith({ hello: 'hi' })
    })

    test('onChange validates', () => {
      const validate = jest.fn()
      const onChange = jest.fn()
      const form = create(
        <Form
          validate={validate}
          onChange={onChange}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onChange({
        target: {
          name: 'hello',
          value: 'hi'
        }
      })
      expect(validate).toHaveBeenCalled()
      expect(validate).toHaveBeenCalledWith({ hello: 'hi' })
    })

    test('onChange does not validate when validateOnChange is false', () => {
      const validate = jest.fn()
      const onChange = jest.fn()
      const form = create(
        <Form
          validate={validate}
          onChange={onChange}
          validateOnChange={false}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onChange({
        target: {
          name: 'hello'
        }
      })
      expect(validate).not.toHaveBeenCalled()
    })
  })

  describe('onSubmit', () => {
    test('onSubmit calls props.onSubmit', () => {
      const onSubmit = jest.fn()
      const form = create(
        <Form
          initialValues={{ hello: 'hi' }}
          onSubmit={onSubmit}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onSubmit({
        preventDefault: jest.fn()
      })
      expect(onSubmit).toHaveBeenCalled()
      expect(onSubmit).toHaveBeenCalledWith({ hello: 'hi' }, {
        touched: {},
        errors: {}
      })
    })

    test('onSubmit calls validate', () => {
      const validate = jest.fn()
      const onSubmit = jest.fn()
      const form = create(
        <Form
          initialValues={{ hello: 'hi' }}
          onSubmit={onSubmit}
          validate={validate}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onSubmit({
        preventDefault: jest.fn()
      })
      expect(validate).toHaveBeenCalled()
      expect(validate).toHaveBeenCalledWith({ hello: 'hi' })
    })

    test('onSubmit does not call validate when validateOnSubmit is false', () => {
      const validate = jest.fn()
      const onSubmit = jest.fn()
      const form = create(
        <Form
          values={{ hello: 'hi' }}
          onSubmit={onSubmit}
          validate={validate}
          validateOnSubmit={false}
          render={props => <Render {...props} />}
        />
      ).root
      const render = form.findByType(Render)
      render.props.onSubmit({
        preventDefault: jest.fn()
      })
      expect(validate).not.toHaveBeenCalled()
    })
  })

  describe('uncontrolled', () => {
    test('handles onChange', () => {
      const Render = jest.fn(() => false)
      const form = create(<Form render={props => <Render {...props} />} />).root

      const render = form.findByType(Render)
      render.props.onChange({
        target: {
          name: 'hello',
          value: 'hi'
        }
      })
      expect(render.props.values).toEqual({
        hello: 'hi'
      })
    })
  })

  describe('exports', () => {
    test('exports ControlledForm', () => {
      expect(typeof ControlledForm).toBe('function')
    })

    test('exports UncontrolledForm', () => {
      expect(typeof UncontrolledForm).toBe('function')
    })
  })
})

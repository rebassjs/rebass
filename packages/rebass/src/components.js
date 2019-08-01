/** @jsx jsx */
import { jsx } from 'theme-ui'
import { forwardRef } from 'react'

const themed = (Tag, defaultProps = {}) => forwardRef((props, ref) => (
  <Tag
    ref={ref}
    {...defaultProps}
    {...props}
    sx={{
      ...defaultProps.sx,
      boxSizing: 'border-box',
      variant: `styles.${Tag}`
    }}
  />
))

export const Label = themed('label', {
  sx: {
    display: 'block',
    fontSize: 1,
  }
})
export const Input = themed('input', {
  sx: {
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    m: 0,
    p: 2,
  }
})
export const Select = themed('select', {
  sx: {
    appearance: 'none',
    display: 'block',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    m: 0,
    p: 2,
    '::after': {
      content: '"X"',
      // ml: -4,
    }
  }
})
export const Textarea = themed('textarea')
export const Form = themed('form')
export const Fieldset = themed('fieldset')

export const Slider = themed('input', {
  type: 'range',
  sx: {
    width: '100%',
    margin: 0,
    color: 'inherit',
    borderRadius: 99999,
    display: 'block',
    height: 4,
    cursor: 'pointer',
    appearance: 'none',
    '&::-webkit-slider-thumb': {
      width: 16,
      height: 16,
      backgroundColor: 'currentcolor',
      border: 0,
      borderRadius: 99999,
      appearance: 'none'
    },
  }
})

export const Switch = themed('button', {
  type: 'button',
  role: 'switch',
  sx: {
    appearance: 'none',
    color: 'primary',
    bg: 'muted',
    p: 0,
    m: 0,
    display: 'inline-flex',
    alignItems: 'center',
    width: 48,
    height: 24,
    fontFamily: 'inherit',
    fontSize: 'inherit',
    borderRadius: 99999,
  },
})

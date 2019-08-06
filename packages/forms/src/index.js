import React, { forwardRef } from 'react'
import { Box } from 'reflexbox'

export const Label = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='label'
    tx='forms'
    variant='label'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
    }}
  />
)

export const Input = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='input'
    type='text'
    tx='forms'
    variant='input'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
    }}
  />
)

export const Select = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='select'
    tx='forms'
    variant='select'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
    }}
  />
)

export const Textarea = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='textarea'
    tx='forms'
    variant='textarea'
    {...props}
    __css={{
      display: 'block',
      width: '100%',
      p: 2,
      appearance: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      border: '1px solid',
      borderRadius: 'default',
    }}
  />
)

// very experimental
export const Radio = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='input'
    type='radio'
    tx='forms'
    variant='radio'
    {...props}
    __css={{
      display: 'inline-block',
      verticalAlign: 'center',
      width: 20,
      height: 20,
      appearance: 'none',
      borderRadius: 9999,
      border: '1px solid',
      color: 'gray',
      bg: 'muted',
      ':checked': {
        bg: 'primary'
      }
    }}
  />
)

// export const Checkbox

// experimental
export const Switch = forwardRef((props, ref) =>
  <Box
    ref={ref}
    as='button'
    type='button'
    role='switch'
    variant='switch'
    {...props}
    __css={{
      appearance: 'none',
      width: 48,
      height: 24,
      m: 0,
      p: 0,
      border: 0,
      color: 'primary',
      boxShadow: t => `inset 0 0 0 1px`,
      borderRadius: 9999,
      bg: 'muted',
      display: 'flex',
      alignItems: 'center',
      span: {
        display: 'block',
        flex: 'none',
        width: 24,
        height: 24,
        borderRadius: 9999,
        bg: 'currentcolor',
      },
      '&[aria-pressed="true"]': {
        span: {
          transform: 'translateX(100%)',
        }
      }
    }}>
    <span
      aria-hidden='true'
    />
  </Box>
)

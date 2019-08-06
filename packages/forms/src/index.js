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

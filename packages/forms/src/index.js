import React, { forwardRef } from 'react'
import { Box, Flex } from 'reflexbox'
import { props as systemProps } from '@styled-system/should-forward-prop'

const rebassProps = [
  ...systemProps,
  'sx',
  'variant',
]
const PRE = new RegExp(`^(${rebassProps.join('|')})$`)

const getSystemProps = props => {
  const next = {}
  for (let key in props) {
    if (!PRE.test(key)) continue
    next[key] = props[key]
  }
  return next
}
const omitSystemProps = props => {
  const next = {}
  for (let key in props) {
    if (PRE.test(key)) continue
    next[key] = props[key]
  }
  return next
}

const SVG = ({ size = 24, ...props }) =>
  <Box
    as='svg'
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill='currentcolor'
    {...props}
  />

export const Label = forwardRef((props, ref) =>
  <Flex
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
      color: 'inherit',
      bg: 'transparent',
      ':focus': {
        outline: 'none',
        borderColor: 'primary',
        boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
      }
    }}
  />
)

const DownArrow = props =>
  <SVG {...props}>
    <path d="M7 10l5 5 5-5z" />
  </SVG>

export const Select = forwardRef((props, ref) =>
  <Flex
    tx='forms'
    variant='select'
    {...getSystemProps(props)}>
    <Box
      ref={ref}
      as='select'
      {...omitSystemProps(props)}
      __css={{
        display: 'block',
        width: '100%',
        p: 2,
        appearance: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        border: '1px solid',
        borderRadius: 'default',
        color: 'inherit',
        bg: 'transparent',
        ':focus': {
          outline: 'none',
          borderColor: 'primary',
          boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
        }
      }}
    />
    <DownArrow
      sx={{
        ml: -28,
        alignSelf: 'center',
        pointerEvents: 'none',
      }}
    />
  </Flex>
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
      color: 'inherit',
      bg: 'transparent',
      ':focus': {
        outline: 'none',
        borderColor: 'primary',
        boxShadow: t => `0 0 0 1px ${t.colors.primary}`,
      }
    }}
  />
)

const RadioChecked = props =>
  <SVG {...props}>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </SVG>

const RadioUnchecked = props =>
  <SVG {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </SVG>

const RadioIcon = props =>
  <>
    <RadioChecked
      {...props}
      __css={{
        display: 'none',
        'input:checked ~ &': {
          display: 'block',
        }
      }}
    />
    <RadioUnchecked
      {...props}
      __css={{
        display: 'block',
        'input:checked ~ &': {
          display: 'none',
        }
      }}
    />
  </>

export const Radio = forwardRef(({
  className,
  sx,
  variant = 'radio',
  ...props
}, ref) => (
  <Box>
    <Box
      ref={ref}
      as='input'
      type='radio'
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    />
    <Box
      as={RadioIcon}
      aria-hidden='true'
      tx='forms'
      variant={variant}
      className={className}
      sx={sx}
      {...getSystemProps(props)}
      __css={{
        mr: 2,
        borderRadius: 9999,
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          bg: 'highlight',
        }
      }}
    />
  </Box>
))

const CheckboxChecked = props =>
  <SVG {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </SVG>

const CheckboxUnchecked = props =>
  <SVG {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </SVG>

const CheckboxIcon = props =>
  <>
    <CheckboxChecked
      {...props}
      __css={{
        display: 'none',
        'input:checked ~ &': {
          display: 'block',
        }
      }}
    />
    <CheckboxUnchecked
      {...props}
      __css={{
        display: 'block',
        'input:checked ~ &': {
          display: 'none',
        }
      }}
    />
  </>

export const Checkbox= forwardRef(({
  className,
  sx,
  variant = 'checkbox',
  ...props
}, ref) =>
  <Box>
    <Box
      ref={ref}
      as='input'
      type='checkbox'
      {...props}
      sx={{
        position: 'absolute',
        opacity: 0,
        zIndex: -1,
        width: 1,
        height: 1,
        overflow: 'hidden',
      }}
    />
    <Box
      as={CheckboxIcon}
      aria-hidden='true'
      tx='forms'
      variant={variant}
      className={className}
      sx={sx}
      {...getSystemProps(props)}
      __css={{
        mr: 2,
        borderRadius: 4,
        color: 'gray',
        'input:checked ~ &': {
          color: 'primary',
        },
        'input:focus ~ &': {
          color: 'primary',
          bg: 'highlight',
        },
      }}
    />
  </Box>
)

// WIP experimental
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

import { ThemeProvider } from 'theme-ui'
import {
  createElement as jsx,
  forwardRef
} from 'react'
import merge from 'deepmerge'
import { Box, Flex } from '@rebass/grid'
import preset from './preset'

export { Box, Flex }

export const RebassProvider = ({
  theme = {},
  ...props
}) => {
  const merged = merge(preset, theme)
  return (
    jsx(ThemeProvider, {
      ...props,
      theme: merged,
    })
  )
}

const getVariant = (key, name) => [key, name].filter(Boolean).join('.')

export const rx = ({
  tag = 'div',
  theme,
  defaultVariant,
  defaultProps,
  css,
} = {}) => forwardRef(({
  as = tag,
  sx,
  variant = defaultVariant,
  ...props
}, ref) => jsx(Box, {
  ref,
  ...defaultProps,
  ...props,
  as,
  variant: getVariant(theme, variant),
  sx: {
    ...css,
    ...sx,
  }
}))

export const Root = rx({
  defaultVariant: 'styles.root',
})

export const Text = rx({
  theme: 'text',
})

export const Heading = rx({
  tag: 'h2',
  theme: 'text',
  css: {
    fontWeight: 'heading',
    fontSize: 4,
  }
})

export const Link = rx({
  tag: 'a',
  theme: 'text',
  css: {
    color: 'primary',
  }
})

export const Button = rx({
  tag: 'button',
  theme: 'buttons',
  defaultVariant: 'primary',
  css: {
    appearance: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    fontWeight: 'bold',
    m: 0,
    px: 3,
    py: 2,
    color: 'background',
    bg: 'primary',
    border: 0,
    borderRadius: 'default',
  }
})

export const Image = rx({
  tag: 'img',
  theme: 'images',
  css: {
    display: 'block',
    maxWidth: '100%',
    height: 'auto',
  }
})

export const Card = rx({
  theme: 'cards',
  defaultVariant: 'default',
})

export const Label = rx({
  tag: 'label',
  defaultVariant: 'forms.label',
  css: {
    display: 'block',
    width: '100%',
  }
})

export const Input = rx({
  tag: 'input',
  defaultVariant: 'forms.input',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Select = rx({
  tag: 'select',
  defaultVariant: 'forms.select',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Textarea = rx({
  tag: 'textarea',
  defaultVariant: 'forms.textarea',
  css: {
    display: 'block',
    width: '100%',
    p: 2,
    appearance: 'none',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    border: '1px solid',
    borderRadius: 'default',
  }
})

export const Radio = rx({
  tag: 'input',
  defaultVariant: 'forms.radio',
  defaultProps: {
    type: 'radio',
  }
})

export const Checkbox = rx({
  tag: 'input',
  defaultVariant: 'forms.checkbox',
  defaultProps: {
    type: 'checkbox',
  }
})

export const Switch = rx({
  tag: 'button',
  defaultVariant: 'forms.switch',
  defaultProps: {
    type: 'button',
    role: 'switch',
    children: (
      jsx('span', { 'aria-hidden': true })
    )
  },
  css: {
    appearance: 'none',
    display: 'inline-flex',
    color: 'primary',
    bg: 'gray',
    borderRadius: 'circle',
    width: 48,
    height: 24,
    p: 0,
    border: 0,
    boxShadow: 'inset 0 0 0 2px',
    userSelect: 'none',
    '& > span': {
      display: 'block',
      width: 24,
      height: 24,
      borderRadius: 'circle',
      bg: 'currentcolor',
      // boxShadow: 'handle'
    }
  }
})

// export const Slider = rx({})
// export const Progress = rx({})

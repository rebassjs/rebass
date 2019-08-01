/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import { useMemo, forwardRef } from 'react'

export { preset } from './preset'
export { Provider } from './provider'
export { ThemeProvider }

export const Box = forwardRef(({
  as = 'div',
  sx,
  variant,
  ...props
}, ref) => jsx(as, {
  ref,
  ...props,
  sx: {
    variant,
    ...sx
  }
}))

// <R.Button />

const aliases = {
  inlineCode: 'code',
  thematicBreak: 'hr',
}
const alias = n => aliases[n] || n

export const themed = (tag, variant) => forwardRef((props, ref) => jsx(Box, {
  ref,
  as: alias(tag),
  variant: variant || `styles.${tag}`,
  ...props
}))

// Base MDX Components
export const h1 = themed('h1')
export const h2 = themed('h2')
export const h3 = themed('h3')
export const h4 = themed('h4')
export const h5 = themed('h5')
export const h6 = themed('h6')
export const p = themed('p')
export const a = themed('a')
export const ol = themed('ol')
export const ul = themed('ul')
export const li = themed('li')
export const img = themed('img')
export const blockquote = themed('blockquote')
export const hr = themed('hr')
export const em = themed('em')
export const strong = themed('strong')
export const i = themed('i')
export const b = themed('b')
export const table = themed('table')
export const thead = themed('thead')
export const tbody = themed('tbody')
export const th = themed('th')
export const td = themed('td')
// export const delete = themed('delete')
export const pre = themed('pre')
export const code = themed('code')
export const inlineCode = themed('inlineCode')

export const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  ol,
  ul,
  li,
  img,
  blockquote,
  hr,
  em,
  strong,
  i,
  b,
  table,
  thead,
  tbody,
  th,
  td,
  // delete,
  pre,
  code,
  inlineCode,
}

// Rebass primitives
export const Root = themed('div', 'styles.root')
export const Button = themed('button', 'styles.button')
export const Text = themed('div', 'styles.text')
export const Heading = themed('h2', 'styles.heading')
export const Image = themed('img', 'styles.img')
export const Card = themed('div', 'styles.card')

// Form elements
export const Form = themed('form')
export const Fieldset = themed('fieldset')
export const Label = themed('label')
export const Input = themed('input')
export const Select = themed('select')
export const Textarea = themed('textarea')

export const Progress = themed('progess')

// Radio
// Checkbox
// Slider


import React from 'react'
import sys from 'system-components'
import { themeGet } from 'styled-system'

const arrow = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><polygon points='0,0 100,0 50,50'/></svg>`)

export const Select = sys({
  is: 'select',
  m: 0,
  px: 1,
  py: 2,
  width: 1,
  border: 0,
  borderColor: 'gray',
  boxShadow: 1,
  borderRadius: 2,
  color: 'inherit',
  bg: 'transparent'
}, {
  fontFamily: 'inherit',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  appearance: 'none',
  width: '100%',
  border: 0,
  background: `url("data:image/svg+xml;utf8,${arrow}")`,
  backgroundPosition: 'calc(100% - 8px) center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '8px 8px',
  '&:disabled': {
    opacity: 1/4
  }
}, props => ({
  '&:focus': {
    outline: 'none',
    boxShadow: `inset 0 0 0 1px ${themeGet('colors.blue')(props)}`
  }
}))

Select.displayName = 'Select'

export default Select

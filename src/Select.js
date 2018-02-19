import React from 'react'
import sys from 'system-components'
import { themeGet } from 'styled-system'

const arrow = encodeURI(`data:image/svg+xml,<svg xmlns='http://www.w3c.org/2000/svg' width='32' height='32' viewbox='0 0 32 32' fill='tomato'> <path d='M0 6 L32 6 L16 28 z' /> </svg>`)

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
  backgroundImage: `url("${arrow}")`,
  backgroundSize: '8px 8px',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'center right',
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

import React from 'react'
import styled from '@emotion/styled'
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from 'styled-system'
import css from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

const sx = props => css(props.sx)(props.theme)

export const Box = styled('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box'
},
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
  sx
)

export const Flex = styled(Box)({
  display: 'flex'
})

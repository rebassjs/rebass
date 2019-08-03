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
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

const sx = props => css(props.sx)(props.theme)
const variant = props =>
  css(
    get(props.theme, 'variants.' + props.variant,
      get(props.theme, props.variant)
    )
  )(props.theme)

export const Box = styled('div', {
  shouldForwardProp
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0,
},
  sx,
  props => props.css,
  variant,
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
)

export const Flex = styled(Box)({
  display: 'flex'
})

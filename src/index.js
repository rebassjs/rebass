import React from 'react'
import styled from 'styled-components'
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  typography,
  border,
  buttonStyle,
  shadow,
  background,
  variant,
} from 'styled-system'

const themed = key => props => props.theme[key]

// shim for missing babel configs
const css = props => props.css

export const Box = styled('div')({
  boxSizing: 'border-box',
  margin: 0,
},
  compose(
    space,
    layout,
    typography,
    color,
    flexbox,
  ),
  css,
  themed('Box')
)

export const Flex = styled(Box)({
  display: 'flex'
},
  themed('Flex')
)

export const Text = styled(Box)(
  themed('Text')
)

export const Heading = styled(Text)(
  themed('Heading')
)

Heading.defaultProps = {
  as: 'h2',
  fontSize: 4,
  fontWeight: 'bold',
}

export const Link = styled(Text)(
  themed('Link')
)

Link.defaultProps = {
  as: 'a',
  color: 'blue'
}

export const Button = styled(Box)(
  {
    appearance: 'none',
    display: 'inline-block',
    fontSize: 'inherit',
    fontWeight: 'bold',
    border: 0,
    borderRadius: 4,
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
  },
  compose(
    border,
    buttonStyle,
  ),
  themed('Button')
)

Button.defaultProps = {
  as: 'button',
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
}

export const Image = styled(Box)({
  maxWidth: '100%',
  height: 'auto'
},
  border,
  themed('Image')
)

Image.defaultProps = {
  as: 'img',
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  compose(
    border,
    shadow,
    background,
    cards,
  ),
  themed('Card')
)

export * from 'styled-system'

import React from 'react'
import styled from 'styled-components'
import {
  styles,
  space,
  color,
  width,
  height,
  flex,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

export const css = props => props.css
export const themed = key => props => props.theme[key]

// style props blacklist
const styleProps = Object.keys(styles)
  .filter(key => typeof styles[key] === 'function')
  .reduce((a, key) => [
    ...a,
    ...Object.keys(styles[key].propTypes)
  ], [])
const blacklist = [ ...styleProps, 'css' ]

export const omit = (obj, keys) => {
  const next = {}
  for (let key in obj) {
    if (keys.indexOf(key) > -1) continue
    next[key] = obj[key]
  }
  return next
}

// doesn't work with `as` prop
export const clean = Tag => props =>
  <Tag {...omit(props, blacklist)} />
const div = clean('div')
const h2 = clean('h2')
const img = clean('img')
const a = clean('a')

export const Box = styled(div)(
  space,
  width,
  fontSize,
  flex,
  color,
  themed('Box'),
  css
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...flex.propTypes,
  ...color.propTypes,
}

export const Flex = styled(Box)({
  display: 'flex'
},
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  themed('Flex')
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

export const Text = styled(Box)(
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text')
)

Text.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
}

export const Heading = styled(Text)(
  space,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Heading'),
  css
)

Heading.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...fontWeight.propTypes,
  ...textAlign.propTypes,
  ...lineHeight.propTypes,
  ...letterSpacing.propTypes,
}

Heading.defaultProps = {
  as: 'h2',
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
}

export const Link = styled(Box)(
  themed('Link'),
  css
)

Link.defaultProps = {
  as: 'a',
  color: 'blue'
}

export const Button = styled(Box)({
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
},
  fontWeight,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button'),
)

Button.propTypes = {
  ...fontWeight.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes,
}

Button.defaultProps = {
  as: 'button',
  fontSize: 'inherit',
  fontWeight: 'bold',
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  border: 0,
  borderRadius: 4,
}

export const Image = styled(Box)({
  maxWidth: '100%',
  height: 'auto'
},
  space,
  width,
  height,
  color,
  borderRadius,
  themed('Image'),
  css
)

Image.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...borderRadius.propTypes,
}

Image.defaultProps = {
  as: 'img',
  m: 0
}

const cards = variant({ key: 'cards' })

export const Card = styled(Box)(
  borders,
  borderRadius,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  themed('Card'),
  cards,
  css
)

Card.propTypes = {
  ...borders.propTypes,
  ...borderRadius.propTypes,
  ...boxShadow.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...opacity.propTypes,
  ...cards.propTypes,
}


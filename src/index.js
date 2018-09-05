import React from 'react'
import styled from 'react-emotion'
import {
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
import tag from 'clean-tag'

export const css = props => props.css
export const themed = key => props => props.theme[key]

export const Box = styled(tag)(
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
  justifyContent
)

Flex.propTypes = {
  ...flexWrap.propTypes,
  ...flexDirection.propTypes,
  ...alignItems.propTypes,
  ...justifyContent.propTypes
}

export const Text = styled(tag)(
  space,
  color,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  themed('Text'),
  css
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

export const Heading = styled(tag.h2)(
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
  m: 0,
  fontSize: 4,
  fontWeight: 'bold',
}

// ditch these
Heading.h1 = props => <Heading is='h1' {...props} />
Heading.h2 = props => <Heading is='h2' {...props} />
Heading.h3 = props => <Heading is='h3' {...props} />
Heading.h4 = props => <Heading is='h4' {...props} />
Heading.h5 = props => <Heading is='h5' {...props} />
Heading.h6 = props => <Heading is='h6' {...props} />
//

export const Link = styled(tag.a)(
  space,
  fontSize,
  color,
  themed('Heading'),
  css
)

Link.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
}

Link.defaultProps = {
  color: 'blue'
}

export const Button = styled(tag.button)({
  appearance: 'none',
  display: 'inline-block',
  textAlign: 'center',
},
  space,
  fontSize,
  fontWeight,
  width,
  color,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  themed('Button'),
  css
)

Button.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...width.propTypes,
  ...color.propTypes,
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes,
}

Button.defaultProps = {
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

export const Image = styled(tag.img)({
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
}


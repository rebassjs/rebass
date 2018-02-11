import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import sys from 'system-components'
import { Flex, Box } from 'grid-styled'
import theme from './theme'

import DonutBase from './DonutBase'

import {
  darken,
  ratio,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  maxWidth,
  maxHeight,
  minHeight,
  sizeWidth,
  sizeHeight,
  zIndex,
  top,
  right,
  bottom,
  left,
  drawerOpen,
  carouselIndex,
} from './utils'

export const Tooltip = sys({
  color: 'white',
  bg: 'grays.9'
}, props => ({
  display: 'inline-block',
  position: 'relative',
  color: 'inherit',
  backgroundColor: 'transparent',
  '&::before': {
    display: 'none',
    content: `"${props.text}"`,
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, -4px)',
    whiteSpace: 'nowrap',
    fontSize: system.theme('fontSizes.0')(props),
    paddingTop: '4px',
    paddingBottom: '4px',
    paddingLeft: '8px',
    paddingRight: '8px',
    color: system.theme('colors.' + props.color)(props),
    backgroundColor: system.theme('colors.' + props.bg)(props),
    borderRadius: system.theme('radii.1')(props)
  },
  '&::after': {
    display: 'none',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translate(-50%, 8px)',
    content: '" "',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    borderTopColor: system.theme('colors.' + props.bg)(props)
  },
  '&:hover': {
    '&::before, &::after': {
      display: 'block'
    },
  }
}))
Tooltip.displayName = 'Tooltip'

export const Close = sys({
  is: ButtonTransparent,
  p: 0,
  fontSize: 3,
  lineHeight: 1,
  children: '×'
}, {
  width: '24px',
  height: '24px'
})

Close.displayName = 'Close'

export const Star = sys({
  fontSize: 3,
  color: 'yellow',
  children: '★'
}, props => ({
  position: 'relative',
  width: '1em',
  height: '1em',
  '&::after': {
    display: props.half ? 'inline-block' : 'none',
    content: '"★"',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '1em',
    height: '1em',
    // marginLeft: '-1em',
    color: 'blue',
    // color: color(props)(props.color),
    clip: 'rect(0, .45em, 1em, 0)'
  }
}))
Star.displayName = 'Star'

export const Embed = sys({
  ratio: 9 / 16
}, ratio, props => ({
  position: 'relative',
  overflow: 'hidden',
  '& > iframe': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    border: 0
  }
}))
Embed.displayName = 'Embed'

/*
const components = [

  {
    name: 'Switch',
    type: 'div',
    props: {
      role: 'checkbox',
      color: 'blue'
    },
    style: props => ({
      display: 'inline-flex',
      width: px(40),
      height: px(24),
      borderRadius: px(9999),
      backgroundColor: props.checked ? color(props)(props.color) : 'transparent',
      boxShadow: 'inset 0 0 0 2px',
      transitionProperty: 'background-color',
      transitionDuration: '.2s',
      transitionTimingFunction: 'ease-out',
      userSelect: 'none',
      '&::after': {
        content: '" "',
        width: px(16),
        height: px(16),
        margin: px(4),
        borderRadius: px(9999),
        transitionProperty: 'transform, color',
        transitionDuration: '.1s',
        transitionTimingFunction: 'ease-out',
        transform: props.checked ? `translateX(16px)` : `translateX(0)`,
        backgroundColor: props.checked ? color(props)('white') : color(props)(props.color),
      }
    })
  },

  {
    name: 'Arrow',
    type: 'div',
    props: {
      direction: 'down'
    },
    style: props => {
      const borderTop = props.direction === 'down' ? { borderTop: '.4375em solid' } : null
      const borderBottom = props.direction === 'up' ? { borderBottom: '.4375em solid' } : null
      return Object.assign({
        display: 'inline-block',
        width: 0,
        height: 0,
        verticalAlign: 'middle',
        borderRight: '.3125em solid transparent',
        borderLeft: '.3125em solid transparent',
      }, borderTop, borderBottom)
    },
    propTypes: {
      direction: oneOf([ 'up', 'down' ])
    }
  },

  {
    name: 'Donut',
    type: DonutBase,
    props: {
      color: 'blue',
      strokeWidth: 2,
      value: 1
    },
    style:  {}
  },

  {
    name: 'Row',
    type: Flex,
    props: {
      mx: -3,
    },
    style: {}
  },
  {
    name: 'Column',
    type: Box,
    props: {
      px: 3,
      mb: 4,
      flex: '1 1 auto'
    },
    style: {}
  },
]

export default components
*/

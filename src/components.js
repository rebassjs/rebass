import React from 'react'
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

/*
const components = [


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

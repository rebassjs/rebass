import {
  style,
  responsiveStyle
} from 'styled-system'

export const darken = n => `rgba(0, 0, 0, ${n})`

export const ratio = props => props.ratio ? ({
  height: 0,
  paddingBottom: (props.ratio * 100) + '%'
}) : null

export const backgroundImage = props => props.src ? ({
  backgroundImage: `url(${props.src})`
}) : null

export const backgroundSize = style({
  prop: 'backgroundSize'
})

export const backgroundPosition = style({
  prop: 'backgroundPosition'
})

export const maxHeight = responsiveStyle({
  prop: 'maxHeight',
  cssProperty: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true
})

export const minHeight = responsiveStyle({
  prop: 'minHeight',
  cssProperty: 'minHeight',
  numberToPx: true
})

export const sizeWidth = responsiveStyle({
  prop: 'size',
  cssProperty: 'width',
  key: 'sizes',
  numberToPx: true
})

export const sizeHeight = responsiveStyle({
  prop: 'size',
  cssProperty: 'height',
  key: 'sizes',
  numberToPx: true
})

export const zIndex = responsiveStyle({
  prop: 'zIndex',
  cssProperty: 'zIndex',
})

export const top = responsiveStyle({
  prop: 'top',
  cssProperty: 'top',
  numberToPx: true
})

export const right = responsiveStyle({
  prop: 'right',
  cssProperty: 'right',
  numberToPx: true
})

export const bottom = responsiveStyle({
  prop: 'bottom',
  cssProperty: 'bottom',
  numberToPx: true
})

export const left = responsiveStyle({
  prop: 'left',
  cssProperty: 'left',
  numberToPx: true
})


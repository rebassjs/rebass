import system from 'styled-system'

export const darken = n => `rgba(0, 0, 0, ${n})`

export const fontFamily = system.style({
  prop: 'font',
  key: 'fonts',
  cssProperty: 'fontFamily'
})

export const ratio = props => props.ratio ? ({
  height: 0,
  paddingBottom: (props.ratio * 100) + '%'
}) : null

export const backgroundImage = props => props.src ? ({
  backgroundImage: `url(${props.src})`
}) : null

export const backgroundSize = system.style({
  prop: 'backgroundSize'
})

export const backgroundPosition = system.style({
  prop: 'backgroundPosition'
})

export const maxHeight = system.responsiveStyle({
  prop: 'maxHeight',
  cssProperty: 'maxHeight',
  key: 'maxHeights',
  numberToPx: true
})

export const minHeight = system.responsiveStyle({
  prop: 'minHeight',
  cssProperty: 'minHeight',
  numberToPx: true
})

export const sizeWidth = system.responsiveStyle({
  prop: 'size',
  cssProperty: 'width',
  key: 'sizes',
  numberToPx: true
})

export const sizeHeight = system.responsiveStyle({
  prop: 'size',
  cssProperty: 'height',
  key: 'sizes',
  numberToPx: true
})

export const zIndex = system.responsiveStyle({
  prop: 'zIndex',
  cssProperty: 'zIndex',
})

export const top = system.responsiveStyle({
  prop: 'top',
  cssProperty: 'top',
  numberToPx: true
})

export const right = system.responsiveStyle({
  prop: 'right',
  cssProperty: 'right',
  numberToPx: true
})

export const bottom = system.responsiveStyle({
  prop: 'bottom',
  cssProperty: 'bottom',
  numberToPx: true
})

export const left = system.responsiveStyle({
  prop: 'left',
  cssProperty: 'left',
  numberToPx: true
})

export const drawerOpen = ({
  open,
  position,
  size
}) => {
  const h = /^(left|right)$/.test(position) ? 1 : 0
  const width = h ? size + 'px' : null
  const height = h ? null : size + 'px'
  const transforms = {
    left: 'translateX(-100%)',
    right: 'translateX(100%)',
    top: 'translateY(-100%)',
    bottom: 'translateY(100%)',
  }
  const top = /^(top|left|right)$/.test(position) ? 0 : null
  const bottom = /^(bottom|left|right)$/.test(position) ? 0 : null
  const left = /^(left|top|bottom)$/.test(position) ? 0 : null
  const right = /^(right|top|bottom)$/.test(position) ? 0 : null

  return {
    width,
    height,
    top,
    bottom,
    left,
    right,
    transform: open ? null : transforms[position]
  }
}

export const carouselIndex = ({ index }) => ({
  '& > div:first-child': {
    marginLeft: (index * 100) + '%',
    transitionProperty: 'margin',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out'
  }
})

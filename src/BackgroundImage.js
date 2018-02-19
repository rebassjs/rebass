import sys from 'system-components'
import { style } from 'styled-system'

const bgImage = style({
  prop: 'image',
  alias: 'src',
  cssProperty: 'backgroundImage',
  getter: n => `url(${n})`
})

export const BackgroundImage = sys({
  width: 1,
  ratio: 3/4,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
},
  bgImage,
  'ratio',
  'backgroundSize',
  'backgroundPosition',
  'space',
  'color',
)

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage

import sys from 'system-components'
import {
  ratio,
  backgroundImage,
  backgroundSize,
  backgroundPosition
} from './utils'

export const BackgroundImage = sys({
  width: 1,
  ratio: 3/4,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
},
  ratio,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  'space',
  'color',
)

BackgroundImage.displayName = 'BackgroundImage'

export default BackgroundImage

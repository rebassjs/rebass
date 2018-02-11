import sys from 'system-components'
import { darken, maxWidth, maxHeight } from './utils'
import { Fixed } from './index'

export const Overlay = sys({
  is: Fixed,
  top: '50%',
  left: '50%',
  p: 3,
  bg: 'white',
  borderRadius: 2,
  maxWidth: '100vw',
  maxHeight: '100vh',
  boxShadow: `0 0 0 60vmax ${darken(1/2)}, 0 0 32px ${darken(1/4)}`,
}, {
  overflow: 'auto',
  transform: 'translate(-50%, -50%)'
},
  'width',
  maxWidth,
  maxHeight,
)
Overlay.displayName = 'Overlay'

export default Overlay

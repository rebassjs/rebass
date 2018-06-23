import sys from 'system-components'
import { space, color, zIndex } from 'styled-system'
import { Box } from 'grid-styled'

const transforms = {
  left: 'translateX(-100%)',
  right: 'translateX(100%)',
  top: 'translateY(-100%)',
  bottom: 'translateY(100%)',
}
export const side = ({ side }) => {
  if (!transforms[side]) return {
    top: 0,
    left: 0,
    bottom: 0
  }
  const h = /^(left|right)$/.test(side) ? 1 : 0
  const top = /^(top|left|right)$/.test(side) ? 0 : null
  const bottom = /^(bottom|left|right)$/.test(side) ? 0 : null
  const left = /^(left|top|bottom)$/.test(side) ? 0 : null
  const right = /^(right|top|bottom)$/.test(side) ? 0 : null

  return {
    top,
    bottom,
    left,
    right,
  }
}

export const transform = ({
  open,
  side
}) => ({
  transform: open ? null : transforms[side] || transforms.left
})

export const Drawer = sys({
  is: Box,
  blacklist: [
    'side',
    'open',
  ],
  position: 'fixed',
  color: 'white',
  bg: 'black',
  open: false,
  side: 'bottom',
  width: 320,
}, side,
  transform,
  'zIndex',
  'height',
  {
  overflowX: 'hidden',
  overflowY: 'auto',
  transitionProperty: 'transform',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-out'
})

Drawer.displayName = 'Drawer'

export default Drawer

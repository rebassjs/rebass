import styled from 'styled-components'
import { space, color, zIndex } from 'styled-system'
import { Fixed } from './index'

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

export const Drawer = styled(Fixed)([],
  space,
  color,
  zIndex,
  drawerOpen, {
    position: 'fixed',
    overflowX: 'hidden',
    overflowY: 'auto',
    transitionProperty: 'transform',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out'
})

Drawer.defaultProps = {
  color: 'white',
  bg: 'dark',
  open: false,
  size: 320,
  position: 'left',
}

Drawer.displayName = 'Drawer'

export default Drawer

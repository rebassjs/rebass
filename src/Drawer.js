import styled from 'styled-components'
import { space, color } from 'styled-system'
import { Fixed } from './index'
import {
  zIndex,
  drawerOpen
} from './utils'

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
  bg: 'grays.9',
  open: false,
  size: 320,
  position: 'left',
}

Drawer.displayName = 'Drawer'

export default Drawer

import sys from 'system-components'
import { darken } from './utils'

export const NavLink = sys({
  is: 'a',
  color: 'inherit',
  bg: 'transparent',
  fontSize: 1,
  fontWeight: 'bold',
  p: 2,
}, props => ({
  display: 'inline-flex',
  alignItems: 'center',
  alignSelf: 'stretch',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: darken(1/16)
  },
  '&:disabled': {
    opacity: 1/4
  },
}))

NavLink.displayName = 'NavLink'

export default NavLink

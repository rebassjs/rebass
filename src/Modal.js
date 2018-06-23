import sys from 'system-components'
import { themeGet } from 'styled-system'
import { Fixed } from './index'

export const Modal = sys({
  is: Fixed,
  top: '50%',
  left: '50%',
  p: 3,
  bg: 'white',
  borderRadius: 2,
  maxWidth: '100vw',
  maxHeight: '100vh',
}, props => ({
  boxShadow: `0 0 0 60vmax ${themeGet('colors.darken')(props)}, 0 0 32px ${themeGet('colors.darken')(props)}`,
  overflow: 'auto',
  transform: 'translate(-50%, -50%)'
}),
  'width',
  'maxWidth',
  'maxHeight',
)
Modal.displayName = 'Modal'

export default Modal

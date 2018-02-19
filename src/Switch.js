import sys from 'system-components'
import { theme } from 'styled-system'

export const Switch = sys({
  role: 'checkbox',
  color: 'blue',
  borderRadius: '99999px'
},
  'space',
  'color',
  props => ({
  display: 'inline-flex',
  width: '40px',
  height: '24px',
  backgroundColor: props.checked
    ? theme('colors.' + props.color)(props)
    : 'transparent',
  boxShadow: 'inset 0 0 0 2px',
  transitionProperty: 'background-color',
  transitionDuration: '.2s',
  transitionTimingFunction: 'ease-out',
  userSelect: 'none',
  '&::after': {
    content: '" "',
    width: '16px',
    height: '16px',
    margin: '4px',
    borderRadius: '99999px',
    transitionProperty: 'transform, color',
    transitionDuration: '.1s',
    transitionTimingFunction: 'ease-out',
    transform: props.checked ? `translateX(16px)` : `translateX(0)`,
    backgroundColor: props.checked
      ? theme('colors.white')(props)
      : theme('colors.' + props.color)(props)
  }
}))

Switch.displayName = 'Switch'

export default Switch

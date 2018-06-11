import sys from 'system-components'

export const Arrow = sys({
  direction: 'down'
}, props => {
  const borderTop = props.direction === 'down' ? { borderTop: '.4375em solid' } : null
  const borderBottom = props.direction === 'up' ? { borderBottom: '.4375em solid' } : null
  return {
    display: 'inline-block',
    width: 0,
    height: 0,
    verticalAlign: 'middle',
    borderRight: '.3125em solid transparent',
    borderLeft: '.3125em solid transparent',
    ...borderTop,
    ...borderBottom
  }
}, 'space', 'color')

Arrow.displayName = 'Arrow'

export default Arrow

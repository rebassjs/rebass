import sys from 'system-components'

export const Root = sys({
  fontFamily: 'sans',
}, 'fontFamily', {
  '& *': {
    boxSizing: 'border-box'
  }
})

Root.displayName = 'Root'

export default Root

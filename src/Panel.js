import sys from 'system-components'

export const Panel = sys({
  bg: 'white',
  borderRadius: 2,
  borderWidth: 1,
  borderColor: 'gray'
}, {
  overflow: 'hidden'
}, 'space')

Panel.displayName = 'Panel'

Panel.Header = sys({
  is: 'header',
  fontSize: 2,
  p: 2,
  bg: 'white',
  borderWidth: 1,
  borderBottom: true,
  borderColor: 'gray'
})

Panel.Header.displayName = 'Panel.Header'

Panel.Footer = sys({
  is: 'footer',
  fontSize: 1,
  p: 2,
  bg: 'white',
  borderWidth: 1,
  borderTop: true,
  borderColor: 'gray'
})

Panel.Footer.displayName = 'Panel.Footer'

export default Panel

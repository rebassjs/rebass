import sys from '@rebass/components'

export const Panel = sys({
  bg: 'white',
  borderRadius: 2,
  border: 1,
  borderColor: 'gray'
}, {
  overflow: 'hidden'
},
  'space',
  'color',
  'borders',
  'borderColor',
  'borderRadius'
)

Panel.displayName = 'Panel'

Panel.Header = sys({
  is: 'header',
  fontSize: 2,
  p: 2,
  bg: 'white',
  borderBottom: 1,
  borderColor: 'gray'
},
  'space',
  'color',
  'fontSize',
  'borders',
  'borderColor'
)

Panel.Header.displayName = 'Panel.Header'

Panel.Footer = sys({
  is: 'footer',
  fontSize: 1,
  p: 2,
  bg: 'white',
  borderTop: 1,
  borderColor: 'gray'
},
  'space',
  'colors',
  'fontSize',
  'borders',
  'borderColor'
)

Panel.Footer.displayName = 'Panel.Footer'

export default Panel

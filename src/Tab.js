import sys from '@rebass/components'

export const Tab = sys({
  is: 'a',
  fontSize: 1,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  color: 'inherit',
  borderBottom: 2,
  borderColor: 'transparent',
}, {
  textDecoration: 'none',
},
  'space',
  'color',
  'fontSize',
  'fontWeight',
  'borders',
  'borderColor'
)

Tab.displayName = 'Tab'

export default Tab

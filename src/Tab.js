import sys from 'system-components'

export const Tab = sys({
  is: 'a',
  fontSize: 1,
  fontWeight: 'bold',
  mr: 3,
  py: 2,
  color: 'inherit',
  borderWidth: 2,
  borderBottom: true,
  borderColor: 'transparent',
  hover: {
    color: 'blue'
  }
}, {
  textDecoration: 'none'
})

Tab.displayName = 'Tab'

export default Tab

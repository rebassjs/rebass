import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Banner = sys({
  is: Flex,
  p: [ 3, 4 ],
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  color: 'white',
  bg: 'black'
},
  'minHeight',
  'backgroundSize',
  'backgroundPosition',
  'backgroundImage'
)

Banner.displayName = 'Banner'

export default Banner

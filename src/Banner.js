import sys from '@rebass/components'
import { Flex } from '@rebass/grid'

export const Banner = sys({
  extend: Flex,
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

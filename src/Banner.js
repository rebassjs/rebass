import sys from 'system-components'
import {
  minHeight,
  backgroundSize,
  backgroundPosition,
  backgroundImage
} from './utils'

export const Banner = sys({
  is: Flex,
  p: [ 3, 4 ],
  flexDirection: 'column',
  align: 'center',
  justify: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '80vh',
  color: 'white',
  bg: 'gray'
},
  minHeight,
  backgroundSize,
  backgroundPosition,
  backgroundImage
)

Banner.displayName = 'Banner'

export default Banner

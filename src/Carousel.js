import sys from 'system-components'
import { carouselIndex } from './utils'

export const Carousel = sys({
  is: Flex,
  width: 1,
}, {
  overflow: 'hidden',
  whiteSpace: 'nowrap'
}, carouselIndex)

Carousel.displayName = 'Carousel'

export default Carousel

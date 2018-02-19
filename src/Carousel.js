import sys from 'system-components'
import { Flex } from 'grid-styled'

export const carouselIndex = ({ index }) => ({
  '& > div:first-child': {
    marginLeft: (index * -100) + '%',
    transitionProperty: 'margin',
    transitionDuration: '.2s',
    transitionTimingFunction: 'ease-out'
  }
})

export const Carousel = sys({
  is: Flex,
  width: 1,
}, {
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  '& > div': {
    flex: 'none',
    width: '100%'
  }
}, carouselIndex, 'space', 'color')

Carousel.displayName = 'Carousel'

export default Carousel

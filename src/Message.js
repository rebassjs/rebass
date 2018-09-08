import sys from '@rebass/components'
import { Flex } from '@rebass/grid'

export const Message = sys({
  extend: Flex,
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'blue',
  alignItems: 'center',
  minHeight: '48px',
}, 'minHeight', 'fontWeight', {
  WebkitFontSmoothing: 'antialiased',
})

Message.displayName = 'Message'

export default Message

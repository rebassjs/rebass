import sys from 'system-components'
import { Flex } from 'grid-styled'

export const Message = sys({
  is: Flex,
  px: 3,
  py: 2,
  fontWeight: 'bold',
  color: 'white',
  bg: 'blue',
  align: 'center',
  minHeight: '48px',
}, 'minHeight', {
  WebkitFontSmoothing: 'antialiased',
})

Message.displayName = 'Message'

export default Message

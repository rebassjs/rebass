import styled from 'styled-components'
import {
  Flex as _Flex,
  Box as _Box
} from 'grid-styled'
import {
  fontSize,
  color
} from 'styled-system'

const Flex = styled(_Flex)([], fontSize, color)
Flex.displayName = 'Flex'
export { Flex }

const Box = styled(_Box)([], fontSize, color)
Box.displayName = 'Box'
export { Box }



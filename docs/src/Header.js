import React from 'react'
import styled from 'styled-components'
import { Link } from 'rrx'
import {
  Flex,
  Box,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  ButtonOutline,
  Pre
} from 'rebass'
import Logo from './Logo'

const photo = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'

const Root = styled(Banner)`
  background-attachment: fixed;
`

const Btn = styled(Button)`
  mix-blend-mode: overlay;
`

const Title = Heading.extend`
  text-transform: uppercase;
  letter-spacing: 0.2em;
`

const Header = props => (
  <Banner
    py={[ 4, 5 ]}
    color='white'
    bg='black'>
    <Box width={1}>
      <Logo
        size={[ 256, 320, 512 ]}
      />
    </Box>
    <Flex
      flexWrap='wrap'
      width={1}
      mx={-3}
      alignItems='center'>
      <Box width={[ 1, null, 384 ]} px={3}>
        <Title
          is='h1'
          fontSize={[ 6, 7, 8 ]}>
          Rebass
        </Title>
      </Box>
      <Box px={3} width={[ 1, 384 ]}>
        <Lead>
          Functional React UI component library, built with styled-components
        </Lead>
      </Box>
    </Flex>
    <Flex
      mx={-3}
      width={1}
      flexWrap='wrap'
      alignItems='center'>
      <Button
        is={Link}
        href='/getting-started'
        fontSize={2}
        color='black'
        bg='white'
        children='Documentation'
        py={3}
        mx={3}
        my={4}
      />
      <ButtonOutline
        is='a'
        href='https://github.com/jxnblk/rebass'
        fontSize={2}
        color='white'
        children='GitHub'
        py={3}
        mx={3}
        my={4}
      />
      <Pre mx={3}>npm i rebass</Pre>
    </Flex>
  </Banner>
)

export default Header

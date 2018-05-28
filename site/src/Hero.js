import React from 'react'
import { connect } from 'refunk'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {
  Flex,
  Box,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  ButtonOutline,
  Pre,
  BlockLink,
  Image,
} from 'rebass'
import Logo from './Logo'
import { docs, install } from './constants'
import Tweet from './Tweet'

const PrimaryButton = styled(Button)({
  transition: 'background-color .2s ease-out',
  '&:hover': {
    backgroundColor: 'magenta'
  }
})

const SecondaryButton = styled(ButtonOutline)({
  transition: '.2s ease-out',
  transitionProperty: 'color, box-shadow',
  '&:hover': {
    color: 'magenta',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 2px magenta'
  }
})

const Title = styled(Heading)([])

const Header = connect(props => (
  <Banner
    py={[ 4, 5 ]}
    style={{
      WebkitFontSmoothing: 'antialiased'
    }}
    color='white'
    bg='black'>
    <Flex
      flexWrap='wrap'
      width={1}
      mx={-3}
      mb={3}
      alignItems='center'>
      <Box width={[ 1, null, 512 ]} px={3}>
        <Logo size={[ 256, 320, 384 ]} />
      </Box>
      <Box width={[ 1, null, 512 ]} px={3}>
        <Title
          is='h1'
          fontSize={[ 6, 7, 8 ]}>
          Rebass
        </Title>
        <Pre mb={2}>v{props.pkg.version}</Pre>
        <Lead mb={3} fontWeight='bold'>
          {props.pkg.description}
        </Lead>
        <Flex
          mx={-3}
          mb={4}
          width={1}
          flexWrap='wrap'
          alignItems='center'>
          <PrimaryButton
            is='a'
            href={docs}
            fontSize={2}
            color='black'
            bg='white'
            children='Documentation'
            py={3}
            mx={3}
            my={3}
          />
          <SecondaryButton
            is='a'
            href='https://github.com/jxnblk/rebass'
            fontSize={2}
            color='white'
            children='GitHub'
            py={3}
            mx={3}
            my={3}
          />
          <Pre color='magenta' mx={3} my={3}>{install}</Pre>
        </Flex>
        <Flex
          mt={3}
          alignItems='center'
          width={1}>
          <BlockLink
            mr={2}
            py={2}
            href='https://travis-ci.org/jxnblk/rebass'>
            <Image
              src='https://img.shields.io/travis/jxnblk/rebass/master.svg'
            />
          </BlockLink>
          <BlockLink
            ml={2}
            mr={3}
            py={2}
            href='https://github.com/jxnblk/rebass'>
            <Image
              src='https://img.shields.io/github/stars/jxnblk/rebass.svg?style=social&label=Star'
            />
          </BlockLink>
          <Tweet />
        </Flex>
      </Box>
    </Flex>
  </Banner>
))

export default Header

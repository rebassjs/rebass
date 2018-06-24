import React from 'react'
import { connect } from 'refunk'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import {
  Flex,
  Box,
  Container,
  Banner,
  Heading,
  Text,
  Lead,
  Button,
  Pre,
  BlockLink,
  Image,
  Measure,
  Blockquote,
  Link,
  NavLink,
} from '../src'
import Logo from './Logo'
import { docs, install } from './_constants'
import Live from './Live'

const PrimaryButton = styled(Button)({
  transition: 'background-color .2s ease-out',
  '&:hover': {
    backgroundColor: 'magenta'
  }
})

const SecondaryButton = styled(Button)({
  transition: '.2s ease-out',
  transitionProperty: 'color, box-shadow',
  backgroundColor: 'transparent',
  boxShadow: 'inset 0 0 0 2px',
  '&:hover': {
    color: 'magenta',
    backgroundColor: 'transparent',
    boxShadow: 'inset 0 0 0 2px magenta'
  }
})

const Title = styled(Heading)([])

const Hero = connect(props => (
  <Banner
    py={[ 4, 5 ]}
    style={{
      WebkitFontSmoothing: 'antialiased'
    }}
    color='white'
    bg='black'>
    <Flex
      flexWrap={[ 'wrap', 'wrap', 'nowrap' ]}
      width={1}
      mx={-3}
      mb={3}
      alignItems='flex-start'>
      <Flex
        justifyContent='center'
        width={[ 1, null, 256, 320, 512 ]}
        px={0}>
        <Logo size={[ 256, null, null, 320 ]} />
      </Flex>
      <Box width={[ 1, null, 384 ]} px={3}>
        <Title
          is='h1'
          fontSize={[ 6, 7, 8 ]}>
          Rebass
        </Title>
        <Pre mb={2} color=''>v{props.pkg.version}</Pre>
        <Lead mb={3} fontWeight='bold' color=''>
          {props.pkg.description}
        </Lead>
        <Flex
          mx={-3}
          mb={4}
          width={1}
          flexWrap='wrap'
          alignItems='center'>
          <PrimaryButton
            is={RouterLink}
            to={docs}
            fontSize={2}
            color='black'
            bg='cyan'
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
          {false && <Tweet />}
        </Flex>
      </Box>
    </Flex>
  </Banner>
))


const Intro = props =>
  <React.Fragment>
    <Text
      is='p'
      fontSize={4}
      fontWeight='bold'
      my={5}
    >
      <Measure>
        Rebass is a library of highly-composable, primitive UI components for React,
        built with styled-system to make building consistent, responsive web apps simpler and faster.
        {/*
        Based upon a configurable design system,
        Rebass’s props API makes building consistent,
        responsive web apps simpler and faster.
        */}
      </Measure>
    </Text>
    <Heading>
      Features
    </Heading>
    <Flex
      mx={-3}
      mb={5}
      flexWrap='wrap'>
      {[
        'Functional stateless UI components',
        'Style encapsulation with CSS-in-JS and styled-components',
        'No external CSS dependencies',
        'Configurable theming',
        'Extensible base components',
        'Design-system based consistency',
        'Built for responsive web design',
        'Write less custom CSS',
      ].map(feat => (
        <Box
          key={feat}
          width={[ 1/2, null, 1/4 ]}
          p={3}>
          <Text fontWeight='bold'>
            {feat}
          </Text>
        </Box>
      ))}
    </Flex>

    <Flex flexWrap='wrap' mx={-3} mb={5}>
      {quotes.map(({ text, name, href }) => (
        <Box key={name} width={[ 1, null, 1/2 ]} px={3} py={4}>
          <Blockquote
            mb={2}
            fontSize={3}
            fontWeight='bold'>
            {text}
          </Blockquote>
          <Link fontSize={1} href={href}>{name}</Link>
        </Box>
      ))}
    </Flex>
  </React.Fragment>

const quotes = [
  {
    text: '“One of the best React component libs out there”',
    name: 'Max Stoiber',
    href: 'https://twitter.com/mxstbr/status/882657561111080960'
  },
  {
    text: '“Rebass is the Bootstrap of React.”',
    name: 'Jori Lallo',
    href: 'https://twitter.com/jorilallo/status/882990343225868289'
  },
  {
    text: '“A whopper component library built on styled-components. Responsive, systematic, scalable...the business!”',
    name: 'Colm Tuite',
    href: 'https://twitter.com/colmtuite/status/882715087936606210'
  },
  {
    text: '“Why the hell are we now putting CSS in Javascript? I’m losing my mind with web developers trying to control everything in the world with client-side javascript. What a mess.”',
    name: 'alttab',
    href: 'https://news.ycombinator.com/item?id=14705579'
  }
]


const code = `<Box px={4} py={5} color='white' bg='blue'>
  <Heading
    is='h1'
    fontSize={[ 4, 5, 6 ]}>
    Hello, Rebass
  </Heading>
</Box>
<Flex
  px={4}
  py={5}
  alignItems='center'>
  <Heading color='blue'>
    Beep
  </Heading>
  <Box mx='auto' />
  <Button>
    Beep
  </Button>
  <ButtonOutline ml={2}>
    Boop
  </ButtonOutline>
</Flex>
`

const Demo = props =>
  <Box id='demo' py={5}>
    <Heading mb={3}>Live Demo</Heading>
    <Live code={code} />
  </Box>


const CTA = props =>
  <Box py={5}>
    <Flex flexWrap='wrap' alignItems='center'>
      <Box>
        <Heading mb={2}>
          Getting Started
        </Heading>
        <Text fontWeight='bold' mb={3}>
          Install Rebass now and read the docs to get started
        </Text>
        <Pre mb={3}>{install}</Pre>
      </Box>
      <Box mx='auto' />
      <Box>
        <Button
          is={RouterLink}
          fontSize={2}
          py={3}
          to={docs}>
          Documentation
        </Button>
      </Box>
      <Box mx='auto' />
    </Flex>
  </Box>

const Footer = props =>
  <Flex mx={-2}>
    <NavLink href='https://github.com/jxnblk/rebass'>
      GitHub
    </NavLink>
    <NavLink href='https://jxnblk.com'>
      Made by Jxnblk
    </NavLink>
  </Flex>


export default class extends React.Component {
  static defaultProps = {
    layout: false
  }

  render () {
    return (
      <React.Fragment>
        <Hero />
        <Container maxWidth={1280} pb={6}>
          <Intro />
          <Demo />
          <CTA />
          <Footer />
        </Container>
      </React.Fragment>
    )
  }
}

/* Props/Responsive */
/* Colors */
/* Typography */
/* Grid */
/* Configuration/Theming */
/* Customizing/Extending*/
/* Components */

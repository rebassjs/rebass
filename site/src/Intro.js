import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Measure,
  Blockquote,
  Link
} from 'rebass'


export default props =>
  <React.Fragment>
    <Text
      is='p'
      fontSize={4}
      fontWeight='bold'
      my={5}
    >
      <Measure>
        Rebass is a library of highly-composable, primitive UI components for React, built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application. Based upon a configurable design system, Rebass’s props API makes building consistent, responsive web apps simpler and faster.
      </Measure>
    </Text>
    <Heading>
      Features
    </Heading>
    <Text fontWeight='bold'>
      <Flex
        mx={-3}
        mb={5}
        flexWrap='wrap'>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Functional stateless UI components</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Style encapsulation with CSS-in-JS and styled-components</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>No external CSS dependencies</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Configurable theming</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Extensible base components</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Design-system based consistency</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Built for responsive web design</Box>
        <Box width={[ 1/2, null, 1/4 ]} p={3}>Write less custom CSS</Box>
      </Flex>
    </Text>
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

import React from 'react'
import {
  Container,
  Flex,
  Box,
  Blockquote,
  Small,
  Link
} from 'rebass'

const Testimonials = props => (
  <Container py={3}>
    <Flex
      mx={-3}
      wrap>
      {quotes.map(quote => (
        <Box
          key={quote.href}
          w={[ 1, 1/2 ]}
          p={3}>
          <Blockquote f={[ 2, 3 ]}>
            “{quote.text}”
          </Blockquote>
          <Small>
            <Link href={quote.href}>
              {quote.source}
            </Link>
          </Small>
        </Box>
      ))}
    </Flex>
  </Container>
)

const quotes = [
  {
    text: 'One of the best React component libs out there',
    source: 'Max Stoiber',
    href: 'https://twitter.com/mxstbr/status/882657561111080960'
  },
  {
    text: 'Rebass is the Bootstrap of React.',
    source: 'Jori Lallo',
    href: 'https://twitter.com/jorilallo/status/882990343225868289'
  },
  {
    text: 'A whopper component library built on styled-components. Responsive, systematic, scalable...the business!',
    source: 'Colm Tuite',
    href: 'https://twitter.com/colmtuite/status/882715087936606210'
  },
  {
    text: 'Why the hell are we now putting CSS in Javascript? I’m losing my mind with web developers trying to control everything in the world with client-side javascript. What a mess.',
    source: 'alttab',
    href: 'https://news.ycombinator.com/item?id=14705579'
  },
  /*
  {
    text: 'Rebass is so incredible that at this point making anything from scratch just seems silly.',
    source: 'Vincent van der Meulen',
    href: 'https://mobile.twitter.com/vincentmvdm/status/886356961389813760'
  },
  */
]

export default Testimonials

import React from 'react'
import { Link as RLink } from 'rrx'
import {
  Flex,
  Box,
  Text,
  Link,
  Code,
} from 'rebass'
import Live from './Live'
import Section from './Section'
// import PropsTable from './PropsTable'

const Props = props => (
  <Section name='Props'>
    <Text mb={3}>
      Every Rebass component includes several responsive style props for handling
      margin, padding, width, font size, and color.
      Based on an underlying design system with spacing and typographic scales and colors, Rebass encourages consistency in design and helps increase development velocity.
    </Text>
    <Live code={code} />
    <Box my={3}>
      <Text>
        These core props are handled with
        {' '}
        <Link href='https://github.com/jxnblk/styled-system'>
          styled-system
        </Link>.
        See the
        {' '}
        <Link
          is={RLink}
          href='/rebass/props'>
          props documentation
        </Link>
        {' '}
        for more.
      </Text>
    </Box>
  </Section>
)

const code = `<Card
  px={3}
  py={4}
  mt={2}
  mb={3}
  width={[ 1, 1/2 ]}
  fontSize={[ 4, 5, 6 ]}
  color='white'
  bg='blue'
>
  <Text>
    Hello
  </Text>
</Card>`

export default Props

import React from 'react'
import {
  Flex,
  Box,
  Text,
  Link,
  Code,
} from 'rebass'
import Live from './Live'
import Section from './Section'

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
        {`These core props are handled with `}
        <Link href='https://github.com/jxnblk/styled-system'>
          styled-system
        </Link>
        {`, and the default color palette is created with `}
        <Link href='https://github.com/jxnblk/palx'>
          Palx
        </Link>.
        {` See the `}
        <Link href='https://github.com/jxnblk/rebass/#base-props'>
          docs on GitHub
        </Link>
        {` for more.`}
      </Text>
    </Box>
  </Section>
)

const code = `<Card
  px={3}
  py={4}
  m={3}
  width={[ 1, 1/2 ]}
  fontSize={[ 4, 5, 6 ]}
  color='blue.5'
  bg='blue.0'
>
  <Text>
    Hello
  </Text>
</Card>`

export default Props

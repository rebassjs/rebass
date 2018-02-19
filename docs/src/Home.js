import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Flex,
  Lead,
  Text,
  Blockquote,
  Small,
  Link,
  BlockLink,
  Heading,
  NavLink,
  Button,
  Code,
  Pre,
  Measure,
  Truncate,
  theme,
} from 'rebass'
import { components } from './examples'
import Container from './Container'
import Live from './Live'
import Hero from './Hero'
import Footer from './Footer'

const { colors, fontSizes } = theme

const typescale = [ ...fontSizes ].reverse()
const colorKeys = Object.keys(colors)
  .filter(key => !/black|white|dark|gray/.test(key))

const Home = ({
  features,
  quotes,
  demo,
  propsCode,
  responsive,
  grid,
  config,
  customizing,
}) => (
  <React.Fragment>
    <Hero />
    <Container my={5}>
      <Box width={[ 1, null, 640 ]}>
        <Lead fontWeight='bold' fontSize={[ 3, 4 ]}>
          Rebass is a library of highly-composable, primitive UI components for React,
          built with styled-components to keep styles isolated and reduce the need to write custom CSS in your application.
          Based upon a configurable design system,
          Rebass’s props API makes building consistent, responsive web apps simpler and faster.
        </Lead>
      </Box>
    </Container>

    <Section id='Features'>
      <SectionHeading>Features</SectionHeading>
      <Flex
        flexWrap='wrap'
        mx={-3}
        mt={3}>
        {features.map(text => (
          <Box
            key={text}
            px={3}
            mb={[ 2, 3, 4 ]}
            width={[ 1, 1/2, 1/4 ]}>
            <Text fontSize={2} fontWeight='bold'>
              {text}
            </Text>
          </Box>
        ))}
      </Flex>
    </Section>

    <Container py={3}>
      <Flex
        mx={-3}
        flexWrap='wrap'>
        {quotes.map(quote => (
          <Box
            key={quote.href}
            width={[ 1, 1/2 ]}
            p={3}>
            <Blockquote fontSize={[ 2, 3 ]} fontWeight='bold'>
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

    <Section id='Demo'>
      <SectionHeading>Demo</SectionHeading>
      <Box my={3}>
        <Live code={demo} />
      </Box>
    </Section>

    <Section id='Props'>
      <SectionHeading>Props</SectionHeading>
      <Measure mb={3}>
        Each Rebass component includes responsive style props for handling margin, padding, color, and typographic styles.
        Based on an underlying design system with spacing, typographic scales, and colors,
        Rebass encourages consistency in design and helps increase development velocity.
      </Measure>
      <Live code={propsCode} />
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
            is={RouterLink}
            to='/props'>
            props documentation
          </Link>
          {' '}
          for more.
        </Text>
      </Box>
    </Section>

    <Section id='Responsive Styles'>
      <SectionHeading>Responsive Styles</SectionHeading>
      <Measure mb={3}>
        Style props for layout and typography accept arrays as values to set mobile-first responsive styles.
        The first value is not scoped to a media query and applies to all breakpoints.
        Each value after the first corresponds to a media query derived from <Code>theme.breakpoints</Code>.
      </Measure>
      <Live code={responsive} />
    </Section>

    <Section id='Colors'>
      <SectionHeading>Colors</SectionHeading>
      <Text mb={3}>
        Add your own colors to customize the default color palette.
      </Text>
      <Flex>
        {colorKeys.map(key => (
          <ColorCard
            key={key}
            name={key}
            value={colors[key]}
          />
        ))}
      </Flex>
    </Section>

    <Section id='Typographic Scale'>
      <SectionHeading>Typographic Scale</SectionHeading>
      <Measure mb={3}>
        The default typographic scale is based on a 16px base font size and is well-suited for typography that helps maintain a natural visual rhythm.
      </Measure>
      <Truncate>
        {typescale.map(f => (
          <Text
            is='span'
            key={f}
            fontSize={f}
            fontWeight='bold'
            lineHeight={1}
            mb={2}
            mr='auto'
            children={`Aa `}
          />
        ))}
      </Truncate>
    </Section>

    <Section id='Grid Styled'>
      <SectionHeading>Grid Styled</SectionHeading>
      <Text mb={3}>
        Rebass includes the <Code>{'<Flex />'}</Code> and <Code>{'<Box />'}</Code> components from <Link href='http://jxnblk.com/grid-styled'>Grid Styled</Link> for handling responsive layouts.
      </Text>
      <Live code={grid} />
    </Section>

    <Section id='Configuration'>
      <SectionHeading>Configuration</SectionHeading>
      <Text mb={3}>
        The core design system in Rebass can be configured using the
        {' '}
        <Code children='<Provider />' /> component.
      </Text>
      <Live code={config} />
    </Section>

    <Section id='Customizing'>
      <SectionHeading>Customizing</SectionHeading>
      <Text mb={3}>
        Any component can be customized by using styled-components' <Code>.extend</Code> method.
      </Text>
      <Live
        noInline
        code={customizing}
      />
    </Section>

    <Section id='Components'>
      <SectionHeading>Components</SectionHeading>
      <Flex flexWrap='wrap' mx={-2}>
        {components.map(name => (
          <Box key={name}
            w={[ 1/2, 1/3, 1/4, 1/6 ]}>
            <NavLink
              is={RouterLink}
              fontSize={0}
              py={1}
              to={'/components/' + name}
              children={name}
            />
          </Box>
        ))}
      </Flex>
    </Section>

    <Section id='Get Started' py={5}>
      <Flex flexWrap='wrap' alignItems='center'>
        <Box width={[ 1, 1/2 ]}>
          <SectionHeading>Getting Started</SectionHeading>
          <Text mb={3}>
            Install Rebass now and read the docs to get started
          </Text>
        </Box>
        <Flex
          ml='auto'
          py={3}
          alignItems='center'>
          <Pre
            ml='auto'
            mr={3}
            color='blue'>
            npm i rebass@next
          </Pre>
          <Button
            is={RouterLink}
            f={2}
            py={3}
            to='/getting-started'
            children='Getting Started'
          />
        </Flex>
      </Flex>
    </Section>

    <Footer />
  </React.Fragment>
)

Home.defaultProps = {
  features: [
    'Functional stateless UI components',
    'Style encapsulation with CSS-in-JS and styled-components',
    'No external CSS dependencies',
    'Configurable theming',
    'Extensible base components',
    'Design-system based consistency',
    'Built for responsive web design',
    'Write less custom CSS',
  ],
  quotes: [
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
  ],
demo: `<div>
  <Flex alignItems='center'>
    <Heading mr='auto'>Hello</Heading>
    <Group>
      <ButtonOutline>
        Beep
      </ButtonOutline>
      <Button>
        Boop
      </Button>
    </Group>
  </Flex>
  <Divider my={4} color='gray3' />
  <Box mb={2}>
    <Label>Name</Label>
    <Input />
  </Box>
  <Box>
    <Label>Rebass</Label>
    <Slider />
  </Box>
</div>`,
  propsCode: `<Card
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
</Card>`,
  responsive: `<Text
  width={[
    1,    // 100% width at the smallest breakpoint
    1/2,  // 50% width at the next breakpoint
    null, // null skips a breakpoint
    1/4   // 25% width at the next
  ]}
  p={2}
  children='Hello'
  color='white'
  bg='blue'
/>`,
  grid: `<Flex flexWrap='wrap' mx={-2}>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
  <Box p={2} width={[ 1, 1/2, 1/4 ]}>
    <Box p={1} color='white' bg='blue'>Box</Box>
  </Box>
</Flex>`,
  config: `<Provider
  theme={{
    fonts: {
      sans: '"Avenir Next", Helvetica, sans-serif',
    },
    fontSizes: [
      12, 16, 24, 36, 48, 72
    ]
  }}>
  <Heading fontSize={[ 2, 3, 4, 5 ]}>
    Hello
  </Heading>
</Provider>`,
  customizing: `const CustomButton = Button.extend\`
  border: 1px solid rgba(0, 0, 0, .25);
  background-image: linear-gradient(transparent, rgba(0, 0, 0, .125));
  box-shadow: 0 0 4px rgba(0, 0, 0, .25)
\`

const App = () => (
  <CustomButton>
    Hello
  </CustomButton>
)

render(<App />)
`,
}

const ColorCard = props => (
  <Box flex='1 1 auto'>
    <Box
      px={0}
      py={[ 4, 4, 5 ]}
      bg={props.value}
    />
  </Box>
)

const SectionHeading = props => (
  <Heading mb={2}>
    <BlockLink
      {...props}
      href={'#' + props.children}
    />
  </Heading>
)

const Section = props => (
  <Container
    py={4}
    {...props}
    is='section'
  />
)

export default Home

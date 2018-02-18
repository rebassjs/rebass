import React from 'react'
import {
  Provider as KitProvider,
  Library,
  Example
} from '@compositor/kit'
import {
  theme,
  Provider as RebassProvider,
  CSS,
  Flex,
  Box,
  Heading,
  Subhead,
  Button,
  ButtonOutline,
  ButtonCircle,
  ButtonTransparent,
  Link,
  NavLink,
  BlockLink,
  Text,
  Lead,
  Caps,
  Small,
  Pre,
  Code,
  Samp,
  Blockquote,
  Measure,
  Truncate,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
  Image,
  Avatar,
  BackgroundImage,
  Container,
  Row,
  Column,
  Divider,
  Border,
  Card,
  Banner,
  Panel,
  Progress,
  Message,
  Group,
  Toolbar,
  Badge,
  Circle,
  Position,
  Relative,
  Absolute,
  Fixed,
  Sticky,
  // Overlay,
  Tabs,
  Tab,
  Dot,
  Drawer,
  Tooltip,
  Close,
  Embed,
  // Star,
  Donut,
} from '../src'

const Demo = props => (
  <RebassProvider>
    <KitProvider>
      <CSS />
      <Library>
        <Library.Nav />
        <Example name='Box'>
          <Box p={3} bg='gray'> Box </Box>
        </Example>
      </Library>
      <Container py={4}>
        <Flex>
          {Object.keys(theme.colors).map(key => (
            <div key={key}>
              <Box p={4} bg={key} />
              {key}
            </div>
          ))}
        </Flex>
        <Heading>Heading</Heading>
        <Subhead>Subhead</Subhead>
        <Button>Button</Button>
        <Button is='a' href='#'>A Button</Button>
        <ButtonOutline>ButtonOutline</ButtonOutline>
        <ButtonCircle>ButtonCircle</ButtonCircle>
        <ButtonTransparent>ButtonTransparent</ButtonTransparent>
        <Link href='#'>Link</Link>
        <NavLink href='#'>NavLink</NavLink>
        <BlockLink href='#'>BlockLink</BlockLink>

        <Text>Text</Text>
        <Text fontWeight='bold'>Text bold</Text>
        <Text fontSize={9}>fontSize 9</Text>
        <Text fontSize={8}>fontSize 8</Text>
        <Text fontSize={7}>fontSize 7</Text>
        <Text fontSize={6}>fontSize 6</Text>
        <Text fontSize={5}>fontSize 5</Text>
        <Text fontSize={4}>fontSize 4</Text>
        <Text fontSize={3}>fontSize 3</Text>
        <Text fontSize={2}>fontSize 2</Text>
        <Text fontSize={1}>fontSize 1</Text>
        <Text fontSize={0}>fontSize 0</Text>

        <Lead>Lead</Lead>
        <Caps>Caps</Caps>
        <Small>Small</Small>
        <Pre>Pre</Pre>
        <Code>Code</Code>
        <Samp>Samp</Samp>
        <Blockquote>Blockquote</Blockquote>
        <Measure>Measure</Measure>
        <Truncate>Truncate</Truncate>

        <Label>Label</Label>
        <Input mb={2} defaultValue='hello' />
        <Select mb={4} defaultValue='hello'>
          <option>hello</option>
        </Select>
        <Textarea defaultValue='hello' />
        <Label>
          <Radio checked />
          Radio
        </Label>
        <Label>
          <Checkbox checked />
          Checkbox
        </Label>
        <Slider defaultValue={50} />

        <Container>
          <Subhead>Container</Subhead>
          <Image src={props.image} />
          <Divider />
          <BackgroundImage src={props.image} />
          <Avatar src={props.avatar} />
        </Container>

        <Divider />

        <Row>
          <Column bg='blue'>
            Row
          </Column>
          <Column bg='gray.9'>
            Column
          </Column>
        </Row>

        <Border m={3} p={3}>Border</Border>
        <Card m={3}>Card</Card>
        <Banner src={props.image}>
          <Heading>Banner</Heading>
        </Banner>

        <Progress value={0.5} my={3} />

        <Message>
          Message
          <Box m='auto' />
          <Close />
        </Message>
        <Group m={3}>
          <Input defaultValue='Group' />
          <Input />
        </Group>

        <Toolbar>
          <Caps>Toolbar</Caps>
          <Box mx='auto' />
          <NavLink mx={2} href='#'>Link</NavLink>
          <NavLink mx={2} href='#'>Link</NavLink>
        </Toolbar>

        <Badge>Badge</Badge>
        <Circle>A</Circle>

        <Relative p={3}>
          <Text>Relative</Text>
          <Absolute right={0}>
            Absolute
          </Absolute>
        </Relative>

        <Tabs m={3}>
          <Tab
            href='#'
            color='blue'
            borderColor='blue'>
            Tabs
          </Tab>
          <Tab href='#'>
            Tab
          </Tab>
          <Tab href='#'>
            Tab
          </Tab>
        </Tabs>
        <Box p={3}>
          <Dot href='#' bg='black' />
          <Dot href='#' />
          <Dot href='#' />
        </Box>

        <Drawer
          open={false}
          size={128}
          position='bottom'>
          Drawer
        </Drawer>

        <Tooltip text='Hello!'>
          Tooltip
        </Tooltip>


        <Embed>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1'
            frameBorder='0'
            allowFullScreen
          />
        </Embed>

        <Panel m={3}>
          <Panel.Header>Panel.Header</Panel.Header>
          <Box p={2}>
            Panel
          </Box>
          <Panel.Footer>Panel.Footer</Panel.Footer>
        </Panel>

        {/* Fixed, Sticky */}
        {false && (
          <Overlay width={.5} p={5}>
            Overlay
          </Overlay>
        )}

        <Donut value={0.33} strokeWidth={4} />
      </Container>
    </KitProvider>
  </RebassProvider>
)

Demo.defaultProps = {
  avatar: 'http://jxnblk.com/avatar/avatar-640.png',
  image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20'
}

export default Demo

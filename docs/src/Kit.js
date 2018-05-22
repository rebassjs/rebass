import React from 'react'
import connect from 'refunk'
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
  Overlay as Modal,
  // Modal,
  Tabs,
  Tab,
  Dot,
  Drawer,
  Tooltip,
  Close,
  Embed,
  // Star,
  Donut,
} from '../../src'

const colors = (
  <Example name='Colors'>
    <Flex>
      {Object.keys(theme.colors).map(key => (
        <div key={key}>
          <Box p={4} bg={key} />
          {key}
        </div>
      ))}
    </Flex>
  </Example>
)

const Demo = connect(props => (
  <React.Fragment>
    <head>
      <title>Rebass Demo</title>
    </head>
    <RebassProvider>
      <KitProvider>
        <CSS />
        <Library>
          <Library.Nav />
          <Example name='Box'>
            <Box p={3} bg='gray'> Box </Box>
          </Example>
          <Example name='Heading'>
            <Heading>Heading</Heading>
          </Example>
          <Example name='Subhead'>
            <Subhead>Subhead</Subhead>
          </Example>
          <Example name='Button'>
            <Button>Button</Button>
          </Example>
          <Example name='Button a'>
            <Button is='a' href='#'>A Button</Button>
          </Example>
          <Example name='ButtonOutline'>
            <ButtonOutline>ButtonOutline</ButtonOutline>
          </Example>
          <Example name='ButtonCircle'>
            <ButtonCircle>ButtonCircle</ButtonCircle>
          </Example>
          <Example name='ButtonTransparent'>
            <ButtonTransparent>ButtonTransparent</ButtonTransparent>
          </Example>
          <Example name='Link'>
            <Link href='#'>Link</Link>
          </Example>
          <Example name='NavLink'>
            <NavLink href='#'>NavLink</NavLink>
          </Example>
          <Example name='BlockLink'>
            <BlockLink href='#'>BlockLink</BlockLink>
          </Example>
          <Example name='Close'>
            <Close />
          </Example>

          <Example name='Text'>
            <Text>Text</Text>
          </Example>
          <Example name='Text bold'>
            <Text fontWeight='bold'>Text bold</Text>
          </Example>
          <Example name='Font Sizes'>
            <div>
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
            </div>
          </Example>

          <Example name='Lead'>
            <Lead>Lead</Lead>
          </Example>
          <Example name='Caps'>
            <Caps>Caps</Caps>
          </Example>
          <Example name='Small'>
            <Small>Small</Small>
          </Example>
          <Example name='Pre'>
            <Pre>Pre</Pre>
          </Example>
          <Example name='Code'>
            <Code>Code</Code>
          </Example>
          <Example name='Samp'>
            <Samp>Samp</Samp>
          </Example>
          <Example name='Blockquote'>
            <Blockquote>Blockquote</Blockquote>
          </Example>
          <Example name='Measure'>
            <Measure>Measure</Measure>
          </Example>
          <Example name='Truncate'>
            <Truncate>Truncate</Truncate>
          </Example>

          <Example name='Label'>
            <Label>Label</Label>
          </Example>
          <Example name='Input'>
            <Input mb={2} defaultValue='hello' />
          </Example>
          <Example name='Select'>
            <Select mb={4} defaultValue='hello'>
              <option>hello</option>
            </Select>
          </Example>
          <Example name='Textarea'>
            <Textarea
              rows={8}
              defaultValue='hello'
            />
          </Example>
          <Example name='Radio'>
            <Label>
              <Radio checked />
              Radio
            </Label>
          </Example>
          <Example name='Checkbox'>
            <Label>
              <Checkbox checked />
              Checkbox
            </Label>
          </Example>
          <Example name='Slider'>
            <Slider
              value={props.value}
              min={0}
              max={1}
              step={1/32}
              onChange={e => {
                const n = parseFloat(e.target.value)
                props.update({
                  value: n
                })
              }}
            />
          </Example>
          <Example name='Image'>
            <Image src={props.image} />
          </Example>
          <Example name='BackgroundImage'>
            <BackgroundImage src={props.image} />
          </Example>
          <Example name='Avatar'>
            <Avatar src={props.avatar} />
          </Example>
          <Example name='Progress'>
            <Progress value={props.value} my={3} />
          </Example>
          <Example name='Divider'>
            <Divider />
          </Example>

          <Example name='Container'>
            <Container>Container</Container>
          </Example>
          <Example name='Row'>
            <Row>
              <Column bg='blue'>
                Row
              </Column>
              <Column bg='gray.9'>
                Column
              </Column>
            </Row>
          </Example>
          <Example name='Column'>
            <Column bg='blue'>
              Column
            </Column>
          </Example>

          <Example name='Border'>
            <Border m={3} p={3}>Border</Border>
          </Example>
          <Example name='Card'>
            <Card m={3}>Card</Card>
          </Example>
          <Example name='Banner'>
            <Banner src={props.image}>
              <Heading>Banner</Heading>
            </Banner>
          </Example>
          <Example name='Message'>
            <Message>
              Message
              <Box m='auto' />
              <Close />
            </Message>
          </Example>
          <Example name='Group'>
            <Group m={3}>
              <Input defaultValue='Group' />
              <Input />
            </Group>
          </Example>
          <Example name='Toolbar'>
            <Toolbar>
              <Caps>Toolbar</Caps>
              <Box mx='auto' />
              <NavLink mx={2} href='#'>Link</NavLink>
              <NavLink mx={2} href='#'>Link</NavLink>
            </Toolbar>
          </Example>
          <Example name='Badge'>
            <Badge>Badge</Badge>
          </Example>
          <Example name='Circle'>
            <Circle>A</Circle>
          </Example>
          <Example name='Relative'>
            <Relative p={3}>
              Relative
            </Relative>
          </Example>
          <Example name='Absolute'>
            <Relative p={3}>
              <Text>Relative</Text>
              <Absolute right={0}>
                Absolute
              </Absolute>
            </Relative>
          </Example>
          <Example name='Fixed'>
            <Relative p={3}>
              <Fixed right={0}>
                Fixed
              </Fixed>
            </Relative>
          </Example>
          <Example name='Tabs'>
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
          </Example>
          <Example name='Dot'>
            <Box p={3}>
              <Dot href='#' bg='black' />
              <Dot href='#' />
              <Dot href='#' />
            </Box>
          </Example>
          <Example name='Drawer'>
            <Button onClick={e => props.update(toggle('drawer'))}>
              {props.drawer ? 'Close' : 'Open'}
            </Button>
            <Drawer
              open={props.drawer}
              size={128}
              position='bottom'>
              Drawer
            </Drawer>
          </Example>
          <Example name='Tooltip'>
            <Tooltip text='Hello!'>
              Tooltip
            </Tooltip>
          </Example>
          <Example name='Embed'>
            <Embed>
              <iframe
                width='560'
                height='315'
                src='https://www.youtube.com/embed/KQ6zr6kCPj8?ecver=1'
                frameBorder='0'
                allowFullScreen
              />
            </Embed>
          </Example>
          <Example name='Panel'>
            <Panel m={3}>
              <Panel.Header>Panel.Header</Panel.Header>
              <Box p={2}>
                Panel
              </Box>
              <Panel.Footer>Panel.Footer</Panel.Footer>
            </Panel>
          </Example>
          <Example name='Modal'>
            <Button onClick={e => props.update(toggle('modal'))}>
              {props.modal ? 'Close' : 'Open'}
            </Button>
            {props.modal && (
              <Modal
                onClick={e => props.update(toggle('modal'))}
                width={.5}
                p={5}>
                Modal
              </Modal>
            )}
          </Example>
          <Example name='Donut'>
            <Donut
              value={props.value}
              strokeWidth={4}
            />
          </Example>
        </Library>
      </KitProvider>
    </RebassProvider>
  </React.Fragment>
))

Demo.defaultProps = {
  avatar: 'http://jxnblk.com/avatar/avatar-640.png',
  image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
  value: 1/3,
  drawer: false,
  modal: false
}

const toggle = key => state => ({ [key]: !state[key] })

export default Demo

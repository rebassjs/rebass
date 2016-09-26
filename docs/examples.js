
import React from 'react'
import Icon from 'react-geomicons'
import { Flex, Box } from 'reflexbox'

import {
  Arrow,
  Avatar,
  Badge,
  Banner,
  Block,
  Blockquote,
  Breadcrumbs,
  Button,
  ButtonCircle,
  ButtonOutline,
  Card,
  CardImage,
  Carousel,
  Checkbox,
  Close,
  Container,
  Divider,
  Donut,
  DotIndicator,
  Dropdown,
  DropdownMenu,
  Embed,
  Fixed,
  Footer,
  Group,
  Heading,
  InlineForm,
  Input,
  Label,
  LinkBlock,
  List,
  Media,
  Menu,
  Message,
  NavItem,
  Overlay,
  PageHeader,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Progress,
  Radio,
  Rating,
  Section,
  SectionHeader,
  Select,
  SequenceMap,
  SequenceMapStep,
  Slider,
  Space,
  Stat,
  Switch,
  Table,
  Text,
  Textarea,
  Toolbar,
  Tooltip,
  Base
} from '../src'

const examples = {
  Arrow: (
    <Button>
      Arrow
      <Arrow />
    </Button>
  ),
  Avatar: (
    <Avatar src='http://lorempixel.com/64/64/cats' />
  ),
  Badge: (
    <Flex align='baseline'>
      <Heading level={4} children='Rebass' />
      <Space />
      <Badge colorTheme='info' children='0.2.0' />
      <Space x={2} />
      <Heading level={4} children='Pill' />
      <Space />
      <Badge pill colorTheme='info' children='Pill' />
      <Space x={2} />
      <Heading level={4} children='Circular' />
      <Space />
      <Badge circle colorTheme='error' children='4' />
    </Flex>
  ),
  Banner: (
    <Banner
      style={{
        minHeight: '60vh'
      }}
      backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
      <Heading size={0} children='Rebass' />
    </Banner>
  ),
  Block: (
    <Block
      px={2}
      borderLeft
      color='blue'>
      <Media img='http://placehold.it/128/08e/fff'>
        <Heading size={0}>Block</Heading>
        <Text>Generic box for containing things</Text>
      </Media>
    </Block>
  ),
  Blockquote: (
    <Blockquote
      href='http://webtypography.net/3.1.1'
      source='Robert Bringhurst'>
      In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
    </Blockquote>
  ),
  Breadcrumbs: (
    <Breadcrumbs
      links={[
        { href: '#!', children: 'Jxnblk' },
        { href: '#!', children: 'Rebass' },
        { href: '#!', children: 'Breadcrumbs' }
      ]} />
  ),
  Button: (
    <div>
      <Button children='Button' />
    </div>
  ),
  ButtonCircle: (
    <Flex
      wrap
      align='center'
      justify='space-between'>
      <ButtonCircle title='Like'>
        <Icon name='heart' />
      </ButtonCircle>
      <ButtonCircle title='Comment'>
        <Icon name='chat' />
      </ButtonCircle>
      <ButtonCircle title='Repost'>
        <Icon name='repost' />
      </ButtonCircle>
      <ButtonCircle title='Bookmark'>
        <Icon name='bookmark' />
      </ButtonCircle>
      <ButtonCircle title='Tag'>
        <Icon name='tag' />
      </ButtonCircle>
      <Text small children='Example Icon component from react-geomicons' />
    </Flex>
  ),
  ButtonOutline: (
    <div>
      <ButtonOutline
        rounded='left'
        children='Button' />
      <ButtonOutline
        rounded={false}
        style={{ marginLeft: -1 }}
        children='Group' />
      <ButtonOutline
        active
        rounded='right'
        style={{ marginLeft: -1 }}
        children='Button' />
    </div>
  ),
  Card: (
    <Card width={256}>
      <CardImage src='http://placehold.it/320/08e/fff' />
      <Heading size={3} children='Card' />
      <Text>Cats like cards too</Text>
    </Card>
  ),
  CardImage: (
    <div style={{ maxWidth: 192 }}>
      <CardImage src='http://placehold.it/320/08e/fff' />
    </div>
  ),
  Carousel: (
    <Carousel index={1 / 16}>
      <Block
        p={4}
        color='white'
        backgroundColor='blue'>
        One
      </Block>
      <Block
        p={4}
        color='white'
        backgroundColor='black'>
        Two
      </Block>
    </Carousel>
  ),
  Checkbox: (
    <div>
      <Checkbox
        name='checkbox_1'
        label='Checkbox' />
      <Checkbox
        checked
        readOnly
        colorTheme='success'
        name='checkbox_1'
        label='Checkbox' />
    </div>
  ),
  Close: (
    <Close />
  ),
  Container: (
    <Container>
      Container
    </Container>
  ),
  Divider: (
    <div>
      <Divider />
      <Divider
        ml={0}
        width={128} />
    </div>
  ),
  Donut: (
    <Flex align='center' justify='space-between' wrap>
      <Donut value={9/16} size={256} strokeWidth={32} />
      <Donut value={9/16} children='9/16' />
      <Donut value={5/8} />
      <Donut value={1/8} />
    </Flex>
  ),
  DotIndicator: (
    <div>
      <DotIndicator
        length={3}
        active={0} />
    </div>
  ),
  Drawer: (
    <a href='demo'>See demo</a>
  ),
  Dropdown: (
    <Dropdown>
      <Button>
        Dropdown <Arrow />
      </Button>
      <DropdownMenu open={false}>
        <NavItem children='Hello' />
        <NavItem children='Hi' />
      </DropdownMenu>
    </Dropdown>
  ),
  DropdownMenu: (
    <Dropdown>
      <Button>
        Dropdown <Arrow />
      </Button>
      <DropdownMenu open
        style={{
          overlay: {
            position: 'static'
          }
        }}>
        <NavItem children='Hello' />
        <NavItem children='Hi' />
      </DropdownMenu>
    </Dropdown>
  ),
  Embed: (
    <Embed ratio={9/16}>
      <iframe
        src='https://www.youtube.com/embed/BoEKWtgJQAU'
        allowFullScreen />
    </Embed>
  ),
  Fixed: (
    <a href='demo'>See demo</a>
  ),
  Footer: (
    <Footer>
      Footer™ ©2016 Jxnblk
    </Footer>
  ),
  Group: (
    <Group>
      <Input
        name='grouped-input'
        label='Grouped' />
      <Button children='Go' />
    </Group>
  ),
  Heading: (
    <Heading children='Heading' />
  ),
  HeadingLink: (
    <Heading href='#HeadingLink' children='HeadingLink' />
  ),
  InlineForm: (
    <InlineForm
      name='inline_form'
      label='InlineForm' />
  ),
  Input: (
    <Input
      name='input_example'
      placeholder='Placeholder'
      label='Input' />
  ),
  Label: (
    <Label>
      Label for form elements
    </Label>
  ),
  LinkBlock: (
    <LinkBlock href='#LinkBlock'>
      <Media align='center' img='http://placehold.it/96/08e/fff'>
        <Heading level={3} children='LinkBlock' />
      </Media>
    </LinkBlock>
  ),
  List: (
    <List>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
      <Text>Four</Text>
    </List>
  ),
  Media: (
    <Media img='http://placehold.it/128/08e/fff' align='center'>
      <Heading level={3} children='Media Object' />
      <Text children='With alignment options' />
    </Media>
  ),
  Menu: (
    <Menu>
      <NavItem children='Menu' />
      <NavItem children='NavItem' />
      <NavItem children='NavItem' />
    </Menu>
  ),
  Message: (
    <div>
      <Message colorTheme='success'>
        Hello Message!
        <Space auto />
        <Close />
      </Message>
      <Message colorTheme='info'>
        Hello Message!
      </Message>
      <Message colorTheme='error'>
        Hello Message!
      </Message>
    </div>
  ),
  NavItem: (
    <Flex>
      <NavItem
        href='#!'
        children='NavItem' />
      <NavItem
        href='#!'
        children='NavItem' />
    </Flex>
  ),
  Overlay: (
    <a href='demo'>See demo</a>
  ),
  PageHeader: (
    <PageHeader
      heading='Page Header'
      description='Description about the page' />
  ),
  Panel: (
    <Panel colorTheme='info'>
      <PanelHeader children='Panel' />
      <Text>
        Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
      <PanelFooter children='The footer is a good place for less important information' />
    </Panel>
  ),
  PanelFooter: (
    <PanelFooter>
      PanelFooter
    </PanelFooter>
  ),
  PanelHeader: (
    <PanelHeader>
      PanelHeader
    </PanelHeader>
  ),
  Pre: (
    <Pre children={`const pre = { preformatted: 'text' }`} />
  ),
  Progress: (
    <Progress value={0.25} />
  ),
  Radio: (
    <div>
      <Radio
        checked
        readOnly
        name='radio_1'
        label='Radio' />
      <Radio
        name='radio_1'
        label='Radio' />
    </div>
  ),
  Rating: (
    <Rating value={3.5} />
  ),
  Section: (
    <Section>
      Section
    </Section>
  ),
  SectionHeader: (
    <Section>
      <SectionHeader
        heading='Section Header'
        description='With linked header' />
      Section
    </Section>
  ),
  Select: (
    <Select
      name='select_example'
      label='Select'
      options={[
        { value: 2, children: 'Two' },
        { value: 4, children: 'Four' },
        { value: 8, children: 'Eight' },
        { value: 16, children: 'Sixteen' },
        { value: 32, children: 'Thirty-Two' },
        { value: 64, children: 'Sixty-Four' }
      ]} />
  ),
  SequenceMap: (
    <SequenceMap
      steps={[
        { href: '#!', children: 'Sign In' },
        { href: '#!', children: 'Shipping Address' },
        { href: '#!', children: 'Payment Method' },
        { href: '#!', children: 'Place Order' }
      ]}
      active={1} />
  ),
  SequenceMapStep: (
    <SequenceMapStep
      first
      href='#!'
      children='Step' />
  ),
  Slider: (
    <div>
      <Slider
        name='slider_1'
        label='Slider'
        defaultValue={3/8 * 100} />
      <Slider
        fill
        color='blue'
        name='slider_2'
        label='Slider with color and fill'
        readOnly
        value={5/8 * 100} />
    </div>
  ),
  Space: (
    <div>
      <Button children='Button' />
      <Space />
      <Button children='With' />
      <Space x={4} />
      <Button children='Space' />
    </div>
  ),
  Stat: (
    <Flex wrap justify='space-between'>
      <Stat value='512' unit='GB' label='Memory' />
      <Stat value='32' label='PetaFLOPS' />
      <Stat value='512' unit='Mbps' label='Upload' />
      <Stat value='1,024' unit='Mbps' label='Download' />
    </Flex>
  ),
  Switch: (
    <div>
      <Switch checked mr={2}/>
      <Switch />
    </div>
  ),
  Table: (
    <Table
      headings={[ 'Name', 'Meat', 'Vegetable', 'Carb' ]}
      data={[
        ['Hamburger', 'Beef', 'Onion', 'Bun'],
        ['Pizza', 'Pork', 'Tomato', 'Crust'],
        ['Corndog', 'Pork', 'Corn', 'Cornbread'],
        ['Hot Dog', 'Pork', 'Peppers', 'Bun'],
      ]} />
  ),
  Text: (
    <Text>Hello</Text>
  ),
  Textarea: (
    <Textarea
      name='textarea'
      label='Textarea'
      defaultValue='Hello'
    />
  ),
  Toolbar: (
    <Toolbar>
      <NavItem children='Toolbar' />
      <NavItem children='NavItem' />
      <Space auto />
      <NavItem children='NavItem' />
    </Toolbar>
  ),
  Tooltip: (
    <Tooltip title='Hello!'>
      <Heading level={3}>Tooltip</Heading>
    </Tooltip>
  ),
  Base: (
    <Base
      p={2}
      mb={3}
      color='blue'
      backgroundColor='black'
      rounded
      children='Base' />
  )
}

export default examples


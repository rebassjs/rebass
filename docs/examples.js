
import React from 'react'
import Icon from 'react-geomicons'
import assign from 'object-assign'
import { Link } from 'react-router'
import Reline, { Chevron, X, Plus, Minus } from 'reline'
import { Flex, Box } from 'reflexbox'

import {
  Arrow,
  AspectRatio,
  Avatar,
  Badge,
  Banner,
  Bar,
  Block,
  Blockquote,
  BoxShadow,
  Breadcrumbs,
  Button,
  ButtonCircle,
  ButtonOutline,
  Card,
  CardImage,
  Carousel,
  Checkbox,
  Circle,
  Close,
  Container,
  Divider,
  Donut,
  DotIndicator,
  Drawer,
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
  SignInForm,
  Slider,
  Space,
  Stat,
  Switch,
  Table,
  Tabs,
  TabItem,
  Text,
  Textarea,
  Toolbar,
  Tooltip,
  Base
} from '../src'

export const filterNull = obj => {
  return Object.keys(obj).reduce((a, key) => {
    if (obj[key] !== null && obj[key] !== undefined) {
      a[key] = obj[key]
    }
    return a
  }, {})
}

const getProps = ({
  m,
  p,
  rounded,
  pill,
  color,
  backgroundColor
}) => {
  return filterNull({
    m,
    p,
    rounded,
    pill,
    color,
    backgroundColor
  })
}

export const defaultProps = {
  text: 'Hello',
  number: 16,
  image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20',
  theme: null,

  open: false,
  update: () => {}
}

export const examples = {
  Arrow: ({ text, ...rest }) => (
    <Button>
      {text}
      <Arrow {...getProps(rest)} />
    </Button>
  ),
  AspectRatio: ({ text, image, ...rest }) => (
    <div
      style={{
        maxWidth: 512
      }}>
      <AspectRatio
        ratio={9/16}
        {...getProps(rest)}>
        <Card>
          {text}
        </Card>
      </AspectRatio>
    </div>
  ),
  Avatar: ({ image, ...rest }) => (
    <Avatar {...getProps(rest)} src={image} />
  ),
  Badge: ({ theme, ...rest }) => (
    <Flex align='baseline'>
      <Heading level={4} children='Rebass' />
      <Space />
      <Badge theme={theme} {...getProps(rest)} children='0.4.0' />
      <Space x={2} />
      <Heading level={4} children='Pill' />
      <Space />
      <Badge pill theme={theme} {...getProps(rest)} children='Pill' />
      <Space x={2} />
      <Heading level={4} children='Circular' />
      <Space />
      <Badge circle theme={theme} {...getProps(rest)} children='4' />
    </Flex>
  ),
  Banner: ({ text, image, ...rest }) => (
    <Banner
      {...getProps(rest)}
      style={{
        minHeight: '60vh'
      }}
      backgroundImage={image}>
      <Heading size={0} children={text} />
    </Banner>
  ),
  Bar: ({ text, ...rest }) => (
    <div>
      <Bar {...getProps(rest)} value={1/4}>{text}</Bar>
      <Bar {...getProps(rest)} value={7/8}>87.5%</Bar>
    </div>
  ),
  Block: ({ text, image, theme, ...rest }) => (
    <Block
      {...getProps(rest)}
      px={2}
      borderLeft
      color={theme}>
      <Media img={image}
        imgWidth={128}
        imgHeight={128}>
        <Heading size={0}>{text}</Heading>
        <Text>Generic box for containing things</Text>
      </Media>
    </Block>
  ),
  Blockquote: ({ ...rest }) => (
    <Blockquote
      {...getProps(rest)}
      href='http://webtypography.net/3.1.1'
      source='Robert Bringhurst'>
      In the sixteenth century, a series of common sizes developed among European typographers, and the series survived with little change and few additions for 400 years. […] Use the old familiar scale, or use new scales of your own devising, but limit yourself, at first, to a modest set of distinct and related intervals.
    </Blockquote>
  ),
  BoxShadow: ({ text, ...rest }) => (
    <BoxShadow {...getProps(rest)}>
      <Block rounded p={3}>{text}</Block>
    </BoxShadow>
  ),
  Breadcrumbs: ({ ...rest }) => (
    <Breadcrumbs
      {...getProps(rest)}
      links={[
        { href: '#!', children: 'Jxnblk' },
        { href: '#!', children: 'Rebass' },
        { href: '#!', children: 'Breadcrumbs' }
      ]} />
  ),
  Button: ({ text, theme, ...rest }) => (
    <div>
      <Button {...getProps(rest)} theme={theme} children={text} />
    </div>
  ),
  ButtonCircle: ({ theme, ...rest }) => (
    <div>
      <Flex
        wrap
        align='center'
        mb={1}
        justify='space-between'>
        <ButtonCircle theme={theme} {...getProps(rest)} title='More'>
          <Chevron />
        </ButtonCircle>
        <ButtonCircle theme={theme} {...getProps(rest)} title='Next'>
          <Reline.Arrow />
        </ButtonCircle>
        <ButtonCircle theme={theme} {...getProps(rest)} title='Dismiss'>
          <X />
        </ButtonCircle>
        <ButtonCircle theme={theme} {...getProps(rest)} title='Add'>
          <Plus />
        </ButtonCircle>
        <ButtonCircle theme={theme} {...getProps(rest)} title='Remove'>
          <Minus />
        </ButtonCircle>
      </Flex>
      <Text small children='Example Icon components from Reline' />
    </div>
  ),
  ButtonOutline: ({ text, theme, ...rest }) => (
    <Group>
      <ButtonOutline
        {...getProps(rest)}
        theme={theme}
        children={text} />
      <ButtonOutline
        {...getProps(rest)}
        theme={theme}
        children={text} />
      <ButtonOutline
        {...getProps(rest)}
        theme={theme}
        active
        children={text} />
    </Group>
  ),
  Card: ({ text, image, ...rest }) => (
    <Card
      {...getProps(rest)}
      width={256}>
      <CardImage src={image} />
      <Heading size={3} children={text} />
      <Text>Cats like cards too</Text>
    </Card>
  ),
  CardImage: ({ image, ...rest }) => (
    <div style={{ maxWidth: 192 }}>
      <CardImage
        {...getProps(rest)}
        src={image} />
    </div>
  ),
  Carousel: ({ text, ...rest }) => (
    <Carousel
      {...getProps(rest)}
      index={1 / 16}>
      <Block
        p={4}
        color='white'
        backgroundColor='blue'>
        {text}
      </Block>
      <Block
        p={4}
        color='white'
        backgroundColor='black'>
        {text}
      </Block>
    </Carousel>
  ),
  Checkbox: ({ text, theme, open, update, ...rest }) => (
    <div>
      <Checkbox
        {...getProps(rest)}
        theme={theme}
        checked={open}
        onClick={e => { update({ open: !open }) }}
        name='checkbox_1'
        label={text} />
    </div>
  ),
  Circle: ({ theme, ...rest }) => (
    <Circle
      {...getProps(rest)}
      theme={theme}
      children='4' />
  ),
  Close: ({ ...rest }) => (
    <Close {...getProps(rest)} />
  ),
  Container: ({ text, ...rest }) => (
    <Container {...getProps(rest)}>
      {text}
    </Container>
  ),
  Divider: ({ ...rest }) => (
    <div>
      <Divider {...getProps(rest)} />
      <Divider
        {...getProps(rest)}
        ml={0}
        width={128} />
    </div>
  ),
  Donut: ({ ...rest }) => (
    <Donut
      {...getProps(rest)}
      value={9/16}
      size={256}
      strokeWidth={32} />
  ),
  DotIndicator: ({ ...rest }) => (
    <div>
      <DotIndicator
        {...getProps(rest)}
        length={3}
        active={0} />
    </div>
  ),
  Drawer: ({ text, open, update, ...rest }) => (
    <div>
      <Button onClick={e => { update({ open: !open }) }} children='Open' />
      <Drawer
        {...getProps(rest)}
        open={open}
        onDismiss={e => { update({ open: false }) }}>
        {text}
      </Drawer>
    </div>
  ),
  Dropdown: ({ text, open, update, ...rest }) => (
    <Dropdown {...getProps(rest)}>
      <Button onClick={e => { update({ open: !open }) }}>
        {text} <Arrow />
      </Button>
      <DropdownMenu
        open={open}
        onDismiss={e => { update({ open: false }) }}>
        <NavItem children='Hello' />
        <NavItem children='Hi' />
      </DropdownMenu>
    </Dropdown>
  ),
  DropdownMenu: ({ text, open, update, ...rest }) => (
    <Dropdown>
      <Button onClick={e => { update({ open: !open }) }}>
        {text} <Arrow />
      </Button>
      <DropdownMenu
        {...getProps(rest)}
        open={open}
        onDismiss={e => { update({ open: false }) }}
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
  Embed: ({ ...rest }) => (
    <Embed
      {...getProps(rest)}
      ratio={9/16}>
      <iframe
        src='https://www.youtube.com/embed/BoEKWtgJQAU'
        allowFullScreen />
    </Embed>
  ),
  Fixed: ({ ...rest }) => (
    <div />
  ),
  Footer: ({ ...rest }) => (
    <Footer {...getProps(rest)}>
      Footer™ ©2016 Jxnblk
    </Footer>
  ),
  Group: ({ text, ...rest }) => (
    <Group {...getProps(rest)}>
      <Input
        name='grouped-input'
        label='Grouped'
      />
      <Button children={text} />
    </Group>
  ),
  Heading: ({ text, ...rest }) => (
    <Heading
      {...getProps(rest)}
      children={text} />
  ),
  HeadingLink: ({ text, ...rest }) => (
    <Heading
      {...getProps(rest)}
      href='#HeadingLink'
      children={text} />
  ),
  InlineForm: ({ ...rest }) => (
    <InlineForm
      {...getProps(rest)}
      name='inline_form'
      label='InlineForm' />
  ),
  Input: ({ text, theme, update, ...rest }) => (
    <Input
      {...getProps(rest)}
      name='input_example'
      placeholder='Placeholder'
      label='Input'
      value={text}
      theme={theme}
      onChange={e => { update({ text: e.target.value }) }}
    />
  ),
  Label: ({ ...rest }) => (
    <Label {...getProps(rest)}>
      Label for form elements
    </Label>
  ),
  LinkBlock: ({ text, image, ...rest }) => (
    <LinkBlock {...getProps(rest)} href='#LinkBlock'>
      <Media
        align='center'
        img={image}
        imgWidth={128}
        imgHeight={128}>
        <Heading level={3} children={text} />
      </Media>
    </LinkBlock>
  ),
  List: ({ ...rest }) => (
    <List {...getProps(rest)}>
      <Text>One</Text>
      <Text>Two</Text>
      <Text>Three</Text>
      <Text>Four</Text>
    </List>
  ),
  Media: ({ text, image, ...rest }) => (
    <Media
      {...getProps(rest)}
      img={image}
      imgWidth={128}
      imgHeight={128}
      align='center'>
      <Heading level={3} children={text} />
      <Text children='With alignment options' />
    </Media>
  ),
  Menu: ({ ...rest }) => (
    <Menu {...getProps(rest)}>
      <NavItem children='Menu' />
      <NavItem children='NavItem' />
      <NavItem children='NavItem' />
    </Menu>
  ),
  Message: ({ theme, ...rest }) => (
    <div>
      <Message
        theme={theme}
        {...getProps(rest)}>
        Hello Message!
        <Space auto />
        <Close />
      </Message>
    </div>
  ),
  NavItem: ({ ...rest }) => (
    <Flex>
      <NavItem
        {...getProps(rest)}
        href='#!'
        children='NavItem' />
      <NavItem
        {...getProps(rest)}
        href='#!'
        children='NavItem' />
    </Flex>
  ),
  Overlay: ({ text, open, update, ...rest }) => (
    <div>
      <Button onClick={e => { update({ open: !open }) }} children='Open' />
      <Overlay
        {...getProps(rest)}
        open={open}
        box
        onDismiss={e => { update({ open: false }) }}>
        {text}
      </Overlay>
    </div>
  ),
  PageHeader: ({ text, ...rest }) => (
    <PageHeader
      {...getProps(rest)}
      heading={text}
      description='Description about the page' />
  ),
  Panel: ({ text, theme, ...rest }) => (
    <Panel
      theme={theme}
      {...getProps(rest)}>
      <PanelHeader children={text} />
      <Text>
        Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
      <PanelFooter children='The footer is a good place for less important information' />
    </Panel>
  ),
  PanelFooter: ({ ...rest }) => (
    <PanelFooter
      {...getProps(rest)}>
      PanelFooter
    </PanelFooter>
  ),
  PanelHeader: ({ theme, ...rest }) => (
    <PanelHeader
      theme={theme}
      {...getProps(rest)}>
      PanelHeader
    </PanelHeader>
  ),
  Pre: ({ ...rest }) => (
    <Pre
      {...getProps(rest)}
      children={`const pre = { preformatted: 'text' }`} />
  ),
  Progress: ({ ...rest }) => (
    <Progress
      value={0.25}
      {...getProps(rest)} />
  ),
  Radio: ({ open, update, ...rest }) => (
    <div>
      <Radio
        {...getProps(rest)}
        checked={open}
        onClick={e => { update({ open: !open }) }}
        name='radio_1'
        label='Radio One' />
      <Radio
        {...getProps(rest)}
        checked={!open}
        onClick={e => { update({ open: !open }) }}
        name='radio_1'
        label='Radio Two' />
    </div>
  ),
  Rating: ({ ...rest }) => (
    <Rating {...getProps(rest)} value={3.5} />
  ),
  Section: ({ ...rest }) => (
    <Section {...getProps(rest)}>
      Section
    </Section>
  ),
  SectionHeader: ({ ...rest }) => (
    <Section>
      <SectionHeader
        {...getProps(rest)}
        heading='Section Header'
        description='With linked header' />
      Section
    </Section>
  ),
  Select: ({ ...rest }) => (
    <Select
      {...getProps(rest)}
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
  SequenceMap: ({ ...rest }) => (
    <SequenceMap
      {...getProps(rest)}
      steps={[
        { href: '#!', children: 'Sign In' },
        { href: '#!', children: 'Shipping Address' },
        { href: '#!', children: 'Payment Method' },
        { href: '#!', children: 'Place Order' }
      ]}
      active={1} />
  ),
  SequenceMapStep: ({ ...rest }) => (
    <SequenceMapStep
      {...getProps(rest)}
      first
      href='#!'
      children='Step' />
  ),
  SignInForm: ({ text, open, update, ...rest }) => (
    <SignInForm
      username={text}
      password=''
      remember={open}
      onChange={e => {
        let { name, value } = e.target
        let key
        if (name === 'username') {
          key = 'text'
        } else if (name === 'remember') {
          key = 'open'
          value = !open
        }
        update({ [key]: value })
      }}
    />
  ),
  Slider: ({ number, theme, update, ...rest }) => (
    <div>
      <Slider
        {...getProps(rest)}
        fill
        name='slider_1'
        label='Slider'
        value={number}
        onChange={e => { update({ number: parseInt(e.target.value) }) }}
      />
    </div>
  ),
  Space: ({ ...rest }) => (
    <div>
      <Button children='Button' />
      <Space {...getProps(rest)} />
      <Button children='With' />
      <Space x={4} />
      <Button children='Space' />
    </div>
  ),
  Stat: ({ text, number, ...rest }) => (
    <Stat
      {...getProps(rest)}
      value={number}
      unit='GB'
      label={text} />
  ),
  Switch: ({ open, update, ...rest }) => (
    <Switch
      {...getProps(rest)}
      checked={open}
      onClick={e => { update({ open: !open }) }}
      mr={2}/>
  ),
  Table: ({ ...rest }) => (
    <Table
      {...getProps(rest)}
      headings={[ 'Name', 'Meat', 'Vegetable', 'Carb' ]}
      data={[
        ['Hamburger', 'Beef', 'Onion', 'Bun'],
        ['Pizza', 'Pork', 'Tomato', 'Crust'],
        ['Corndog', 'Pork', 'Corn', 'Cornbread'],
        ['Hot Dog', 'Pork', 'Peppers', 'Bun'],
      ]} />
  ),
  Tabs: ({ text, update, ...rest }) => (
    <Tabs
      {...getProps(rest)}>
      <TabItem
        active={text === 'Tabs'}
        onClick={e => { update({ text: 'Tabs' }) }}
        children='Tabs' />
      <TabItem
        active={text === 'Two'}
        onClick={e => { update({ text: 'Two' }) }}
        children='Two' />
      <TabItem
        active={text === 'Four'}
        onClick={e => { update({ text: 'Four' }) }}
        children='Four' />
      <TabItem
        active={text === 'Eight'}
        onClick={e => { update({ text: 'Eight' }) }}
        children='Eight' />
    </Tabs>
  ),
  TabItem: ({ text, update, ...rest }) => (
    <Tabs>
      <TabItem
        {...getProps(rest)}
        active
        children='TabItem' />
    </Tabs>
  ),
  Text: ({ text, ...rest }) => (
    <Text {...getProps(rest)}>{text}</Text>
  ),
  Textarea: ({ text, update, ...rest }) => (
    <Textarea
      {...getProps(rest)}
      name='textarea'
      label='Textarea'
      value={text}
      onChange={e => { update({ text: e.target.value }) }}
    />
  ),
  Toolbar: ({ text, theme, ...rest }) => (
    <Toolbar
      theme={theme}
      {...getProps(rest)}>
      <NavItem children={text} />
      <NavItem children='NavItem' />
      <Space auto />
      <NavItem children='NavItem' />
    </Toolbar>
  ),
  Tooltip: ({ text, theme, ...rest }) => (
    <Tooltip
      theme={theme}
      {...getProps(rest)}
      title={text}>
      <Heading level={3}>Hover</Heading>
    </Tooltip>
  )
}

export const exampleKeys = Object.keys(examples)

const getExample = (name) => (props) => {
  const comp = examples[name]
  if (!comp) {
    return null
  }

  return comp(assign({}, defaultProps, props))
}

export default getExample


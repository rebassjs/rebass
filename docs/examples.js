
import React from 'react'

import {
  Arrow,
  Badge,
  Banner,
  Block,
  Breadcrumbs,
  Button,
  ButtonOutline,
  Card,
  CardImage,
  Checkbox,
  Close,
  Container,
  Divider,
  Dropdown,
  DropdownMenu,
  Embed,
  Footer,
  Heading,
  Input,
  Label,
  Media,
  Menu,
  Message,
  NavItem,
  PageHeader,
  Panel,
  PanelFooter,
  PanelHeader,
  Pre,
  Progress,
  Radio,
  Section,
  SectionHeader,
  Select,
  Space,
  Text,
  Toolbar,
  Tooltip
} from '../src'

const examples = {
  Arrow: (
    <Button>
      Arrow
      <Arrow />
    </Button>
  ),
  Badge: (
    <div>
      <Heading>
        Rebass
        <Space />
        <Badge type='info' children='0.2.0' />
      </Heading>
    </div>
  ),
  Banner: (
    <Banner backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
      <Heading size={0} children='Rebass' />
    </Banner>
  ),
  Block: (
    <Block padding={48}
      borderLeft
      color='blue'>
      <Media img='http://lorempixel.com/128/128/cats'>
        <Heading size={0}>Block</Heading>
        <Text>Generic box for containing things</Text>
      </Media>
    </Block>
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
  ButtonOutline: (
    <div>
      <ButtonOutline
        rounded='left'
        children='Button' />
      <ButtonOutline
        rounded={false}
        style={{ marginLeft: -1 }}
        children='Group' />
      <Button
        rounded='right'
        style={{ marginLeft: -1 }}
        children='Button' />
    </div>
  ),
  Card: (
    <Card width={256}>
      <CardImage src='http://placehold.it/320' />
      <Heading size={3} children='Card' />
      <Text>Cats like cards too</Text>
    </Card>
  ),
  CardImage: (
    <div style={{ maxWidth: 192 }}>
      <CardImage src='http://placehold.it/320' />
    </div>
  ),
  Checkbox: (
    <Checkbox
      name='checkbox_example'
      label='Checkbox' />
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
    <Divider />
  ),
  Drawer: (
    <a href='demo'>See Demo Page</a>
  ),
  Dropdown: (
    <Block padding={72}>
      <Dropdown>
        <Button>
          Dropdown <Arrow />
        </Button>
        <DropdownMenu open>
          <NavItem children='Hello' />
          <NavItem children='Hi' />
        </DropdownMenu>
      </Dropdown>
    </Block>
  ),
  DropdownMenu: (
    <a href='#Dropdown'>See Dropdown Example</a>
  ),
  Embed: (
    <Embed ratio={9/16}>
      <iframe
        src='https://www.youtube.com/embed/658WsCFwm9A'
        allowFullScreen />
    </Embed>
  ),
  Footer: (
    <Footer>
      Footer™ ©2016 Jxnblk
    </Footer>
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
  Media: (
    <Media img='http://placehold.it/128' align='center'>
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
    <Message type='success'>
      Hello Message!
      <Space auto />
      <Close />
    </Message>
  ),
  PageHeader: (
    <PageHeader
      heading='Page Header'
      description='Description about the page' />
  ),
  Panel: (
    <Panel type='info'>
      <PanelHeader children='Panel' />
      <Text>
        Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
      <PanelFooter children='The footer is a good place for less important information' />
    </Panel>
  ),
  Pre: (
    <Pre children={`const pre = { preformatted: 'text' }`} />
  ),
  Progress: (
    <Progress value={0.25} />
  ),
  Radio: (
    <Radio
      name='radio_example'
      label='Radio' />
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
        { value: 2, label: 'Two' },
        { value: 4, label: 'Four' },
        { value: 8, label: 'Eight' },
        { value: 16, label: 'Sixteen' },
        { value: 32, label: 'Thirty-Two' },
        { value: 64, label: 'Sixty-Four' }
      ]} />
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
  )
}

export default examples


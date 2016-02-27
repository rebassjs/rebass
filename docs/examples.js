
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
  Media,
  Menu,
  Message,
  NavItem,
  PageHeader,
  Panel,
  PanelFooter,
  PanelHeader,
  Progress,
  Radio,
  Section,
  SectionHeader,
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
    <Block padding={48} borderLeft backgroundColor='#eee'>
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
      <ButtonOutline rounded='left' children='Button' />
      <ButtonOutline rounded={false} children='Group' />
      <Button rounded='right' children='Button' />
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
        <DropdownMenu>
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
  Menu: (
    <Menu>
      <NavItem children='Menu' />
      <NavItem children='NavItem' />
      <NavItem children='NavItem' />
    </Menu>
  ),
  Panel: (
    <Panel>
      <PanelHeader children='Panel' />
      <Text>
        Panels are great for visually separating UI, content, or data from the rest of the page.
      </Text>
      <PanelFooter children='The footer is a good place for less important information' />
    </Panel>
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


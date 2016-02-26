
import React from 'react'

import {
  Arrow,
  Badge,
  Banner,
  Block,
  Breadcrumbs,
  Button,
  Card,
  CardImage,
  Divider,
  Dropdown,
  DropdownMenu,
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
  Space,
  Text,
  Toolbar
} from '../src'

const examples = {
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
    <Banner
      minHeight={512}
      backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
      <Heading size={0} children='Rebass' />
    </Banner>
  ),
  Block: (
    <div>
      <Block children='Default' />
      <Block padding={48} borderLeft backgroundColor='#eee'>
        <Media img='http://lorempixel.com/128/128/cats'>
          <Heading size={0}>Block</Heading>
          <Text>Generic box for containing things</Text>
        </Media>
      </Block>
    </div>
  ),
  Button: (
    <div>
      <Button rounded='left' outline children='Button' />
      <Button rounded={false} outline children='Group' />
      <Button rounded='right' children='Button' />
    </div>
  ),
  Card: (
    <Card width={320}>
      <CardImage src='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg' />
      <Heading size={3} children='Card' />
      <Text>Cats like cards too</Text>
    </Card>
  ),
  Dropdown: (
    <Dropdown>
      <Button>
        Dropdown <Arrow />
      </Button>
      <DropdownMenu>
        <NavItem children='Hello' />
        <NavItem children='Hi' />
      </DropdownMenu>
    </Dropdown>
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
  Toolbar: (
    <Toolbar>
      <NavItem children='Toolbar' />
      <NavItem children='NavItem' />
      <NavItem children='NavItem' />
    </Toolbar>
  )
}

export default examples


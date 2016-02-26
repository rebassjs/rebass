
import fs from 'fs'
import path from 'path'
import React from 'react'
import { parse } from 'react-docgen'
import pkg from '../package.json'

import {
  Arrow,
  Badge,
  Banner,
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
  Card: (
    <Card width={320}>
      <CardImage src='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg' />
      <Heading size={3} children='Card' />
      <Text>Cats like cards too</Text>
    </Card>
  ),
  Banner: (
    <Banner
      minHeight={512}
      backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'>
      <Heading size={0} children='Rebass' />
    </Banner>
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
  )
}

const files = fs.readdirSync(path.join(__dirname, '../src'))
  .filter(f => /\.js$/.test(f))

const components = files
  .map(filename => {
    const raw = fs.readFileSync(path.join(__dirname, `../src/${filename}`), 'utf8')
    const Component = require('../src/' + filename).default
    const name = filename.replace(/\.js$/, '')


    let docs
    try {
      docs = parse(raw)
    } catch (e) {
      return false
    }

    Component.displayName = name

    const example = examples[name] || null

    return {
      name,
      filename,
      Component,
      example,
      raw,
      ...docs
    }
  })
  .filter(c => c)

module.exports = {
  ...pkg,
  components,
  examples
}


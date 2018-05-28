import React from 'react'
import { Tabs, Tab } from '../src'

export default () =>
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

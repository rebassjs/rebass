import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tabs, TabItem } from '../src'

storiesOf('Tabs', module)
  .add('Default', () => (
    <Tabs>
      <TabItem
        href='#!'
        active
        children='Hello'
      />
      <TabItem
        href='#!'
        children='Tabs'
      />
      <TabItem
        href='#!'
        children='Three'
      />
    </Tabs>
  ))

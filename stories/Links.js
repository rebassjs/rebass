import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Link,
  NavLink,
  BlockLink
} from '../src'

storiesOf('Links', module)
  .add('Default', () => (
    <div>
      <Link href='#!' children='Link' />
      <NavLink href='#!' children='NavLink' />
      <BlockLink href='#!' children='BlockLink' />
    </div>
  ))

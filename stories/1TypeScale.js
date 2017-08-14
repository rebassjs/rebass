import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Heading,
} from '../src'

storiesOf('styles/Type Scale', module)
  .add('Default', () => (
    <div>
      <Heading f={8} children='Hello' />
      <Heading f={7} children='Hello' />
      <Heading f={6} children='Hello' />
      <Heading f={5} children='Hello' />
      <Heading f={4} children='Hello' />
      <Heading f={3} children='Hello' />
      <Heading f={2} children='Hello' />
      <Heading f={1} children='Hello' />
      <Heading f={0} children='Hello' />
    </div>
  ))

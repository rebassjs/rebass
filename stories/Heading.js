import React from 'react'
import { storiesOf } from '@storybook/react'
import { Heading } from '../src'

storiesOf('Heading', module)
  .add('Default', () => (
    <Heading
      children='Hello'
    />
  ))
  .add('Center', () => (
    <Heading
      center
      children='Hello'
    />
  ))
  .add('Not bold', () => (
    <Heading
      bold={false}
      children='Hello'
    />
  ))
  .add('H1', () => (
    <Heading
      is='h1'
      children='Hello'
    />
  ))

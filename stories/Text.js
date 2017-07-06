import React from 'react'
import { storiesOf } from '@storybook/react'
import { Text } from '../src'

storiesOf('Text', module)
  .add('Default', () => (
    <Text
      children='Hello Rebass'
    />
  ))
  .add('Center', () => (
    <Text
      is='div'
      center
      children='Hello'
    />
  ))
  .add('Bold', () => (
    <Text
      is='div'
      bold
      children='Hello'
    />
  ))

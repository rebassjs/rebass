import React from 'react'
import { storiesOf } from '@storybook/react'
import { Small } from '../src'

storiesOf('Small', module)
  .add('Default', () => (
    <Small
      children='Hello Small'
    />
  ))
  .add('Bold', () => (
    <Small
      bold
      children='Hello Small'
    />
  ))

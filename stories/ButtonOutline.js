import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonOutline } from '../src'

storiesOf('ButtonOutline', module)
  .add('Default', () => (
    <ButtonOutline
      children='Hello'
    />
  ))
  .add('Colors', () => (
    <ButtonOutline
      color='green'
      children='Hello'
    />
  ))

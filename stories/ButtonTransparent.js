import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonTransparent } from '../src'

storiesOf('components/ButtonTransparent', module)
  .add('Default', () => (
    <ButtonTransparent
      children='Hello'
    />
  ))

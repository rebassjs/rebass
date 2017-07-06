import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonCircle } from '../src'

storiesOf('ButtonCircle', module)
  .add('Default', () => (
    <ButtonCircle
      children='Hello'
    />
  ))

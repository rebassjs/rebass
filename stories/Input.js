import React from 'react'
import { storiesOf } from '@storybook/react'
import { Label, Input } from '../src'

storiesOf('Input', module)
  .add('Default', () => (
    <div>
      <Label children='Label' />
      <Input />
    </div>
  ))
  .add('Disabled', () => (
    <Input disabled defaultValue='Hello' />
  ))

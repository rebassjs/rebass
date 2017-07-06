import React from 'react'
import { storiesOf } from '@storybook/react'
import { Textarea } from '../src'

storiesOf('Textarea', module)
  .add('Default', () => (
    <Textarea />
  ))

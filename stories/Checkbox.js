import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'

storiesOf('Checkbox', module)
  .add('Default', () => (
    <Checkbox />
  ))

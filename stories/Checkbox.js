import React from 'react'
import { storiesOf } from '@storybook/react'
import { Checkbox } from '../src'

storiesOf('components/Checkbox', module)
  .add('Default', () => (
    <Checkbox />
  ))

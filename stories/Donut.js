import React from 'react'
import { storiesOf } from '@storybook/react'
import { Donut } from '../src'

storiesOf('Donut', module)
  .add('Default', () => (
    <Donut
      value={2/3}
    />
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Divider } from '../src'

storiesOf('Divider', module)
  .add('Default', () => (
    <Divider />
  ))
  .add('Color', () => (
    <Divider color='blue4' />
  ))

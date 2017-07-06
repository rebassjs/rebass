import React from 'react'
import { storiesOf } from '@storybook/react'
import { Lead } from '../src'

storiesOf('Lead', module)
  .add('Default', () => (
    <Lead
      children='Hello Lead'
    />
  ))

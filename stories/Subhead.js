import React from 'react'
import { storiesOf } from '@storybook/react'
import { Subhead } from '../src'

storiesOf('components/Subhead', module)
  .add('Default', () => (
    <Subhead
      children='Hello'
    />
  ))

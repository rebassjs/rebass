import React from 'react'
import { storiesOf } from '@storybook/react'
import { Fixed } from '../src'

storiesOf('components/Fixed', module)
  .add('Default', () => (
    <Fixed
      children='Fixed'
    />
  ))
  .add('Bottom right', () => (
    <Fixed
      bottom
      right
      children='Fixed'
    />
  ))

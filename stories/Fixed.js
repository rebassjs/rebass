import React from 'react'
import { storiesOf } from '@storybook/react'
import { Fixed } from '../src'

storiesOf('Fixed', module)
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

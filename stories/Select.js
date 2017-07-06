import React from 'react'
import { storiesOf } from '@storybook/react'
import { Select } from '../src'

storiesOf('Select', module)
  .add('Default', () => (
    <Select>
      <option>Hello</option>
      <option>Hi</option>
    </Select>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Group,
  Button,
  ButtonOutline
} from '../src'

storiesOf('components/Group', module)
  .add('Default', () => (
    <Group>
      <Button children='Hello' />
      <ButtonOutline children='Hello' />
      <ButtonOutline children='Hello' />
    </Group>
  ))

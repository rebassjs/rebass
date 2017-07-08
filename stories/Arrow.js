import React from 'react'
import { storiesOf } from '@storybook/react'
import { Button, Arrow } from '../src'

storiesOf('Arrow', module)
  .add('Default', () => (
    <Arrow />
  ))
  .add('Up', () => (
    <Arrow direction='up' />
  ))
  .add('With Button', () => (
    <Button>
      Hello
      <Arrow ml={2} />
    </Button>
  ))

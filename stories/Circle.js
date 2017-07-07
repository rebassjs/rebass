import React from 'react'
import { storiesOf } from '@storybook/react'
import { Circle } from '../src'

storiesOf('Circle', module)
  .add('Default', () => (
    <Circle>
      16
    </Circle>
  ))
  .add('MTA', () => (
    <div>
      <Circle bg='gray' children='L' />
      <Circle color='black' bg='yellow' children='N' />
      <Circle color='black' bg='yellow' children='Q' />
      <Circle color='black' bg='yellow' children='R' />
      <Circle bg='green' children='4' />
      <Circle bg='green' children='5' />
      <Circle bg='green' children='6' />
    </div>
  ))

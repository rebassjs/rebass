import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar, NavLink } from '../src'

storiesOf('Toolbar', module)
  .add('Default', () => (
    <Toolbar>
      <NavLink children='Hello' />
      <NavLink active children='Toolbar' />
      <NavLink ml='auto' children='Beep Boop' />
    </Toolbar>
  ))

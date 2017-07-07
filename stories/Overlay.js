import React from 'react'
import { storiesOf } from '@storybook/react'
import { Overlay } from '../src'

storiesOf('Overlay', module)
  .add('Default', () => (
    <Overlay>
      Hello
    </Overlay>
  ))

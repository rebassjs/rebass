import React from 'react'
import { storiesOf } from '@storybook/react'
import { Container } from '../src'

storiesOf('Container', module)
  .add('Default', () => (
    <Container bg='blue3'>
      Hello Container
    </Container>
  ))
  .add('maxWidth prop', () => (
    <Container
      maxWidth={512}
      bg='blue3'>
      Hello Container
    </Container>
  ))

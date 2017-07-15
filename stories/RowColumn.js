import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Container,
  Row,
  Column
} from '../src'

storiesOf('Row & Column', module)
  .add('Default', () => (
    <Container>
      <Row>
        <Column>Auto-width Column</Column>
        <Column>Auto-width Column</Column>
      </Row>
    </Container>
  ))

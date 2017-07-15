import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Truncate
} from '../src'

storiesOf('Truncate', module)
  .add('Default', () => (
    <Truncate f={4}>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </Truncate>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Flex, DotButton } from '../src'

storiesOf('DotButton', module)
  .add('Default', () => (
    <Flex>
      <DotButton active />
      <DotButton />
      <DotButton />
    </Flex>
  ))

import React from 'react'
import { storiesOf } from '@storybook/react'
import { Tooltip, Text, Flex, Relative } from '../src'

storiesOf('Tooltip', module)
  .add('Default', () => (
    <Flex>
      <Relative my={4}>
        <Tooltip text='Hello'>
          Beep Boop
        </Tooltip>
      </Relative>
    </Flex>
  ))

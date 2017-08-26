import React from 'react'
import { storiesOf } from '@storybook/react'
import { Border, Box } from '../src'

storiesOf('Border', module)
  .add('Default', () => (
    <Border p={2}>
      Hello
    </Border>
  ))
  .add('Color', () => (
    <Border
      p={2}
      color='blue'>
      Hello
    </Border>
  ))
  .add('Width', () => (
    <Border
      p={2}
      borderWidth={4}
      color='blue'>
      Hello
    </Border>
  ))
  .add('Directions', () => (
    <Border
      py={2}
      top
      bottom>
      Hello
    </Border>
  ))
  .add('Conditional', () => {
    const range = [0, 1, 2]
    return <Box>
      {range.map((i) => (
        <Border
          py={2}
          top={!!i}
          none={!i}>
          Hello
        </Border>
      ))}
    </Box>
  })

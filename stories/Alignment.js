import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Flex,
  Box,
  Input,
  Select,
  Button,
  Slider,
  Switch,
} from '../src'

storiesOf('Alignment', module)
  .add('Default', () => (
    <div>
      <Input
        w={1/4}
        mr={1}
      />
      <Select
        w={1/4}
        mr={1}
        value='Beep'>
        <option>Beep</option>
      </Select>
      <Button
        children='Hello'
      />
      <Box my={2} />
      <Flex>
        <Slider w={1/2} mr={2} />
        <Switch />
      </Flex>
    </div>
  ))

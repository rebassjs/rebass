import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Flex,
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
        w={1/3}
        mr={1}
      />
      <Select
        w={1/3}
        mr={1}
        value='Beep'>
        <option>Beep</option>
      </Select>
      <Button
        children='Hello'
      />
      <div />
      <Flex>
        <Slider w={1/2} mr={2} />
        <Switch />
      </Flex>
    </div>
  ))

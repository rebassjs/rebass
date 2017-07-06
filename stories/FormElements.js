import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  Label,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  Slider,
  Progress
} from '../src'

storiesOf('Form Elements', module)
  .add('Default', () => (
    <form>
      <Label>Input</Label>
      <Input defaultValue='Hello' />
      <Label>Select</Label>
      <Select defaultValue='Hello'>
        <option>Hello</option>
      </Select>
      <Label>Input</Label>
      <Textarea defaultValue='Hello' />
      <Label>
        <Checkbox checked />
        Check it
      </Label>
      <Label>
        <Radio checked />
        Pick me
      </Label>
      <Label>
        <Radio />
        Pick me
      </Label>
      <Label>Slider</Label>
      <Slider />
      <Progress my={3} value={1/3} />
    </form>
  ))


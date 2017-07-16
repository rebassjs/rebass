import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'refunk'
import {
  Drawer,
  Heading,
  Fixed,
  Pre,
  Button,
} from '../src'

const hoc = createProvider({ open: true })
const toggle = state => ({ open: !state.open })

const Live = hoc(props => (
  <div>
    {props.open && (
      <Fixed
        top
        right
        bottom
        left
        onClick={e => props.update(toggle)}
      />
    )}
    <Button
      onClick={e => props.update(toggle)}
      children='Open'
    />
    <Pre>{props.open ? 'Open' : 'Closed'}</Pre>
    <Drawer
      open={props.open}
      position={props.position}
      color='white'
      bg='black'>
      <Heading>Hello</Heading>
    </Drawer>
  </div>
))

storiesOf('Drawer', module)
  .add('Left', () => (
    <Live />
  ))
  .add('Right', () => (
    <Live position='right' />
  ))
  .add('Top', () => (
    <Live position='top' />
  ))
  .add('Bottom', () => (
    <Live position='bottom' />
  ))



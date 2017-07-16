import React from 'react'
import { storiesOf } from '@storybook/react'
import { createProvider } from 'refunk'
import { Switch } from '../src'

storiesOf('Switch', module)
  .add('Default', () => (
    <Live />
  ))

const toggle = state => ({ checked: !state.checked })
const hoc = createProvider({ checked: false })

const Live = hoc(props => (
  <Switch
    checked={props.checked}
    onClick={e => {
      props.update(toggle)
    }}
  />
))

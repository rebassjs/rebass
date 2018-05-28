import React from 'react'
import { State } from '@compositor/kit'
import { Drawer, Button } from '../src'

const toggle = state => ({ open: !state.open })

export default () =>
  <State
    open={false}
    render={({ update, open }) => (
      <React.Fragment>
        <Button
          m={3}
          onClick={e => update(toggle)}>
          {open ? 'Close' : 'Open'}
        </Button>
        <Drawer
          open={open}
          size={128}
          position='bottom'>
          Drawer
        </Drawer>
      </React.Fragment>
    )}
  />

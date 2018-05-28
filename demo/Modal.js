import React from 'react'
import { State } from '@compositor/kit'
import { Modal, Button } from '../src'

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
        {open && (
          <Modal
            onClick={e => update(toggle)}
            width={.5}
            p={5}>
            Modal
          </Modal>
        )}
      </React.Fragment>
    )}
  />

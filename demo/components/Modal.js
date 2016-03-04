
import React from 'react'
import {
  Overlay,
  Panel,
  PanelHeader,
  PanelFooter,
  Close,
  Space
} from '../../src'

const Modal = ({ modalOpen, toggleModal }) => (
  <Overlay
    open={modalOpen}
    onDismiss={toggleModal}>
    <Panel theme='info'>
      <PanelHeader>
        Hello Overlay
        <Space auto />
        <Close onClick={toggleModal} />
      </PanelHeader>
      This is a Panel inside an Overlay.
    </Panel>
  </Overlay>
)

export default Modal

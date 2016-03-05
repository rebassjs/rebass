
import React from 'react'
import {
  Overlay,
  Panel,
  PanelHeader,
  PanelFooter,
  Button,
  Text,
  Media,
  Close,
  Space
} from '../../src'

const Modal = ({ modalOpen, toggle }) => (
  <Overlay
    open={modalOpen}
    onDismiss={toggle('modalOpen')}>
    <Panel theme='success'>
      <PanelHeader>
        Hello Overlay!
        <Space auto />
        <Close onClick={toggle('modalOpen')} />
      </PanelHeader>
      <img
        src='http://lorempixel.com/512/384/cats'
        style={{
          maxWidth: '100%',
          height: 'auto'
        }} />
      <Text>
        <b>Panel:</b> Something laid as a covering over something else
      </Text>
      <PanelFooter>
        <Space auto />
        <Button
          theme='green'
          onClick={toggle('modalOpen')}
          children='Meow!' />
      </PanelFooter>
    </Panel>
  </Overlay>
)

export default Modal


import React from 'react'
import { Flex } from 'reflexbox'
import { X, Chevron } from 'reline'
import {
  Section,
  SectionHeader,
  Button,
  ButtonOutline,
  ButtonCircle
} from '../../src'

const Buttons = (props, { rebass }) => {
  return (
    <Section id='Buttons'>
      <SectionHeader heading='Buttons' />
      <Flex wrap
        mx={-2}>
        <Button m={2} children='Button' />
        <ButtonOutline m={2} children='Button' />
        <Button m={2} theme='error' children='Button' />
        <ButtonOutline m={2} theme='error' children='Button' />
        <Button m={2} theme='success' children='Button' />
        <Button m={2} theme='warning' children='Button' />
        <ButtonCircle m={2}>
          <Chevron
            down
            size={16}
            strokeWidth={2}
          />
        </ButtonCircle>
        <ButtonCircle m={2}>
          <X
            size={16}
            strokeWidth={2}
          />
        </ButtonCircle>
      </Flex>
    </Section>
  )
}

Buttons.contextTypes = {
  rebass: React.PropTypes.object
}

export default Buttons


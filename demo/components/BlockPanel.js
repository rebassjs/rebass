
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  Block,
  Heading,
  Text,
  Button,
  Panel,
  PanelHeader
} from '../../src'

const BlockPanel = ({ toggle }) => (
  <Section>
    <Flex
      align='center'
      wrap
      gutter={2}>
      <Box px={2} sm={6}>
        <Block
          borderLeft
          px={3}
          color='primary'>
          <Heading
            level={3}
            alt
            children='Alt Heading' />
          <Heading
            level={3}
            size={1}
            big>
            Block
          </Heading>
          <Text>
            A large solid piece of hard material, especially rock, stone, or wood, typically with flat surfaces on each side
          </Text>
        </Block>
      </Box>
      <Box px={2} sm={6}>
        <Panel m={0} theme='primary'>
          <PanelHeader>
            Panel
          </PanelHeader>
          <Text>
            A flat or curved component, typically rectangular, that forms or is set into the surface of a door, wall, or ceiling
          </Text>
          <Button
            big
            my={2}
            onClick={toggle('modalOpen')}
            children='Open Overlay' />
        </Panel>
      </Box>
    </Flex>
  </Section>
)

export default BlockPanel


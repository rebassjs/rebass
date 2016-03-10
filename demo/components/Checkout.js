
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Section,
  SectionHeader,
  SequenceMap,
  Input,
  Button,
  Panel,
  PanelHeader,
  NavItem,
  Divider,
  Text,
  Space,
  Tooltip,
  Close
} from '../../src'

const Checkout = () => (
  <Section>
    <SectionHeader
      heading='Checkout'
      description='Don’t worry this isn’t real. It’s just a demo' />
    <SequenceMap
      active={0}
      steps={[
        { href: '#checkout', children: 'Shipping Address' },
        { href: '#checkout', children: 'Billing Info' },
        { href: '#checkout', children: 'Place Order' }
      ]} />
    <Flex align='center' sm gutter={3}>
      <Box sm={8} px={3} py={3}>
        <Input
          name='full_name'
          label='Full Name' />
        <Input
          name='street_address'
          label='Street Address' />
        <Input
          name='street_address_2'
          hideLabel
          label='Street Address' />
        <Flex>
          <Box col={6}>
            <Input
              rounded='left'
              name='city'
              label='City' />
          </Box>
          <Box col={3}>
            <Input
              rounded={false}
              name='state'
              label='State' />
          </Box>
          <Box col={3}>
            <Input
              rounded='right'
              name='zip_code'
              label='Zip Code' />
          </Box>
        </Flex>
        <Divider />
        <Button
          big
          children='Continue' />
      </Box>
      <Box sm={4} px={3} py={3}>
        <Panel m={0} theme='secondary'>
          <PanelHeader>
            Your Cart
            <Space auto />
            <NavItem small children='Edit' />
          </PanelHeader>
          <Flex align='baseline'>
            <Tooltip
              title='Oh hello! You found the Tooltip!'>
              <Text small children='Panel Component' />
            </Tooltip>
            <Space auto />
            <Text small children='Free' />
          </Flex>
          <Divider />
          <Flex align='baseline'>
            <Text small children='SequenceMap Component' />
            <Space auto />
            <Text small children='Free' />
          </Flex>
          <Divider />
          <Flex>
            <Text bold children='Total' />
            <Space auto />
            <Text bold children='Free' />
          </Flex>
        </Panel>
      </Box>
    </Flex>
  </Section>
)

export default Checkout

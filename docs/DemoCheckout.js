
import React from 'react'
import { Container, Grid } from 'gridsys'
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
} from '../src'

const Checkout = () => (
  <Section>
    <Container>
      <Grid span={8}>
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
      </Grid>
      <Grid span={4}>
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
      </Grid>
      <Grid span={2}>
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
      </Grid>
    </Container>
  </Section>
)

export default Checkout


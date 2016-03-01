
import React from 'react'
import { Box } from 'reflexbox'
import {
  LinkBlock,
  Heading,
  Text,
  Section,
  SectionHeader
} from '../../src'

const Related = () => (
  <Section id='Related'>
    <SectionHeader
      heading='Related' />
    <LinkBlock href='http://jxnblk.com/reflexbox'>
      <Box py={2}>
        <Heading
          level={4}
          size={2}
          children='Reflexbox' />
        <Text children='React flexbox layout and grid system' />
      </Box>
    </LinkBlock>
    <LinkBlock href='http://jxnblk.com/react-geomicons'>
      <Box py={2}>
        <Heading
          level={4}
          size={2}
          children='React Geomicons' />
        <Text children='React icon component for Geomicons' />
      </Box>
    </LinkBlock>
  </Section>
)

export default Related


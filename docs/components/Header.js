
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Container,
  Banner,
  NavItem,
  Heading,
  PageHeader,
  Text,
  Divider,
  Button,
  Pre,
  Space,
  Toolbar
} from '../../src'

import Logo from './Logo'
import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'
import TravisBadge from './TravisBadge'

const Header = ({ version, description, components, ...props }) => {
  return (
    <div>
      <Toolbar backgroundColor='gray2'>
        <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
        <NavItem href='http://jxnblk.com/rebass/demo' children='Demo' />
        <Space auto />
        <NavItem href='https://github.com/jxnblk/rebass' children='GitHub' />
        <NavItem href='https://npmjs.com/package/rebass' children='npm' />
      </Toolbar>
      <Banner
        mb={4}
        p={0}
        align='left'
        style={{
          fontSize: 'inherit',
          minHeight: '80vh',
          overflow: 'hidden'
        }}
        backgroundColor='midgray'>
        <Container style={{ width: '100%', maxWidth: 1280 }}>
          <Flex wrap
            py={3}
            gutter={2}
            align='center'>
            <Box p={2}>
              <Logo size={96} strokeWidth={12} />
              <Heading
                level={1}
                size={0}
                big
                children='Rebass' />
              <Heading children={`v${version}`} />
              <Text children={`${components.length} ${description}`} />
              <Divider style={{ borderWidth: 4 }} />
              <Flex wrap align='center'>
                <TravisBadge />
                <Space />
                <TweetButton text={`Rebass: ${description}`} />
                <Space />
                <GithubButton />
              </Flex>
              <Button
                big
                mt={3}
                color='blue'
                backgroundColor='white'
                href='demo'
                children='View Demo' />
            </Box>
            <Space auto />
            <Box p={2}>
              <CarbonAd />
            </Box>
          </Flex>
        </Container>
      </Banner>
    </div>
  )
}

export default Header


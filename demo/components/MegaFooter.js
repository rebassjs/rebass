
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Footer,
  Divider,
  Block,
  Heading,
  Space,
  NavItem
} from '../../src'

const cols = [
  {
    heading: 'React Projects',
    links:
      [
        { href: 'http://jxnblk.com/rebass', children: 'Rebass' },
        { href: 'http://jxnblk.com/reflexbox', children: 'Reflexbox' },
        { href: 'http://jxnblk.com/rgx', children: 'Rgx' },
        { href: 'http://jxnblk.com/gx', children: 'Gx' },
        { href: 'http://jxnblk.com/react-geomicons', children: 'React Geomicons' },
        { href: 'http://jxnblk.com/react-fitter-happier-text', children: 'React Fitter Happier Text' },
        { href: 'http://jxnblk.com/react-icons', children: 'React Icons' }
      ]
  },
  {
    heading: 'CSS Projects',
    links:
      [
        { href: 'http://basscss.com', children: 'Basscss' },
        { href: 'http://cssstats.com', children: 'CSS Stats' },
        { href: 'http://jxnblk.com/gravitons', children: 'Gravitons' },
        { href: 'http://jxnblk.com/vhs', children: 'VHS' },
        { href: 'http://basscss.com/skull', children: 'Skull' }
      ]
  },
  {
    heading: 'Other',
    links:
      [
        { href: 'http://jxnblk.com/colorable', children: 'Colorable' },
        { href: 'http://jxnblk.com/shade', children: 'Shade' },
        { href: 'http://jxnblk.com/loading', children: 'Loading...' },
        { href: 'http://jxnblk.com/Spectral', children: 'Spectral' },
        { href: 'http://jxnblk.com/skullcat', children: 'Skullcat' },
        { href: 'http://jxnblk.com/stepkit', children: 'Stepkit' }
      ]
  },
]

const MegaFooter = () => (
  <Footer
    mt={4}
    color='white'
    backgroundColor='black'>
    <Box col={12} px={3} py={4}>
      <Flex wrap gutter={3}>
        {cols.map(({heading, links}, i) => (
          <Box key={i}
            px={3}
            sm={12 / cols.length}>
            <Heading
              level={4}
              size={3}
              alt
              children={heading} />
            <Block borderTop px={0}>
              {links.map((link, i) => (
                <NavItem key={i}
                  px={0}
                  {...link} />
              ))}
            </Block>
          </Box>
        ))}
      </Flex>
      <Divider />
      <Flex>
        <NavItem
          small
          px={0}
          color='secondary'
          href='http://jxnblk.com/rebass'
          children='Rebass' />
        <Space auto />
        <NavItem
          small
          px={0}
          color='secondary'
          href='http://jxnblk.com'
          children='Made by Jxnblk' />
      </Flex>
    </Box>
  </Footer>
)

export default MegaFooter


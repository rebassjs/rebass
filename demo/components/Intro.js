
import React from 'react'
import {
  PageHeader,
  Breadcrumbs,
  Message
} from '../../src'

const Intro = ({ }) => (
  <div>
    <PageHeader
      my={1}
      heading='Demo'
      description='Change or edit the configuration to see component styles update in real time' />
    <Breadcrumbs
      mb={2}
      links={[
        { href: 'http://jxnblk.com/rebass', children: 'Rebass' },
        { href: 'http://jxnblk.com/rebass/demo', children: 'Demo' },
        { href: '#!', children: 'Breadcrumbs' },
      ]} />
    <Message my={4} theme='success'>
      Message: a verbal, written, or recorded communication sent to or left for a recipient who cannot be contacted directly
    </Message>
  </div>
)

export default Intro


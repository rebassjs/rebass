
import React from 'react'
import rcp from 'react-component-permutations'
import { Divider, Text, theme } from '../../src'

const blacklist = [
  'Banner',
  'Block',
  'Card',
  'Container',
  'Divider',
  'Drawer',
  'Dropdown',
  'DropdownMenu',
  'Label',
  'Space',
  'Stat'
]

const propsString = (obj) => {
  let str = ''
  Object.keys(obj).forEach(key => {
    const propType = typeof obj[key]
    if (propType === 'number' || propType === 'boolean') {
      str += `${key}={${obj[key]}} `
    } else if (propType === 'object') {
      str += `${key}={${JSON.stringify(obj[key])}}`
    } else {
      str += `${key}='${obj[key]}' `
    }
  })
  return str
}

const Permutations = ({ name, Component, raw, ...props }, { rebass }) => {
  const type = name === 'Input' ? ['text'] : [
    'default',
    'info',
  ]

  const config = { ...theme, ...rebass }

  const permutations = rcp(raw, {
    options: [
      [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'Three' },
      ]
    ],
    img: ['http://placehold.it/96'],
    src: ['http://placehold.it/96'],
    backgroundImage: ['https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'],
    minHeight: ['30vh'],
    width: [256, 320],
    size: [], // Prevent multiple Heading permutations
    title: [name + ' Title'],
    description: ['Description for ' + name],
    label: [name],
    rounded: [true],
    links: [
      [
        { href: '#!', children: 'Jxnblk' },
        { href: '#!', children: 'Rebass' },
        { href: '#!', children: name }
      ]
    ],
    open: [true], // DropdownMenu
    // Disable margins and padding utils (Block)
    m: [], mx: [], my: [], mt: [], mr: [], mb: [], ml: [],
    p: [], px: [], py: [], pt: [], pr: [], pb: [], pl: [],
  })

  if (blacklist.indexOf(name) > -1) {
    return <div />
  }

  if (!permutations || permutations.length < 2) {
    return <div />
  }

  return (
    <div className='Permutations'>
      <Text small children='Variations' />
      <div style={{
          position: 'relative',
          marginBottom: 16
        }}>
        {permutations &&
          <div>
            {permutations.map((p, i) => (
              <Component {...p}
                key={i}
                style={{ marginRight: 16 }}
                title={`<${name} ${propsString(p)} />`}
                name={name}
                children={name} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Permutations


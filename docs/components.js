import React from 'react'
import {
  StyleProvider,
  Layout,
  NavLinks,
  ScrollTop
} from 'mdx-go/styled-components'
import * as components from '../src'

export const nav = [
  'Rebass',
  'principles',
  'props',

  'Box',
  'Flex',
  'Text',
  'Heading',
  'Button',
  'Link',
  'Image',
  'Card',

  'theming',
  'extending',
  'advanced',

  'notes',
]

const filter = route => nav.includes(route.name)

export const Root = props =>
  <StyleProvider
    components={components}
    theme={{
      colors: {
        lightgray: '#f6f6ff',
        blue: '#07c'
      },
      buttons: {
        pill: {
          borderRadius: 99999
        },
        outline: {
          backgroundColor: 'transparent',
          color: 'blue',
          boxShadow: 'inset 0 0 0 2px'
        }
      },
      cards: {
        pop: {
          padding: '32px',
          borderRadius: '8px',
          backgroundColor: 'magenta',
          boxShadow: '0 0 48px rgba(0, 0, 0, .25)'
        }
      }
    }}>
    <Layout>
      <Layout.MenuToggle m={3} />
      <Layout.Sidebar>
        <NavLinks
          {...props}
          order={nav}
          filter={filter}
        />
      </Layout.Sidebar>
      <Layout.Main>
        {props.children}
        <ScrollTop />
      </Layout.Main>
    </Layout>
  </StyleProvider>


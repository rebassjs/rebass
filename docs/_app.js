import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
import {
  SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
import sortBy from 'lodash.sortby'
import pkg from '../package.json'
import * as Rebass from '../src'
import { photo } from './_constants'
import Logo from './Logo'

const scope = {
  ...Rebass,
  photo
}

const navOrder = [
  'Rebass',
  'getting-started',
  'props',
  'grid-system',
  'theming',
  'extending',
  'server-side-rendering',
  'colors',
  'Logo',
  'components',
]

const createNav = routes => [
  ...sortBy([...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Rebass'
      }
    }), a => {
      const index = navOrder.indexOf(a.name)
      return index < 0 ? Infinity : index
    }),
  {
    key: 'github',
    name: 'GitHub',
    path: 'https://github.com/jxnblk/rebass',
  },
  {
    key: 'jxnblk',
    name: 'Made by Jxnblk',
    path: 'https://jxnblk.com',
  },
]

export default class extends React.Component {
  render () {
    const {
      routes,
      route,
      children
    } = this.props
    const nav = createNav(routes)

    const disableLayout = route && route.props && route.props.layout === false

    return (
      <ScopeProvider scope={scope}>
        <RefunkProvider pkg={pkg}>
          <Rebass.Provider>
            {disableLayout ? (
              children
            ) : (
              <SidebarLayout
                {...this.props}
                title='Rebass'
                routes={nav}
                logo={<Logo size={32} static />}
              />
            )}
          </Rebass.Provider>
        </RefunkProvider>
      </ScopeProvider>
    )
  }
}

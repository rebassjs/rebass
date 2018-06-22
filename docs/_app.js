import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
import {
  SidebarLayout,
  ScopeProvider
} from '@compositor/x0/components'
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
  'Logo',
  'components',
]

const createNav = routes => [
  ...[...routes]
    .map(route => {
      if (route.name !== 'index') return route
      return {
        ...route,
        name: 'Rebass'
      }
    })
    .sort((a, b) => {
      const ai = navOrder.indexOf(a.name)
      const bi = navOrder.indexOf(b.name)
      if (ai < 0) return 1
      return ai - bi
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

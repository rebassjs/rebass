import React from 'react'
import { Provider as RefunkProvider } from 'refunk'
import { Helmet as Head } from 'react-helmet'
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
  'Index',
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
  ...[...routes].sort((a, b) => {
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

    return (
      <React.Fragment>
        {/* doesn't work with static render */}
        <Head>
          <title>Rebass</title>
          <meta
            name='description'
            content='React UI component library & design system, built with styled-components and styled-system'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@jxnblk' />
          <meta name='twitter:title' content='Rebass' />
          <meta
            name='twitter:description'
            content='React UI component library & design system, built with styled-components and styled-system'
          />
          <meta name='twitter:image' content='https://jxnblk.com/rebass/card.png' />
          <link rel='stylesheet' href='https://fonts.google.com/css?family=Roboto+Mono' />
        </Head>

        <ScopeProvider scope={scope}>
          <RefunkProvider pkg={pkg}>
            <Rebass.Provider>
              <SidebarLayout
                {...this.props}
                title='Rebass'
                routes={nav}
                logo={<Logo size={32} />}
              />
              <Scripts />
            </Rebass.Provider>
          </RefunkProvider>
        </ScopeProvider>
      </React.Fragment>
    )
  }
}

const Scripts = props => (
  <React.Fragment>
    <Script value={ga} />
    <Script value={twttr} />
  </React.Fragment>
)

const Script = ({ value }) => false &&
  <script
    dangerouslySetInnerHTML={{
      __html: value
    }}
  />

const twttr = `
window.twttr = (function(d, s, id) {
var js, fjs = d.getElementsByTagName(s)[0],
t = window.twttr || {};
if (d.getElementById(id)) return t;
js = d.createElement(s);
js.id = id;
js.src = "https://platform.twitter.com/widgets.js";
fjs.parentNode.insertBefore(js, fjs);
t._e = [];
t.ready = function(f) {
t._e.push(f);
};
return t;
}(document, "script", "twitter-wjs"));
`

const ga = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-4603832-6', 'auto'); ga('send', 'pageview');
`

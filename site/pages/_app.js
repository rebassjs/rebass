import React from 'react'
import { Provider as RebassProvider } from 'rebass'
import { Provider as RefunkProvider } from 'refunk'
import pkg from 'rebass/package.json'

export default ({ render }) =>
  <RefunkProvider pkg={pkg}>
    <RebassProvider>
      {render()}
    </RebassProvider>
  </RefunkProvider>

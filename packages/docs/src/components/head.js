import React from 'react'
import { Helmet } from 'react-helmet'
import pkg from 'rebass/package.json'

export default props =>
  <Helmet
    htmlAttributes={{
      lang: 'en-us',
    }}>
    <title>{[props.title, 'Rebass'].join(' | ')}</title>
    <meta
      name='description'
      content={pkg.description}
    />
  </Helmet>

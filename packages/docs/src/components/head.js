import React from 'react'
import { Helmet } from 'react-helmet'
import pkg from 'rebass/package.json'

export default props => {
  const title = [props.title, 'Rebass'].filter(Boolean).join(' | ')

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en-us',
      }}>
      <title>{title}</title>
      <meta
        name='description'
        content={pkg.description}
      />
    </Helmet>
  )
}

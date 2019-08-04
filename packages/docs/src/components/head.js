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
      <link rel='icon' href='/icon.png' />
      <meta name='description' content={pkg.description} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@jxnblk' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={pkg.description} />
      <meta name='twitter:image' content='https://rebassjs.org/card.png' />
    </Helmet>
  )
}

import React from 'react'
import Webfont from 'ok-webfont'

const Head = ({ pkg }) => (
  <head>
    <title>Rebass</title>
    <meta
      name='viewport'
      content='width=device-width,initial-scale=0,viewport-fit=cover'
    />
    <meta
      name='description'
      content={pkg.description}
    />
    <meta
      name='generator'
      content='Compositor x0'
    />
    <CSS />
    <Webfont font='Roboto Mono' />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@jxnblk' />
    <meta name='twitter:title' content='Rebass' />
    <meta name='twitter:description' content='Functional React UI component library, built with styled-components' />
    <meta name='twitter:image' content='http://jxnblk.com/rebass/card.png' />
  </head>
)

const CSS = props => (
  <style
    dangerouslySetInnerHTML={{
      __html: props.css
    }}
  />
)
CSS.defaultProps = {
  css: '*{box-sizing:border-box}body{margin:0;line-height:1.5}'
}

export default Head

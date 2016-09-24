
import React from 'react'
import App from './App'
import basename from './basename'

const getCss = (css) => {
  return `* { box-sizing: border-box }
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
}
${css}`
}

const Root = ({
  css = '',
  ...props
}) => {
  const basecss = getCss(css)

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Rebass</title>
        <style dangerouslySetInnerHTML={{ __html: basecss }} />
      </head>
      <body>
        <App {...props} />
        <script src={`${basename}/bundle.js`} />
      </body>
    </html>
  )
}

export default Root


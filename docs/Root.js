
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
:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 191, 191, .25);
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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Rebass</title>
        <style dangerouslySetInnerHTML={{ __html: basecss }} />
        <link async href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
      </head>
      <body>
        <App {...props} />
        <script src={`${basename}/bundle.js`} />
      </body>
    </html>
  )
}

export default Root


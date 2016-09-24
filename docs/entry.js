
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import cxs from 'cxs'

import data from './data'
import Root from './Root'
import App from './App'

if (typeof document !== 'undefined') {
  ReactDOM.render(<App {...data} />, app)
}

module.exports = (locals, callback) => {
  const root = ReactDOMServer.renderToStaticMarkup(<Root {...data} />)
  // To do: cxs.css render??
  const html = `<!DOCTYPE html>${root}`

  callback(null, html)
}


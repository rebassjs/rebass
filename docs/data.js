
import fs from 'fs'
import path from 'path'
import React from 'react'
import jsxToString from 'jsx-to-string'
import pkg from '../package.json'
import examples from './examples'
import metadata from './metadata'

// Keep an eye on
// https://github.com/reactjs/react-docgen/pull/124
// for HOC support

const files = fs.readdirSync(path.join(__dirname, '../src'))
  .filter(f => /\.js$/.test(f))

const components = files
  .filter(f => !/index|theme|withRebass/.test(f))
  .map(filename => {
    const raw = fs.readFileSync(path.join(__dirname, `../src/${filename}`), 'utf8')
    const Component = require('../src/' + filename).default
    const name = filename.replace(/\.js$/, '')

    // [ ] Replace react-docgen
    // Manual entry?

    Component.displayName = name

    const example = examples[name] || null
    let code
    try {
      code = jsxToString(example)
    } catch (e) {
      console.error('Could not parse', name)
    }

    return {
      name,
      filename,
      // Component,
      example,
      code,
      raw,
      ...metadata[name]
    }
  })
  .filter(c => c)

const ga = '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'

module.exports = {
  ...pkg,
  components,
  examples,
  ga
}


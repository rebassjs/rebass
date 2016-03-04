
import fs from 'fs'
import path from 'path'
import React from 'react'
import { parse } from 'react-docgen'
import pkg from '../package.json'
import examples from './examples'

const files = fs.readdirSync(path.join(__dirname, '../src'))
  .filter(f => /\.js$/.test(f))

let base

const components = files
  .map(filename => {
    const raw = fs.readFileSync(path.join(__dirname, `../src/${filename}`), 'utf8')
    const Component = require('../src/' + filename).default
    const name = filename.replace(/\.js$/, '')


    let docs
    try {
      docs = parse(raw)
    } catch (e) {
      return false
    }

    Component.displayName = name

    const example = examples[name] || null

    return {
      name,
      filename,
      Component,
      example,
      raw,
      ...docs
    }
  })
  .filter(c => c)
  .map(c => {
    if (c.name === 'Base') {
      base = c
    }
    return c
  })
  .filter(c => c.name !== 'Base') // Grab base from array first

const ga = '(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "UA-4603832-6", "auto");ga("send", "pageview");'

module.exports = {
  ...pkg,
  components,
  base,
  examples,
  ga
}



import fs from 'fs'
import path from 'path'
import React from 'react'
import { parse } from 'react-docgen'
import pkg from '../package.json'
import examples from './examples'

const files = fs.readdirSync(path.join(__dirname, '../src'))
  .filter(f => /\.js$/.test(f))


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
  .filter(c => c.name !== 'Base') // Grab base from array first

module.exports = {
  ...pkg,
  components,
  examples
}


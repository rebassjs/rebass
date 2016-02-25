
import fs from 'fs'
import path from 'path'
import React from 'react'
import { parse } from 'react-docgen'

const files = fs.readdirSync(path.join(__dirname, '../src'))
  .filter(f => /\.js$/.test(f))

const components = files
  .map(filename => {
    const raw = fs.readFileSync(path.join(__dirname, `../src/${filename}`), 'utf8')
    const Component = require('../src/' + filename).default
    const name = filename.replace(/\.js$/, '')

    Component.displayName = name

    let docs
    try {
      docs = parse(raw)
    } catch (e) {
      return false
    }

    return {
      name,
      filename,
      Component,
      raw,
      ...docs
    }
  })
  .filter(c => c)

module.exports = {
  components
}


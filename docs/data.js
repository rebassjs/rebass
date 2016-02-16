
import fs from 'fs'
import path from 'path'
import React from 'react'
import { parse } from 'react-docgen'

const components = [
  'Button'
]

const docs = components.map(name => {
  const str = fs.readFileSync(path.join(__dirname, `../src/${name}.js`), 'utf8')
  var Comp = require('../src/' + name).default
  return { ...parse(str), name, Comp }
})

const examples = docs.map(c => {
  // Generate all possible permutations
  const props = Object.keys(c.props)
  let variations = []

  props.forEach(key => {
    const prop = c.props[key]
    if (prop.type.name === 'bool') {
      variations.push({ [key]: true })
      // variations.push({ [key]: false })
    }
  })

  return {
    component: c,
    variations
  }
})

export default {
  components,
  examples,
  docs
}


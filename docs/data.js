
import { parse } from 'react-docgen'
import toJsxString from 'react-element-to-jsx-string'
import pkg from '../package.json'
import Rebass from '../src'
import examples from './examples'

const components = Object.keys(Rebass)
  .filter(key => /^[A-Z]/.test(key))
  .filter(key => key !== 'Base')
  .map(key => {
    const raw = require('!!raw!../src/' + key + '.js')
    const plain = raw.replace(/withRebass\(([A-Za-z]+)\)/, key)
    const metadata = parse(plain)
    const example = examples[key] || null
    const code = example ? toJsxString(example) : ''

    return {
      name: key,
      ...metadata,
      raw,
      example,
      code
    }
  })

const data = {
  ...pkg,
  components
}

module.exports = data


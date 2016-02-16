
import fs from 'fs'
import path from 'path'
import { parse } from 'react-docgen'

const components = [
  'Button'
]

const docs = components.map(c => {
  const str = fs.readFileSync(path.join(__dirname, `../src/${c}.js`), 'utf8')
  return parse(str)
})

const examples = docs.map(c => {
  // Generate all possible permutations
  const props = Object.keys(c.props)

  return c
})

export default {
  components,
  docs
}


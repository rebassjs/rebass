
require('babel-register')
const fs = require('fs')
const path = require('path')
const docgen = require('react-docgen')
const toJsxString = require('react-element-to-jsx-string').default
const Rebass = require('./src')
const pkg = require('./package.json')
const examples = require('./docs/examples').default

const components = Object.keys(Rebass)
  .filter(key => /^[A-Z]/.test(key))
  .filter(key => key !== 'Base')
  .map(key => {
    const raw = fs.readFileSync(path.join(__dirname, 'src', key + '.js'), 'utf8')
    const plain = raw.replace(/withRebass\(([A-Za-z]+)\)/, key)
    const metadata = docgen.parse(plain)
    const example = examples[key] || null
    const code = example ? toJsxString(example) : ''
    console.log('Generating data for', key)

    return Object.assign(metadata, {
      name: key,
      raw,
      example,
      code
    })
  })

const data = Object.assign(pkg, {
  components
})

const json = JSON.stringify(data)

fs.writeFileSync(path.join(__dirname, 'docs', 'data.json'), json)
console.log('docs/data.json written')


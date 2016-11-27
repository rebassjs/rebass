
require('babel-register')
const fs = require('fs')
const path = require('path')
const docgen = require('react-docgen')
const Rebass = require('../src')
const pkg = require('../package.json')

const components = Object.keys(Rebass)
  .filter(key => /^[A-Z]/.test(key))
  .filter(key => !/Base|ButtonCircle/.test(key))
  .map(key => {
    const raw = fs.readFileSync(path.join(__dirname, '..', 'src', key + '.js'), 'utf8')
    const plain = raw.replace(/withRebass\(([A-Za-z]+)\)/, key)
    const metadata = docgen.parse(plain)
    console.log('Generating data for', key)

    return Object.assign(metadata, {
      name: key,
      raw
    })
  })

const data = Object.assign(pkg, {
  components
})

const json = JSON.stringify(data)

fs.writeFileSync(path.join(__dirname, 'data.json'), json)
console.log('docs/data.json written')


#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const Rebass = require('../dist')

const filename = path.join(__dirname, 'components.md')

const keys = Object.keys(Rebass)

const examples = fs.readdirSync(
  path.join(__dirname, '../examples/jsx')
)
  .reduce((a, b) => Object.assign({}, a, {
    [path.basename(b, path.extname(b))]: path.join(__dirname, '../examples/jsx', b)
  }), {})

const template = ({
  components = []
}) => `
# Components

<details>
  <summary>Table of Contents</summary>
  <ul>
    ${components.map(({ name }) => `<li><a href='#${name.toLowerCase()}'>${name}</a></li>`).join('\n')}
  </ul>
</details>

${components
  .map(comp => {
    if (!comp.example) console.log(`no example for:`, comp.name)
    return comp
  })
  .map(({ name, props, example, extension }) => (
`## ${name}

${extension ? `Extends [${extension}](#${extension.toLowerCase()})\n` : ''}
${example ? '```.jsx\n' + example + '```\n' : ''}
${props.length ? '### Props\n' : ''}
${props.map(prop => (
  `- \`${prop.name}\``
)).join('\n')}
`)).join('\n')}
`.replace(/\n\n+/g, '\n\n')

const blacklist = {
  m: true,
  mt: true,
  mr: true,
  mb: true,
  ml: true,
  mx: true,
  my: true,
  p: true,
  pt: true,
  pr: true,
  pb: true,
  pl: true,
  px: true,
  py: true,
  color: true,
  bg: true,
  w: true,
  f: true,
}

const components = keys
  .map(key => {
    const Component = Rebass[key]
    const {
      propTypes = {},
      defaultProps = {},
    } = Component || {}

    let extension
    if (defaultProps && defaultProps.is) {
      extension = typeof defaultProps.is === 'function'
        ? defaultProps.is.displayName
        : null
    }

    let example
    if (examples[key]) {
      example = fs.readFileSync(examples[key], 'utf8')
    }

    const props = Object.keys(propTypes)
      .filter(key => !blacklist[key])
      .map(key => ({
        name: key
      }))

    return {
      name: key,
      extension,
      Component,
      props,
      example,
    }
  })
  .filter(c => typeof c.Component === 'function')

const content = template({ components })

fs.writeFileSync(filename, content)

console.log('Generated docs/components.md')

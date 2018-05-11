#!/usr/bin/env node
const path = require('path')
const init = require('initit')
const chalk = require('chalk')

const [ name ] = process.argv.slice(2)
const template = path.join(__dirname, 'template')

console.log('Creating Rebass project ', chalk.green(name))
console.log()
console.log('__dirname', __dirname)
console.log('Template', template)

init({
  name,
  template,
})
  .then(res => {
    console.log(
      chalk.green(
        'Successfully created new Rebass project'
      )
    )
    process.exit(0)
  })
  .catch(err => {
    console.log(
      chalk.red(err)
    )
    process.exit(1)
  })

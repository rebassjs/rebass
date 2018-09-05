const test = require('ava')
const React = require('react')
const { create: render } = require('react-test-renderer')
const createScope = require('./index')

const scope = createScope()

test('returns a scope object', t => {
  t.is(typeof scope, 'object')
})

Object.keys(scope).forEach(tag => {
  test(`renders ${tag} element`, t => {
    const Component = scope[tag]
    const json = render(
      React.createElement(Component)
    ).toJSON()
    t.snapshot(json)
  })
})

test('renders h1 with link', t => {
  const H1 = scope.h1
  const json = render(
    React.createElement(H1, {
      id: 'hello',
      children: 'Hello'
    })
  ).toJSON()
  const [ a ] = json.children
  t.is(a.type, 'a')
  t.snapshot(json)
})

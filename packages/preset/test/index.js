import preset from '../src'

test('snapshot', () => {
  expect(preset).toMatchSnapshot()
})

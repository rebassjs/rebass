
import radii from '../radii'

test('returns an object', () => {
  const sx = radii()()
  expect(typeof sx).toBe('object')
})

test('rounded returns borderRadius', () => {
  const sx = radii()({ rounded: true })
  expect(sx).toEqual({
    borderRadius: 2
  })
})

test('rounded false returns border-radius 0', () => {
  const sx = radii()({ rounded: false })
  expect(sx).toEqual({
    borderRadius: 0
  })
})

test('circle returns border-radius 99999', () => {
  const sx = radii()({ circle: true })
  expect(sx).toEqual({
    borderRadius: 99999
  })
})

test('pill returns border-radius 99999', () => {
  const sx = radii()({ pill: true })
  expect(sx).toEqual({
    borderRadius: 99999
  })
})

test('rounded top returns border-radius styles', () => {
  const sx = radii()({ rounded: 'top' })
  expect(sx).toEqual({
    borderRadius: '2px 2px 0 0'
  })
})

test('rounded right returns border-radius styles', () => {
  const sx = radii()({ rounded: 'right' })
  expect(sx).toEqual({
    borderRadius: '0 2px 2px 0'
  })
})

test('rounded bottom returns border-radius styles', () => {
  const sx = radii()({ rounded: 'bottom' })
  expect(sx).toEqual({
    borderRadius: '0 0 2px 2px'
  })
})

test('rounded left returns border-radius styles', () => {
  const sx = radii()({ rounded: 'left' })
  expect(sx).toEqual({
    borderRadius: '2px 0 0 2px'
  })
})


import sys from 'system-components'

const css = props => props.css

export const Base = sys(
  'space',
  'color',
  'fontSize',
  css
)

Base.displayName = 'Base'

export default Base

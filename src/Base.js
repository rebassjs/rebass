import sys from '@rebass/components'

const css = props => props.css

export const Base = sys({},
  'space',
  'color',
  'fontSize',
  css
)

Base.displayName = 'Base'

export default Base

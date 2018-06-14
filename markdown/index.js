const React = require('react')
const Rebass = require('rebass')

const defaultProps = {
  h1: {
    is: 'h1',
    mt: 5,
    mb: 3,
    f: 7
  },
  h2: {
    is: 'h2',
    mt: 4,
    mb: 3,
    f: 6
  },
  h3: {
    is: 'h3',
    mt: 4,
    mb: 3,
    f: 5
  },
  h4: {
    is: 'h4',
    mt: 4,
    mb: 3,
    f: 4
  },
  h5: {
    is: 'h5',
    mt: 4,
    mb: 3,
    f: 2
  },
  h6: {
    is: 'h6',
    mt: 4,
    mb: 3,
    f: 1
  },

  p: {
    is: 'p',
    f: 3,
    mb: 4
  },

  a: {
    is: 'a',
    color: 'blue'
  },

  img: {
    css: `
      max-width: 100%;
    `
  }
}

const ext = (Component, props = {}) => {
  const css = props.css
  delete props.css

  let C = null

  if (css) {
    C = Component.extend`${css || ''}`
  } else {
    C = props => React.createElement(Component, props)
  }

  C.defaultProps = props

  return C
}

module.exports = userProps => {
  const props = Object.assign(defaultProps, userProps)

  return {
    h1: ext(Rebass.Heading, props.h1),
    h2: ext(Rebass.Heading, props.h2),
    h3: ext(Rebass.Heading, props.h3),
    h4: ext(Rebass.Heading, props.h4),
    h5: ext(Rebass.Heading, props.h5),
    h6: ext(Rebass.Heading, props.h6),
    p: ext(Rebass.Text, props.p),
    img: ext(Rebass.Image, props.img)
  }
}

const Rebass = require('rebass')

const defaultProps = {
  h1: {
    is: 'h1',
    fontSize: 7
  },
  h2: {
    is: 'h2',
    fontSize: 6
  },
  h3: {
    is: 'h3',
    fontSize: 5
  },
  h4: {
    is: 'h4',
    fontSize: 4
  },
  h5: {
    is: 'h5',
    fontSize: 2
  },
  h6: {
    is: 'h6',
    fontSize: 1,
    css: `
      text-transform: uppercase;
    `
  }
}

const ext = (Component, props = {}) => {
  const css = props.css
  delete props.css
  const C = Component.extend`${css || ''}`
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
  }
}

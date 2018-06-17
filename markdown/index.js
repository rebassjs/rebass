const React = require('react')
const Rebass = require('rebass')
const deepMerge = require('deepmerge') //.default

// hack for webpack
const merge = deepMerge.default || deepMerge

const {
  Base,
  Heading,
  Text,
  Image,
  Link,
  BlockLink,
  Blockquote,
  Divider,
  // Table,
  Pre,
  Code,
} = Rebass

const defaultProps = {
  h1: {
    is: 'h1',
    mt: 4,
    mb: 3,
    fontSize: 6
  },
  h2: {
    is: 'h2',
    mt: 4,
    mb: 3,
    fontSize: 5
  },
  h3: {
    is: 'h3',
    mt: 4,
    mb: 3,
    fontSize: 4
  },
  h4: {
    is: 'h4',
    mt: 4,
    mb: 3,
    fontSize: 3
  },
  h5: {
    is: 'h5',
    mt: 4,
    mb: 3,
    fontSize: 2
  },
  h6: {
    is: 'h6',
    mt: 4,
    mb: 3,
    fontSize: 1
  },
  p: {
    is: 'p',
    fontSize: 3,
    lineHeight: 1.625,
    mt: 3,
    mb: 4,
    css: {
      'ul &': {
        marginTop: 0,
        marginBottom: 0
      }
    }
  },
  a: {
    color: 'blue'
  },
  img: {},
  blockquote: {
    fontWeight: 'bold',
    pl: 3,
    mt: 4,
    mb: 4,
  },
  hr: {},
  code: {
    fontSize: 'inherit',
  },
  inlineCode: {
    fontSize: 'inherit'
  },
  pre: {
    p: 3,
    mt: 4,
    mb: 4,
    bg: '#f6f6f6'
  },
  ul: {
    is: 'ul',
    mt: 0,
    mb: 4,
    css: {
      'ul &': {
        // marginTop: 0,
        marginBottom: 0,
      }
    }
  },
  li: {
    is: 'li',
    mt: 2,
    mb: 2,
    fontSize: 3,
  },
  // placeholder until Table is in core
  table: {
    // todo: wrap in overflow container
    is: 'table',
    mt: 4,
    mb: 4,
    css: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
      borderColor: '#eee',
      '& th': {
        textAlign: 'left',
        verticalAlign: 'bottom',
      },
      '& td': {
        verticalAlign: 'top',
      },
      '& td, & th': {
        paddingTop: '8px',
        paddingBottom: '8px',
        paddingLeft: '0px',
        paddingRight: '16px',
        borderColor: 'inherit',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
      }
    }
  }
}

const createComponent = (Component, defaultProps) => {
  const C = props => React.createElement(Component, props)
  C.defaultProps = defaultProps
  return C
}

const createHeading = Component => props => {
  if (!props.id) return React.createElement(Component, props)
  return React.createElement(Component, props,
    React.createElement(BlockLink, {
      href: '#' + props.id
    },
      props.children
    )
  )
}

const components = {
  h1: createHeading(Heading),
  h2: createHeading(Heading),
  h3: createHeading(Heading),
  h4: createHeading(Heading),
  h5: createHeading(Heading),
  h6: createHeading(Heading),
  p: Text,
  a: Link,
  img: Image,
  hr: Divider,
  blockquote: Blockquote,
  pre: Pre,
  code: Code,
  inlineCode: Code,

  // placeholders
  ul: Base,
  li: Text,
  table: Base,
}

const tags = Object.keys(components)

module.exports = (customProps = {}) => {
  const scope = {}
  tags.forEach(tag => {
    const Component = components[tag]
    const props = merge(defaultProps[tag], customProps[tag] || {})
    scope[tag] = createComponent(Component, props)
  })
  return scope
}


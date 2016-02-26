
import React from 'react'
import theme from './theme'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

const Heading =({ level, size, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const headingConfig = { ...theme.Heading, ...(rebass ? rebass.Heading : {}) }
  const Component = `h${level}`
  const fontSize = typeof size === 'number' ? theme.fontSizes[size] : theme.fontSizes[level]

  return (
    <Component
      {...props}
      className='Heading'
      style={{
        fontSize,
        margin: 0,
        ...headingConfig,
        ...style
      }} />
  )
}

Heading.propTypes = {
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
}

Heading.defaultProps = {
  level: 2
}

Heading.contextTypes = {
  rebass: React.PropTypes.object
}

export default Heading


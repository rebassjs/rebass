
import React from 'react'
import theme from './theme'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

const Heading =({
  level,
  size,
  big,
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const headingStyle = rebass ? rebass.Heading : {}
  const { bold } = config
  const Component = `h${level}`
  const fontSize = (typeof size === 'number' ? theme.fontSizes[size] : theme.fontSizes[level]) * (big ? 2 : 1)

  return (
    <Component
      {...props}
      className='Heading'
      style={{
        fontSize,
        fontWeight: bold,
        lineHeight: 1.25,
        margin: 0,
        ...headingStyle,
        ...style
      }} />
  )
}

Heading.propTypes = {
  /** Heading level, e.g. level={1} for <h1> */
  level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  /** Visual size of heading */
  size: React.PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6]),
  /** Doubles the visual size - useful for marketing pages */
  big: React.PropTypes.bool
}

Heading.defaultProps = {
  level: 2
}

Heading.contextTypes = {
  rebass: React.PropTypes.object
}

export default Heading


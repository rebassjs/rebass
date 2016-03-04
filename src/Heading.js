
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Heading element with no margin and size based on fontSizes scale
 */

const Heading =({
  level,
  size,
  big,
  cx,
  ...props
}, { rebass }) => {
  const { fontSizes, bold } = { ...config, ...rebass }
  const Component = `h${level}`
  const fontSize = (typeof size === 'number' ? fontSizes[size] : fontSizes[level]) * (big ? 2 : 1)

  return (
    <Base
      {...props}
      tagName={Component}
      className={cx || 'Heading'}
      baseStyle={{
        fontSize,
        fontWeight: bold,
        lineHeight: 1.25,
        margin: 0
      }} />
  )
}

Heading.propTypes = {
  /** Doubles the visual size - useful for marketing pages */
  big: React.PropTypes.bool,
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

